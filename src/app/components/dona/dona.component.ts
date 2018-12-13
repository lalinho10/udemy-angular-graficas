import { Component } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})

export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Mango', 'Fresa', 'Sandia', 'Melón' ];

  public doughnutChartData: number[] = [ 300, 150, 150, 300 ];

  public doughnutChartColors: Array<any> = [
    {
      backgroundColor: [ 'rgba(255,205,72,0.6)', 'rgba(213,48,50,0.6)', 'rgba(0,145,63,0.6)', 'rgba(255,166,77,0.6)' ],
      borderColor: [ 'rgba(255,205,72,1)', 'rgba(213,48,50,1)',  'rgba(0,145,63,1)', 'rgba(255,166,77,1)'  ],
      hoverBackgroundColor: [ 'rgba(255,205,72,0.4)', 'rgba(213,48,50,0.4)', 'rgba(0,145,63,0.4)', 'rgba(255,166,77,0.4)' ],
      hoverBorderColor: [ 'rgba(255,205,72,0.8)', 'rgba(213,48,50,0.8)', 'rgba(0,145,63,0.8)', 'rgba(255,166,77,0.8)'  ]
    }
  ];

  public randomize(): void {
    this.doughnutChartData = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 )
    ];
  }

  public chartClicked( e: any ): void {
    console.log( e );
  }

  public chartHovered( e: any ): void {
    console.log( e );
  }

}
