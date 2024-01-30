import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHere } from '@demo/shared';
import {} from '@marblsy/here';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHere {}
