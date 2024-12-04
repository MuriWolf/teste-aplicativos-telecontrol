export default function verificarAutenticacaoUsuario(response) {
    if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('nome_user');
        window.location.href = '/public/pages/login.html';
    }
} 
