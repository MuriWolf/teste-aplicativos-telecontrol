import carregarProdutos from "../utils/api/carregarProdutos.js";
import { API_URL } from "../../../src/constants.js";

async function popularTabelaProdutos() {
    let produtos = await carregarProdutos();

    let linhas = '';
    if (produtos && produtos.length > 0) {
        produtos.forEach(produto => {
            linhas += `<tr>
                <td>${produto.codigo}</td>
                <td>${produto.nome}</td>
                <td>${produto.tempo_garantia}</td>
                <td>${produto.status ? 'Ativo' : 'Inativo'}</td>
            </tr>`;
        });
        $('#produtos-table tbody').html(linhas);
    }
}

$(document).ready(function() {
    popularTabelaProdutos();

    $('#produto-form').on('submit', function(e) {
        e.preventDefault();

        let selectedStatus = $('input[name="statusRadio"]:checked').val();
        selectedStatus = selectedStatus === 'ativo' ? true : false;

        const novoProduto = {
            codigo: $('#codigo').val(),
            nome: $('#nome').val(),
            tempo_garantia: $('#tempo_garantia').val(),
            status: selectedStatus 
        };

        const token = localStorage.getItem('token'); 

        if (!token) {
            window.alert('token nao achado');
            return;
        }

        $.ajax({
            url: `${API_URL}/api/produtos`,
            type: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            contentType: 'application/json',
            data: JSON.stringify(novoProduto),
            success: function(response) {
                popularTabelaProdutos(); 
                $('#produto-form')[0].reset(); 
            },
            error: function(xhr) {
                alert('Erro ao criar produto: ' + xhr.responseText);
            }
        });
    });
});