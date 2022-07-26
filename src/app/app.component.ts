import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  private confirmDialog!: Modal;

  @ViewChild('confirmationDialog', {static: true}) dialogElRef!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dialogElRef.nativeElement.addEventListener('hide.bs.modal', (event: any) => {
      this.processDialogEvent(event);
    });
    this.dialogElRef.nativeElement.addEventListener('show.bs.modal', (event: any) => {
      this.processDialogEvent(event);
    });
  }

  openModal() {
    this.confirmDialog = new Modal(this.dialogElRef.nativeElement);
    this.confirmDialog.show();
  }

  private processDialogEvent(evt: Event) {
    console.log(`${evt.type}`);
  }
}
