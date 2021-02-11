import { Component, Input } from '@angular/core';

@Component({
  selector: 'default ',
  template: `
    <h1>{{config.position}}</h1>
    {{runChangeDetection}}
  `,
  styleUrls: ['./normal-comp.component.css']
})
export class NormalCompComponent {
  @Input() config;

  get runChangeDetection(){
    console.log('Checking the view default');
    return true;
  }

}
