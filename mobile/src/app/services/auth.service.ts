import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  async login(email: string, senha: string): Promise<{ status: number } | undefined>  {
    try {
        const response = await fetch('http://localhost:8000/api/entrar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha }),
        });
        
        if (!response.ok) {
            throw new Error('Erro ao entrar');
        }

        const data = await response.json();;
        
        if (data.message == "Usuário identificado com sucesso!") {
            localStorage.setItem('token', data.token);
            localStorage.setItem('nome_user', data.nome);
        }

        return { status: 200 };
    } catch (error) {
        console.error('Erro ao entrar:', error);
        return undefined;
    }
  }

  constructor() { }
}
