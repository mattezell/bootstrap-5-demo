import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  private confirmDialog!: Modal;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  openModal(confirmationDialog: HTMLElement) {
    this.confirmDialog = new Modal(confirmationDialog);
    this.confirmDialog.show();
  }
  title = 'bootstrap-5-demo';
}
