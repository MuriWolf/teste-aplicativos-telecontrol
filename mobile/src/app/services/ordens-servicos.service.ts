import { Injectable } from '@angular/core';
import { OrdemServico } from '../interfaces/ordem-servico';
import { OrdemServicoDescricoes } from '../interfaces/ordem-servico-descricoes';

@Injectable({
  providedIn: 'root'
})
export class OrdensServicosService {

    async carregarOrdensServico(): Promise<OrdemServico[] | []> {
        const token = localStorage.getItem('token'); 

        if (!token) {
            window.alert('Token não encontrado');
            return [];
        }

        try {
            const response = await fetch('http://localhost:8000/api/ordens-servico', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
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

    async carregarOrdemServico(numeroOrdem: number): Promise<OrdemServico | undefined> {
        const token = localStorage.getItem('token'); 

        if (!token) {
            window.alert('Token não encontrado');
            return undefined;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/ordens-servico/${numeroOrdem}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao carregar ordens de serviço');
            }

            const data = await response.json();        
            return data; 
        } catch (error) {
            console.error('Erro ao carregar ordens de serviço:', error);
            return undefined;
        }
    }

    async autualizarDescricoesOrdemServico(numeroOrdem: number, conteudo: OrdemServicoDescricoes): Promise<OrdemServico | undefined> {
        const token = localStorage.getItem('token'); 

        if (!token) {
            window.alert('Token não encontrado');
            return undefined;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/ordens-servico/${numeroOrdem}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(conteudo)
            });


            if (!response.ok) {
                throw new Error('Erro ao atualizar ordens de serviço');
            }

            const data = await response.json();        
            return data; 
        } catch (error) {
            console.error('Erro ao atualizar ordens de serviço:', error);
            return undefined;
        }
    }

  constructor() { }
}
