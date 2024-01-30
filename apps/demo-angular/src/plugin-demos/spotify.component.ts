import { Component, NgZone } from '@angular/core';
import { DemoSharedSpotify } from '@demo/shared';
import {} from '@marblsy/spotify';

@Component({
  selector: 'demo-spotify',
  templateUrl: 'spotify.component.html',
})
export class SpotifyComponent {
  demoShared: DemoSharedSpotify;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSpotify();
  }
}
