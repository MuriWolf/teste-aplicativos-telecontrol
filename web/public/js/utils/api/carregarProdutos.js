import verificarAutenticacaoUsuario from "../verificarAutenticacaoUsuario.js";
import { API_URL } from "../../../../src/constants.js";

export default async function carregarProdutos() {
    const token = localStorage.getItem('token'); 

    if (!token) {
        window.alert('Token não encontrado');
        return [];
    }

    try {
        const response = await fetch(`${API_URL}/api/produtos`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        verificarAutenticacaoUsuario(response);

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
