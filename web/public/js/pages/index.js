$(document).ready(function() {
    const nomeUsuario = localStorage.getItem("nome_user");

    if (nomeUsuario) {
        $('#nome').html(nomeUsuario.split(" ")[0]);
    }
});