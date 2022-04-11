import { Injectable } from '@angular/core';
import { Farm } from 'src/models/farm';
import { Plot } from 'src/models/plot';
import { Production } from 'src/models/production';
import { FarmService } from './farm.service';
import { PlotService } from './plot.service';

@Injectable()
export class ProductionService {

  currentId: number;
  currentIdReport: number;
  farmList: Array<Farm> = new Array<Farm>();

  constructor(
    private farmService: FarmService,
    private plotService: PlotService
  ) {
    this.farmList = this.farmService.farmList;
  }

  list(id: number, report?: boolean): Array<Production> {
    report ? this.plotService.setCurrentId(id) : this.plotService.setCurrentIdReport(id);

    return this.farmList
      .find(farm => farm.id === this.farmService.getCurrentId()).plots
      .find(plot => plot.id === id).productions || [];
  }

  saveList(): void {
    localStorage.setItem('farm_list', JSON.stringify(this.farmList));
  }

  get(id: number): Farm {
    return this.farmList.find((farm: Farm) => farm.id === id);
  }

  create(production: Production): void {
    this.farmList.map((farm: Farm) => {
      if (farm.id === this.farmService.getCurrentId()) {
        farm.plots.map((plot: Plot) => {
          if (plot.id === this.plotService.getCurrentId()) {
            production.id = plot.productions.length + 1;
            plot.productions.push(production);
          }
        });
      }
    });

    this.saveList();
  }

  delete(farm: Farm): void {

  }
}
