$(document).ready(function () {
    const token = localStorage.getItem('token');
    console.log(!window.location.href)
    if (!token && (!window.location.href.includes('login') || !window.location.href.includes('signup'))) {
        window.location.href = '/public/pages/login.html';
    } 
});