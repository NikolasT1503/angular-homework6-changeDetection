import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <default [config]="config"></default>
    <onPush [config]="config"></onPush>
    <button (click)="onClick()">Trigger change detection</button>
    {{config.position}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    position: 'top'
  }
  onClick() {
    this.config.position += 'bottom';
  }
}
