import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dialogActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  create(): void {
    this.dialogActive = true;
  }

  close(): void {
    this.dialogActive = false;
  }

}
