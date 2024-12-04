$.ajax({
    url: 'http://localhost:7999/api/produtos', // URL da sua API para obter produtos
    type: 'GET',
    headers: { Authorization: `Bearer ${token}` },
    success: function(data) {
        console.log(data);
    },
    error: function() {
        alert('Sessão expirada. Faça login novamente.');
        localStorage.removeItem('token'); // Remove token inválido
        window.location.href = '/login.html';
    }
});