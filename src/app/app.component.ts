import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  showResults = false;
  showTest = false;
  showHome = true;

  min = 0;
  max = 10;
  mid = parseFloat(((this.max - this.min) / 2).toFixed(5));
  preHighLight = false;
  nextHighLight = false;
  slider = 0;

  index = 0;
  disable = false;

  roda: any = {};
  rodaFinal: any = {};

  betterArea = null;
  worstArea = null;

  @ViewChild('polarChart', { static: true }) chartRef;
  chart: any;

  set sliderValue(value: number) {
    this.slider = value;
    this.highlightIcon();
  }

  get sliderValue(): number {
    return this.slider;
  }

  async ngOnInit() {
    this.slider = 0;

    await this.resetValues();
  }

  resetValues() {
    return new Promise<any>((resolve) => {
      this.rodaFinal = {
        saude: 0,
        intelectual: 0,
        emocional: 0,

        realizacao: 0,
        financeiro: 0,
        contribuicaoSocial: 0,

        familia: 0,
        amoroso: 0,
        vidaSocial: 0,

        diversao: 0,
        felicidade: 0,
        espiritualidade: 0,
      };

      this.roda = {
        saude: [0, 0, 0, 0, 0],
        intelectual: [0, 0, 0, 0, 0],
        emocional: [0, 0, 0, 0, 0],

        realizacao: [0, 0, 0, 0, 0],
        financeiro: [0, 0, 0, 0, 0],
        contribuicaoSocial: [0, 0, 0],

        familia: [0, 0, 0, 0, 0],
        amoroso: [0, 0, 0, 0, 0],
        vidaSocial: [0, 0, 0, 0],

        diversao: [0, 0, 0, 0, 0],
        felicidade: [0, 0, 0, 0, 0],
        espiritualidade: [0, 0, 0, 0],
      };

      this.betterArea = null;
      this.worstArea = null;

      this.index = 0;
    });
  }

  highlightIcon(): void {
    const lower = this.slider >= this.mid;
    this.preHighLight = !lower;
    this.nextHighLight = lower;
  }

  onIndexChange(index: number): void {
    this.index = index;
  }

  onDoneTest() {
    const calculateAverage = (array) => array.reduce((a, b) => a + b) / array.length;

    const results = [
      {
        label: 'Saúde',
        result: Math.round(calculateAverage(this.roda.saude)),
      },
      {
        label: 'Intelectual',
        result: Math.round(calculateAverage(this.roda.intelectual)),
      },
      {
        label: 'Emocional',
        result: Math.round(calculateAverage(this.roda.emocional)),
      },
      {
        label: 'Realização',
        result: Math.round(calculateAverage(this.roda.realizacao)),
      },
      {
        label: 'Financeiro',
        result: Math.round(calculateAverage(this.roda.financeiro)),
      },
      {
        label: 'Contribuição Social',
        result: Math.round(calculateAverage(this.roda.contribuicaoSocial)),
      },
      {
        label: 'Família',
        result: Math.round(calculateAverage(this.roda.familia)),
      },
      {
        label: 'Amoroso',
        result: Math.round(calculateAverage(this.roda.amoroso)),
      },
      {
        label: 'Vida Social',
        result: Math.round(calculateAverage(this.roda.vidaSocial)),
      },
      {
        label: 'Diversão',
        result: Math.round(calculateAverage(this.roda.diversao)),
      },
      {
        label: 'Felicidade',
        result: Math.round(calculateAverage(this.roda.felicidade)),
      },
      {
        label: 'Espiritualidade',
        result: Math.round(calculateAverage(this.roda.espiritualidade)),
      },
    ];

    this.betterArea = (results.reduce((p, c) => p.result > c.result ? p : c)).label;
    this.worstArea = (results.reduce((p, c) => p.result < c.result ? p : c)).label;

    this.rodaFinal = {
      datasets: [
        {
          data: [
            Math.round(calculateAverage(this.roda.saude)),
            Math.round(calculateAverage(this.roda.intelectual)),
            Math.round(calculateAverage(this.roda.emocional)),
            Math.round(calculateAverage(this.roda.realizacao)),
            Math.round(calculateAverage(this.roda.financeiro)),
            Math.round(calculateAverage(this.roda.contribuicaoSocial)),
            Math.round(calculateAverage(this.roda.familia)),
            Math.round(calculateAverage(this.roda.amoroso)),
            Math.round(calculateAverage(this.roda.vidaSocial)),
            Math.round(calculateAverage(this.roda.diversao)),
            Math.round(calculateAverage(this.roda.felicidade)),
            Math.round(calculateAverage(this.roda.espiritualidade)),
          ],
          backgroundColor: [
            'rgb(22, 98, 239)',
            'rgb(96, 120, 210)',
            'rgb(218, 191, 186)',
            'rgb(198, 35, 18)',
            'rgb(61, 47, 40)',
            'rgb(120, 46, 71)',
            'rgb(125, 176, 124)',
            'rgb(52, 65, 46)',
            'rgb(5, 157, 205)',
            'rgb(160, 104, 235)',
            'rgb(210, 6, 84)',
            'rgb(180, 94, 182)',
          ],
        }
      ],
      labels: [
        'Saúde',
        'Desenvolvimento Intelectual',
        'Equilíbrio Emocional',
        'Realização e Propósito',
        'Recursos Financeiros',
        'Contribuição Social',
        'Família',
        'Relacionamento Amoroso',
        'Vida Social',
        'Hobbies e Diversão',
        'Plenitude e Felicidade',
        'Espritualidade',
      ],
    };

    this.showResults = true;
    this.showHome = false;
    this.showTest = false;

    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'polarArea',
      data: this.rodaFinal,
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        },
      }
    });
  }

  resetTest() {
    this.resetValues();

    this.showTest = true;
    this.showResults = false;
    this.showHome = false;
  }
}
