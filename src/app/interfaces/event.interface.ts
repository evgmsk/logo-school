import {MediaCard} from './media-card.interface';

export interface Contact {
  type: string;
  value: string;
}

export interface Event {
  name: string;
  contacts: Contact[];
  occurrence?: string;
  official?: string;
}

export type EventType = Event & MediaCard;
