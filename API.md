# API

### Usuario



* GET /usuario/{id_usuario}
  * Resposta: Status 200 (OK),  Status 404 (NOT FOUND)

```json
"id_usuario": int,
"nome": string,
"email": string
```

* POST /usuario/registrar
  * Resposta: Status 201 (CREATED)

* POST /usuario/entrar

  * Entrada:

  ```json
  "email": string,
  "senha": string
  ```

  * Resposta: Status 200 (OK)

### Ordens de serviço

* POST /ordens-servico/

  * Entrada:

    ```json
    "data_abertura": datetime,
    "nome_consumidor": string,
    "cpf_consumidor": string,
    "produto": produto
    ```

  * Resposta: Status 201 (CREATED)

PATCH /ordens-servico/{numero_ordem}

* Entrada:

  ```json
  "defeito_reclamado": string,
  "solucao_tecnica": string,
  ```

* Resposta: Status 204 (NO CONTENT)

* GET /ordens-servico
  * Resposta: Status 200 (OK), Status 404 (NOT FOUND)

```json
[]
"numero_ordem": int
"data_abertura": datetime,
"nome_consumidor": string,
"cpf_consumidor": string,
"produto": produto
```

* GET /ordens-servico/{numero_ordem}
  * Resposta: Status 200 (OK), Status 404 (NOT FOUND)

```json
"numero_ordem": int
"data_abertura": datetime,
"nome_consumidor": string,
"cpf_consumidor": string,
"produto": produto
```

### Produtos

* POST /produto

  * Entrada:

    ```json
    "codigo": string,
    "nome": string,
    "tempo_garantia": date,
    "status": boolean
    ```

  * Resposta: Status 201 (CREATED)

* GET /produtos/
  * Resposta: Status 200 (OK), Status 404 (NOT FOUND)

```json
[]
"codigo": string,
"nome": string,
"tempo_garantia": date,
"status": boolean
```

* GET /produtos/{codigo}
  * Resposta: Status 200 (OK), Status 404 (NOT FOUND)

```json
"codigo": string,
"nome": string,
"tempo_garantia": date,
"status": boolean
```

### 