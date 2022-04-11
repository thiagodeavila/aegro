import { Injectable } from '@angular/core';
import { Farm } from '../models/farm';
import { Plot } from '../models/plot';

@Injectable()
export class FarmService {

  currentId: number;
  currentIdReport: number;
  farmList: Array<Farm> = new Array<Farm>();

  constructor() {
    this.farmList = JSON.parse(localStorage.getItem('farm_list')) || [];
  }

  list(): Array<Farm> {
    return this.farmList;
  }

  saveList(): void {
    localStorage.setItem('farm_list', JSON.stringify(this.farmList));
  }

  get(id: number): Farm {
    return this.farmList.find((farm: Farm) => farm.id === id);
  }

  create(farm: Farm): void {
    farm.id = this.farmList.length + 1;
    farm.plots = Array<Plot>();
    this.farmList.push(farm);
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
