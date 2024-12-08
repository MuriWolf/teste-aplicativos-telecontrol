import carregarOrdensServico from "../utils/api/carregarOrdensServico.js";
import carregarProdutos from "../utils/api/carregarProdutos.js";
import pegarDatatimeAtual from "../utils/pegarDatatimeAtual.js";
import { API_URL } from "../../../src/constants.js";

async function popularTabelaEFormOrdensServico() {
    let ordens = await carregarOrdensServico();
    let produtos = await carregarProdutos();

    let linhas = '';
    let formCampoCodigos = '';

    if (ordens && ordens.length > 0) {
        ordens.forEach(ordem => {
            linhas += `<tr>
                <td>${ordem.numero_ordem}</td>
                <td>${ordem.data_abertura}</td>
                <td>${ordem.nome_consumidor}</td>
                <td>${ordem.cpf_consumidor}</td>
                <td>${ordem.produto_codigo}</td>
            </tr>`;

        });
        $('#ordens-table tbody').html(linhas);
    }

    if (produtos && produtos.length > 0) {
        produtos.forEach(produto => {
            formCampoCodigos += `<option value="${produto.codigo}">${produto.codigo}</option>`
        });
    }
    $('#form-codigos').html(formCampoCodigos);
}

$(document).ready(function() {
    popularTabelaEFormOrdensServico();

    $('#ordem-form').on('submit', function(e) {
        e.preventDefault();

        const nome = $('#nome').val();
        const cpf = $('#cpf').val(); 
        const codigoProduto = $('#form-codigos').val(); 

        // Criar um objeto com os valores
        const novaOrdemServico = {
            data_abertura: pegarDatatimeAtual(),
            nome_consumidor: nome,
            cpf_consumidor: cpf,
            produto_codigo: codigoProduto,
        };

        const token = localStorage.getItem('token'); 

        if (!token) {
            windows.alert('token nao achado');
            return;
        }

        $.ajax({
            url: `${API_URL}/api/ordens-servico`,
            type: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            contentType: 'application/json',
            data: JSON.stringify(novaOrdemServico),
            success: function(response) {
                console.log(response);
                popularTabelaEFormOrdensServico();
                $('#ordem-form')[0].reset(); // Limpar o formulário
            },
            error: function(xhr) {
                alert('Erro ao criar produto: ' + xhr.responseText);
            }
        });
    });
});