import { Injectable } from '@angular/core';

@Injectable()
export class RouterService {

  formRoute: 'farm' | 'plot' | 'productivity' = 'farm';
  reportRoute: 'farm' | 'plot' | 'productivity' = 'farm';

  constructor() {}

  getFormRoute(): string {
    return this.formRoute;
  }

  setFormRoute(route: 'farm' | 'plot' | 'productivity'): void {
    this.formRoute = route;
  }

  getReportRoute(): string {
    return this.reportRoute;
  }

  setReportRoute(route: 'farm' | 'plot' | 'productivity'): void {
    this.reportRoute = route;
  }
}
