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
      // This is where we handle closing via clicking outside of the modal...
    });
    this.dialogElRef.nativeElement.addEventListener('show.bs.modal', (event: any) => {
      this.processDialogEvent(event);
    });
  }

  userRocks(likesToRock: boolean) {
    console.log(`User likes to rock: ${likesToRock}`);
  }

  openModal() {
    this.confirmDialog = new Modal(this.dialogElRef.nativeElement);
    this.confirmDialog.show();
  }

  private processDialogEvent(evt: Event) {
    console.log(`${evt.type}`);
  }
}
