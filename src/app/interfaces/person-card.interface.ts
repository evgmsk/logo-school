export interface PersonCard {
  image: string;
  position: string;
  name: {title: string, first: string, last: string};
  [propName: string]: any;
}
