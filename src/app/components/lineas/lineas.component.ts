import { Component } from '@angular/core';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: [ './lineas.component.css' ]
})

export class LineasComponent {

  public lineChartOptions: any = { responsive: true };

  public lineChartType: string = 'line';

  public lineChartLegend: boolean = true;

  public lineChartLabels: Array<any> = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  public lineChartData: Array<any> = [
    { data: [ 65, 59, 80, 81, 56, 55, 40, 73, 21, 34, 10, 45 ], label: 'Mango'},
    { data: [ 28, 48, 40, 19, 86, 27, 90, 87, 23, 69, 93, 99 ], label: 'Fresa'},
    { data: [ 18, 48, 77, 9, 100, 27, 40, 65, 28, 18, 59, 48 ], label: 'Sandia'},
    { data: [ 45, 99, 48, 10, 93, 59, 34, 69, 18, 21, 23, 28 ], label: 'Melón'}
  ];

  public lineChartColors: Array<any> = [
    { // Mango
      backgroundColor: 'rgba(255,205,72,0.2)',
      borderColor: 'rgba(255,205,72,1)',
      pointBackgroundColor: 'rgba(255,205,72,1)',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgba(255,205,72,0.8)'
    },
    { // Fresa
      backgroundColor: 'rgba(213,48,50,0.2)',
      borderColor: 'rgba(213,48,50,1)',
      pointBackgroundColor: 'rgba(213,48,50,1)',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgba(213,48,50,1)'
    },
    { // Sandía
      backgroundColor: 'rgba(0,145,63,0.2)',
      borderColor: 'rgba(0,145,63,1)',
      pointBackgroundColor: 'rgba(0,145,63,1)',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgba(0,145,63,0.8)'
    },
    { // Melón
      backgroundColor: 'rgba(255,166,77,0.2)',
      borderColor: 'rgba(255,166,77,1)',
      pointBackgroundColor: 'rgba(255,166,77,1)',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgba(255,166,77,0.8)'
    }
  ];

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  public chartClicked( e: any ): void {
    console.log( e );
  }

  public chartHovered( e: any): void {
    console.log( e );
  }
}
