import { Component, OnInit, Input } from '@angular/core';
import { FarmService } from 'src/services/farm.service';
import { PlotService } from 'src/services/plot.service';
import { ProductionService } from 'src/services/production.service';
import { RouterService } from 'src/services/router.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  editable: boolean;

  currentFarm: number;
  currentPlot: number;

  data: any = [];

  constructor(
    private farmService: FarmService,
    private plotService: PlotService,
    private routerService: RouterService,
    private productionService: ProductionService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getRoute() {
    return this.editable ? this.routerService.getFormRoute() : this.routerService.getReportRoute();
  }

  getData(id?: number, report?: boolean): any {
    switch (this.getRoute()) {
      case 'farm':
        this.data = this.farmService.list();
        break;
      case 'plot':
        this.data = this.plotService.list(id, report);
        break;
      case 'productivity':
        this.data = this.productionService.list(id, report);
        break;
    }
  }

  accessItem(id: number): void {
    const nextRoute = this.getRoute() === 'farm' ? 'plot' : 'productivity';
    const service = this.getRoute() === 'farm' ? this.farmService : this.plotService;

    if (this.editable) {
      this.routerService.setFormRoute(nextRoute);
      service.setCurrentId(id);
      this.getData(id);
    } else {
      this.routerService.setReportRoute(nextRoute);
      service.setCurrentIdReport(id);
      this.getData(id, true);
    }
  }

  getFarmProduction(id: number): number {
    let sum = 0;
    this.farmService.farmList
      .find(farm => farm.id === id).plots
      .forEach(plot => {
        plot.productions.forEach(production => {
          sum += production.weight;
        });
      });

    return sum;
  }

  getPlotProduction(id: number): number {
    let sum = 0;
    this.farmService.farmList
    .find(farm => farm.id === this.farmService.currentIdReport).plots
    .find(plot => plot.id === id).productions
    .forEach(production => {
      sum += production.weight;
    });
    return sum;
  }
}
