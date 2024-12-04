import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdensServicosService } from '../services/ordens-servicos.service';
import { OrdemServico } from '../interfaces/ordem-servico';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemServicoDescricoes } from '../interfaces/ordem-servico-descricoes';

@Component({
  selector: 'app-ordens-servicos-detalhes',
  templateUrl: './ordens-servicos-detalhes.page.html',
  styleUrls: ['./ordens-servicos-detalhes.page.scss'],
})
export class OrdensServicosDetalhesPage implements OnInit {
  ordemServicoForm: FormGroup = new FormGroup({
    defeito_reclamado: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    solucao_tecnica: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(320)])
  });

  numeroOrdem: number | undefined;
  ordemservico: OrdemServico | undefined;
  constructor(private route: ActivatedRoute, private ordensServicosService: OrdensServicosService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.numeroOrdem = Number(params.get('numero_ordem'));     
    });

    if (this.numeroOrdem) {
      this.ordemservico = await this.ordensServicosService.carregarOrdemServico(this.numeroOrdem);
      
      if (this.ordemservico) {
        this.ordemServicoForm.patchValue({
          defeito_reclamado: this.ordemservico.defeito_reclamado,
          solucao_tecnica: this.ordemservico.solucao_tecnica
        });
      }
    }
  }

  async handleFormSubmit() {
    if (this.ordemServicoForm.value.solucao_tecnica && this.ordemServicoForm.value.defeito_reclamado && this.numeroOrdem) {
      let response = await this.ordensServicosService.autualizarDescricoesOrdemServico(this.numeroOrdem, this.ordemServicoForm.value as OrdemServicoDescricoes);
      
      if (response?.nome_consumidor) {
        this.ordemservico = response;
      }
      
    }
  }
}
