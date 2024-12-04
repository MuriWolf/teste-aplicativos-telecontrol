export default async function carregarOrdensServico() {
    const token = localStorage.getItem('token'); 

    if (!token) {
        window.alert('Token não encontrado');
        return [];
    }

    try {
        const response = await fetch('http://localhost:8000/api/ordens-servico', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao carregar ordens de serviço');
        }

        const data = await response.json();
        return data.ordens_servico; 
    } catch (error) {
        console.error('Erro ao carregar ordens de serviço:', error);
        return [];
    }
}