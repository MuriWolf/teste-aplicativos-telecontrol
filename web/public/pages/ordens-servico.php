<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Ordens de Serviço</title>
</head>
<body>
    <div class="container mb-5" style="max-width: 920px;">
        <?php 
          include "../components/header.component.php";
          include "../enums/PagesEnum.php";
          echo createHeader(Pages::OrdensServicos);
        ?>    

        <h2>Adicionar Ordem de Serviço</h1>
        <form id="ordem-form" class="mb-5">
            <div class="form-group">
                <label for="nome">Nome do Consumidor</label>
                <input type="text" class="form-control" id="nome" aria-describedby="nomeHelp" placeholder="Coloque o nome do consumidor">
            </div>
            <div class="form-group">
                <label for="nome">CPF do Consumidor</label>
                <input type="text" class="form-control" maxlength="11" id="cpf" aria-describedby="cpfHelp" placeholder="Coloque o cpf do consumidor. Ex: 12345678900">
                <small id="cpfHelp" class="form-text text-muted">Coloque sem formatação</small>
            </div>
            <div class="form-group">
                <label for="nome">Código do Produto</label>
                <select id="form-codigos" class="custom-select custom-select-md mb-3">
                    <option selected >escolha um código de produto</option>
                </select>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <h2>Lista de Ordens de Serviço</h1>
        <div class="table-responsive">
            <table id="ordens-table" class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Numero da Ordem de Serviço</th>
                    <th scope="col">Data de Abertura</th>
                    <th scope="col">Nome do Consumidor</th>
                    <th scope="col">CPF do Consumidor</th>
                    <th scope="col">Codigo do Produto</th>
                    </tr>
                </thead>
                <tbody>
    
                </tbody>
            </table>
        </div>
    </div>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
     <script src="../js/auth/auth.js"></script>
     <script src="../js/pages/ordensServico.js" type="module"></script>
</body>
</html>