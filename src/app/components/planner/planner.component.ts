import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Destino {
  nome: string;
  data: string;
}

interface Roteiro {
  nome: string;
  dataInicio: string;
  dataFim: string;
  destinos: Destino[];
}


@Component({
  selector: 'app-planner',
  imports: [CommonModule],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss'
})
export class PlannerComponent {
  roteiros: Roteiro[] = [];

  adicionarRoteiro() {
    const nome = prompt("Nome do roteiro:");
    const dataInicio = prompt("Data de início (YYYY-MM-DD):");
    const dataFim = prompt("Data de fim (YYYY-MM-DD):");

    if (nome && dataInicio && dataFim) {
      this.roteiros.push({
        nome,
        dataInicio,
        dataFim,
        destinos: []
      });
    }
  }

  adicionarDestino(index: number) {
    const nome = prompt("Nome do destino:");
    const data = prompt("Data do destino (YYYY-MM-DD):");

    if (nome && data) {
      this.roteiros[index].destinos.push({ nome, data });
    }
  }
}
