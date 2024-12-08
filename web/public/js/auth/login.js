import { API_URL } from "../../../src/constants.js";

$(document).ready(function() {
    $('#login-form').on('submit', function(e) {
        e.preventDefault();

        const email = $('#email').val();
        const senha = $('#senha').val();

        $.ajax({
            url: `${API_URL}/api/entrar`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ email, senha }),
            success: function(response) {
                if (response.message == "Usuário identificado com sucesso!") {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('nome_user', response.nome);
                    
                    window.location.href = '/public/pages/index.html';
                }
            },
            error: function(error) {
                alert('Erro ao autenticar' + error);
            }
        });
    });
});