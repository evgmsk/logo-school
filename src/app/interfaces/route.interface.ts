export interface RouteI {
  name: string;
  path?: string;
  sub_links?: RouteI[];
}

export const Routes = [
  {name: 'home', path: '/home'},
  {name: 'courses', path: '/courses'},
  {name: 'events', path: '/events'},
  {name: 'pages', sub_links: [{name: 'page1', path: '/pages'}, {name: 'page2', path: '/pages'}]},
  {name: 'contacts', path: '/contacts'},
];
