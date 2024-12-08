<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Home</title>
</head>
<body>
    <div class="container" style="max-width: 920px;">
        <?php 
          include "../components/header.component.php";
          include "../enums/PagesEnum.php";
          echo createHeader(Pages::Home);
        ?>        

        <h2 class="text-center">bem vindo, <span id="nome"></span>!</h2>

    </div>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
     <script src="../js/auth/auth.js"></script>
     <script src="../js/pages/index.js"></script>
</body>
</html>