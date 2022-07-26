import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  private confirmDialog!: Modal;

  private videoModal!: Modal;

  @ViewChild('confirmationDialog', {static: true}) dialogElRef!: ElementRef;

  @ViewChild('videoModal', {static: true}) videoModalElRef!: ElementRef;

  @ViewChild('videoSrc', {static: true}) videoSrcElRef!: ElementRef;

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
    const slts = 'https://www.youtube.com/embed/hTWKbfoikeg?&autoplay=1';
    const wmbve = 'https://www.youtube.com/embed/lVrYV0odeFY?&autoplay=1';
    console.log(`User likes to rock: ${likesToRock}`);
    this.confirmDialog.hide();
    this.videoModalElRef.nativeElement.children[0].children[0].children[0].src = likesToRock ? slts : wmbve;
    this.videoModal = new Modal(this.videoModalElRef.nativeElement);
    this.videoModal.show();
  }

  openModal() {
    this.confirmDialog = new Modal(this.dialogElRef.nativeElement);
    this.confirmDialog.show();
  }

  private processDialogEvent(evt: Event) {
    console.log(`${evt.type}`);
  }
}
