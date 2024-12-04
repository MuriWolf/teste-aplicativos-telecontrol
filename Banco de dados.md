# Banco de dados

## Postgress

1. **Tabela usuario**
   1. id_usuario: int primary_key 
   2. nome: varchar (100)
   3. email: varchar (320)
   4. senha varchar (100)
2. **Tabela produto**
   1. codigo: varchar (60) primary_key
   2. nome: varchar (200)
   3. tempo_garantia: date
   4. status: boolean
3. **Tabela ordem_servico**
   1. numero_ordem: int primary_key
   2. data_abertura: datetime default current_timestamp
   3. nome_consumidor: varchar(100)
   4. cpf_consumidor: varchar(11)
   5. produto: produto (apenas produtos já cadastrados)
   6. defeito_reclamado: varchar(2000)
   7. solucao_tecnica: varchar(2000)

