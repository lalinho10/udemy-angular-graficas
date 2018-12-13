import { Component } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})

export class BarrasComponent {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType: string = 'bar';

  public barChartLegend: boolean = true;

  public barChartLabels: Array<any> = [
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

  public barChartData: Array<any> = [
    { data: [ 65, 59, 80, 81, 56, 55, 40, 73, 21, 34, 10, 45 ], label: 'Mango'},
    { data: [ 28, 48, 40, 19, 86, 27, 90, 87, 23, 69, 93, 99 ], label: 'Fresa'},
    { data: [ 18, 48, 77, 9, 100, 27, 40, 65, 28, 18, 59, 48 ], label: 'Sandia'},
    { data: [ 45, 99, 48, 10, 93, 59, 34, 69, 18, 21, 23, 28 ], label: 'Melón'}
  ];

  public barChartColors: Array<any> = [
    { // Mango
      backgroundColor: 'rgba(255,205,72,0.6)',
      borderColor: 'rgba(255,205,72,1)',
      hoverBackgroundColor: 'rgba(255,205,72,0.6)',
      hoverBorderColor: 'rgba(255,205,72,0.4)'
    },
    { // Fresa
      backgroundColor: 'rgba(213,48,50,0.6)',
      borderColor: 'rgba(213,48,50,1)',
      hoverBackgroundColor: 'rgba(213,48,50,0.6)',
      hoverBorderColor: 'rgba(213,48,50,0.4)'
    },
    { // Sandía
      backgroundColor: 'rgba(0,145,63,0.6)',
      borderColor: 'rgba(0,145,63,1)',
      hoverBackgroundColor: 'rgba(0,145,63,0.6)',
      hoverBorderColor: 'rgba(0,145,63,0.4)'
    },
    { // Melón
      backgroundColor: 'rgba(255,166,77,0.6)',
      borderColor: 'rgba(255,166,77,1)',
      hoverBackgroundColor: 'rgba(255,166,77,0.6)',
      hoverBorderColor: 'rgba(255,166,77,0.4)'
    }
  ];

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  public chartClicked( e: any ): void {
    console.log( e );
  }

  public chartHovered( e: any): void {
    console.log( e );
  }
}
