import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSpotify } from '@demo/shared';
import {} from '@marblsy/spotify';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSpotify {}
