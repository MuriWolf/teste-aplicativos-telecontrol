export default async function carregarProdutos() {
    const token = localStorage.getItem('token'); 

    if (!token) {
        window.alert('Token não encontrado');
        return [];
    }

    try {
        const response = await fetch('http://localhost:8000/api/produtos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao carregar produtos');
        }

        const data = await response.json();
        return data.produtos; 
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        return [];
    }
}
