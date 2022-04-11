import { Injectable } from '@angular/core';
import { Farm } from 'src/models/farm';
import { Plot } from 'src/models/plot';
import { Production } from 'src/models/production';
import { FarmService } from './farm.service';

@Injectable()
export class PlotService {

  currentId: number;
  currentIdReport: number;
  farmList: Array<Farm> = new Array<Farm>();

  constructor(
    private farmService: FarmService,
  ) {
    this.farmList = this.farmService.farmList;
  }

  list(id: number, report?: boolean): Array<Plot> {
    report ? this.farmService.setCurrentId(id) : this.farmService.setCurrentIdReport(id);

    return this.farmList.find(farm => farm.id === id).plots;
  }

  saveList(): void {
    localStorage.setItem('farm_list', JSON.stringify(this.farmList));
  }

  get(id: number): Farm {
    return this.farmList.find((farm: Farm) => farm.id === id);
  }

  create(plot: Plot): void {
    plot.productions = Array<Production>();

    this.farmList.map((farm: Farm) => {
      if (farm.id === this.farmService.getCurrentId()) {
        plot.id = farm.plots.length + 1;
        farm.plots.push(plot);
      }
    });

    this.saveList();
  }

  delete(farm: Farm): void {

  }

  setCurrentId(id: number): void {
    this.currentId = id;
  }

  getCurrentId(): number {
    return this.currentId;
  }

  setCurrentIdReport(id: number): void {
    this.currentIdReport = id;
  }

  getCurrentIdReport(): number {
    return this.currentIdReport;
  }
}
