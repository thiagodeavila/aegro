import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterService } from 'src/services/router.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() editable: boolean;

  @Output()
  clickEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private routerService: RouterService
  ) { }

  ngOnInit() {
  }

  click(): void {
    this.clickEmitter.emit();
  }

  getRoute(): string {
    return this.routerService.getFormRoute();
  }

  getName(): string {
    switch (this.getRoute()) {
      case 'farm':
        return 'Cadastrar Fazenda';
      case 'plot':
        return 'Cadastrar Talhão';
      case 'productivity':
        return 'Cadastrar Produção';
    }
  }
}
