import { Component, NgZone } from '@angular/core';
import { DemoSharedHere } from '@demo/shared';
import {} from '@marblsy/here';

@Component({
  selector: 'demo-here',
  templateUrl: 'here.component.html',
})
export class HereComponent {
  demoShared: DemoSharedHere;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedHere();
  }
}
