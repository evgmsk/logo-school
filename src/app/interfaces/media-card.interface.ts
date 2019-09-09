export interface MediaCard {
  image: string;
  date: Date;
  title?: string;
  description?: string;
  [propName: string]: any;
}

//export type MediaCardType = MediaCard;
