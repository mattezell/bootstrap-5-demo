import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'bootstrap-5-demo';
}
