export interface OrdemServico {
    numero_ordem: number;       
    data_abertura: string;   
    nome_consumidor: string;    
    cpf_consumidor: string;     
    produto_codigo: string;     
    defeito_reclamado: string | null;
    solucao_tecnica: string | null;  
}