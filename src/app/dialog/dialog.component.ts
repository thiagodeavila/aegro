import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FarmService } from 'src/services/farm.service';
import { PlotService } from 'src/services/plot.service';
import { ProductionService } from 'src/services/production.service';
import { RouterService } from 'src/services/router.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() editable: boolean;

  @Output()
  closeDialog: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  farmFields: object = {
    name: ''
  };

  plotFields: object = {
    name: '',
    area: null
  };

  productionFields: object = {
    name: '',
    weight: null
  };

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private plotService: PlotService,
    private routerService: RouterService,
    private productionService: ProductionService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(this.getFields());
  }

  getRoute(): string {
    return this.routerService.getFormRoute();
  }

  getFields(): object {
    switch (this.getRoute()) {
      case 'farm':
        return this.farmFields;
      case 'plot':
        return this.plotFields;
      case 'productivity':
        return this.productionFields;
    }
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

  create(): void {
    const data = this.form.getRawValue();
    switch (this.getRoute()) {
      case 'farm':
        this.farmService.create(data);
        break;
      case 'plot':
        this.plotService.create(data);
        break;
      case 'productivity':
        this.productionService.create(data);
        break;
    }
  }

  close(): void {
    this.closeDialog.emit();
  }

}
