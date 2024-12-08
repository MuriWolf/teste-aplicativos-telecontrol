<?php
function createHeader(Pages $currentPage) {
    return '
        <header class="d-flex justify-content-center py-3 mb-3">
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="./index.php" class="nav-link ' . ($currentPage === Pages::Home ? 'active' : '') . '" >Home</a></li>
              <li class="nav-item"><a href="./ordens-servico.php" class="nav-link ' . ($currentPage === Pages::OrdensServicos ? 'active' : '') . '">Ordens de Serviço</a></li>
              <li class="nav-item"><a href="./produtos.php" class="nav-link ' . ($currentPage === Pages::Produtos ? 'active' : '') . '">Produtos</a></li>
            </ul>
          </header>
    ';
}