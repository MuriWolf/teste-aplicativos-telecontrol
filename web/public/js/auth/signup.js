$(document).ready(function() {
    $('#signup-form').on('submit', function(e) {
        e.preventDefault();

        const nome = $('#nome').val();
        const email = $('#email').val();
        const senha = $('#senha').val();

        $.ajax({
            url: 'http://localhost:8000/api/cadastrar',
            async: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ nome, email, senha }),
            success: function(response) {
                if (response.message == "Usuário criado com sucesso!") {
                    window.location.href = '/public/pages/login.html';
                }
            },
            error: function(error) {
                alert('Erro ao autenticar' + error);
            }
        });
    });
});