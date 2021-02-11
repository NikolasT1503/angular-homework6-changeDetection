import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'onPush',
  template: `
    <h1>{{config.position}}</h1>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./push-comp.component.css']
})
export class PushCompComponent {
  @Input() config;

  get runChangeDetection(){
    console.log('Checking the view onPush');
    return true;
  }

}
