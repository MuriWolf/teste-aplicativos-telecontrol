import { Component, OnInit } from '@angular/core';
import { OrdensServicosService } from '../services/ordens-servicos.service';
import { OrdemServico } from '../interfaces/ordem-servico';

@Component({
  selector: 'app-ordens-servicos',
  templateUrl: './ordens-servicos.page.html',
  styleUrls: ['./ordens-servicos.page.scss'],
})
export class OrdensServicosPage implements OnInit {
  ordensServicos: OrdemServico[] | [] = [];
  constructor(private ordensServicoService: OrdensServicosService) { }

  async ngOnInit() {
    this.ordensServicos = await this.ordensServicoService.carregarOrdensServico();
  }
}
