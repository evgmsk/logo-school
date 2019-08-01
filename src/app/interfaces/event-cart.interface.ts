export interface EventCart {
  image: string;
  name: string;
  date: Date;
  contacts: {mail?: string, phone?: string, social?: string};
  address?: string;
  official?: string;
}
