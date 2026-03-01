/**
 * Event — Tissue Layer
 * Composes cells per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: tissue → depends on → cell
 */

import { EventDispatchComposition } from "@webwaka/cell-event-dispatch";
import { AggregateComposition } from "@webwaka/cell-aggregate";

export { EventDispatchComposition } from '@webwaka/cell-event-dispatch';
export { AggregateComposition } from '@webwaka/cell-aggregate';

/**
 * Event Composition
 * Assembles cell-layer components into a cohesive tissue-layer capability.
 */
export class EventComposition {
  private eventDispatchComposition: EventDispatchComposition;
  private aggregateComposition: AggregateComposition;

  constructor() {
    this.eventDispatchComposition = new EventDispatchComposition();
    this.aggregateComposition = new AggregateComposition();
  }
}

export * from "./types";
