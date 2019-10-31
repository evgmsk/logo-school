import {CourseType} from '../interfaces/course.interface';
import {ArticleType} from '../interfaces/article.interface';
import {Testimonial} from '../interfaces/testimonial.interface';
import {EventType} from '../interfaces/event.interface';
import {StatBanner} from '../interfaces/stat-banner.interface';
import {User} from '../interfaces/user.interface';

export interface StateInterface {
  schoolStats: StatBanner[];
  courses: CourseType[];
  events: EventType[];
  user: User;
  testimonials: Testimonial[];
  shoppingCart: any;
  articles: ArticleType[];
  [propName: string]: any;
}

export const InitialState: StateInterface = {
  schoolStats: [
    {title: 'graduation', quantity: '90+', icon: 'graduation-cap'},
    {title: 'majors', quantity: '20+', icon: 'briefcase'},
    {title: 'class rooms', quantity: '60+', icon: 'university'},
    {title: 'students', quantity: '1750', icon: 'user-plus'},
  ],
  courses: [
    {
      id: 'WAUQDI',
      image: 'course1.jpg',
      name: 'English Language',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Logoschool ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. • Excepteur sint occaecat cupidatat non proident. • Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      date: new Date(),
      duration: '8 weeks',
      staff: [{image: '', name: {title: 'ms', first: 'Catherine', last: 'Smith'}, position: 'Senior Lecturor'},
        {image: '', name: {title: 'mr', first: 'Bob', last: 'Marley'}, position: 'Lecturor'},
        {image: '', name: {title: 'mr', first: 'Bob', last: 'Dylan'}, position: 'Assistant'}],
      price: 23,
      currency: '$',
      materialToDownload: [''],
      relatedCourses: [],
      categories: [],
      featured: true},
    {
      id: 'WAUQDO',
      image: 'course2.jpg',
      name: 'Application Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Logoschool ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. • Excepteur sint occaecat cupidatat non proident. • Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      date: new Date(),
      duration: '8 weeks',
      staff: [{image: '', name: {title: 'ms', first:'Pamella', last: 'Took'}, position: ''}, {image: '', name: {title: 'Mr', first:'Peter', last: 'Frog'}, position: ''}, {image: '', name:{title:'ms', first:'Anna', last: 'Boom'}, position: ''}],
      price: 23,
      currency: '$',
      materialToDownload: [''],
      relatedCourses: [],
      categories: [],
      featured: true
    },
    {
      id: 'WAUQD1',
      image: 'course3.jpg',
      name: 'Chemical Engineering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Logoschool ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. • Excepteur sint occaecat cupidatat non proident. • Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      date: new Date(),
      duration: '8 weeks',
      staff: [{image: '', name: {title:'mr', first: 'Catherine', last: 'Smith'}, position: 'Senior Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last:'Marley'}, position: 'Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last: 'Dylan'}, position: 'Assistant'}],
      price: 23,
      currency: '$',
      materialToDownload: [''],
      relatedCourses: [],
      categories: [],
      featured: true
    },
    {
      id: 'WAUQD2',
      image: 'course6.jpg',
      name: 'Music',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Logoschool ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. • Excepteur sint occaecat cupidatat non proident. • Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      date: new Date(),
      duration: '8 weeks',
      staff: [{image: '', name: {title:'mr', first: 'Catherine', last: 'Smith'}, position: 'Senior Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last:'Marley'}, position: 'Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last: 'Dylan'}, position: 'Assistant'}],
      price: 23,
      currency: '$',
      materialToDownload: [''],
      relatedCourses: [],
      categories: [],
      featured: false
    },
    {
      id: 'WAUQDt',
      image: 'course5.jpg',
      name: 'Team work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Logoschool ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. • Excepteur sint occaecat cupidatat non proident. • Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      date: new Date(),
      duration: '8 weeks',
      staff: [{image: '', name: {title:'mr', first: 'Catherine', last: 'Smith'}, position: 'Senior Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last:'Marley'}, position: 'Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last: 'Dylan'}, position: 'Assistant'}],
      price: 23,
      currency: '$',
      materialToDownload: [''],
      relatedCourses: [],
      categories: [],
      featured: false
    },
    {
      id: 'WAUQD3',
      image: 'course4.jpg',
      name: 'Leadership',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Logoschool ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. • Excepteur sint occaecat cupidatat non proident. • Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      date: new Date(),
      duration: '8 weeks',
      staff: [{image: '', name: {title:'mr', first: 'Catherine', last: 'Smith'}, position: 'Senior Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last:'Marley'}, position: 'Lecturor'},
        {image: '', name: {title: '', first: 'Bob', last: 'Dylan'}, position: 'Assistant'}],
      price: 23,
      currency: '$',
      materialToDownload: [''],
      relatedCourses: [],
      categories: [],
      featured: false
    },
  ],
  events: [
    {
      image: 'event-1.jpg',
      name: 'How to speak like native speaker',
      date: new Date(),
      occurrence: 'London',
      contacts: [{type: 'phone', value: '(897)-89-53-354'}],
      official: 'Helena',
    },
    {
      image: 'event-2.jpg',
      name: 'How to speak like native speaker',
      date: new Date(),
      occurrence: 'London',
      contacts: [{type: 'phone', value: '(897)-89-53-354'}],
      official: 'Helena',
    },
    {
      image: 'event-3.jpg',
      name: 'How to speak like native speaker',
      date: new Date(),
      occurrence: 'London',
      contacts: [{type: 'phone', value: '(897)-89-53-354'}],
      official: 'Helena',
    },
    {
      image: 'event-4.jpg',
      name: 'How to speak like native speaker',
      date: new Date(),
      occurrence: 'London',
      contacts: [{type: 'phone', value: '(897)-89-53-354'}],
      official: 'Helena',
    },
    {
      image: 'event-5.jpg',
      name: 'How to speak like native speaker',
      date: new Date(),
      occurrence: 'London',
      contacts: [{type: 'phone', value: '(897)-89-53-354'}],
      official: 'Helena',
    },
    {
      image: 'event-6.jpg',
      name: 'How to speak like native speaker',
      date: new Date(),
      occurrence: 'London',
      contacts: [{type: 'phone', value: '(897)-89-53-354'}],
      official: 'Helena',
      path: ''
    },
  ],
  testimonials: [
    {author: 'Mike Puk', message: 'Cool school'},
    {author: 'John Dow', message: 'Better than a thousand days of diligent study is one day with a great teacher.'},
    {author: 'Boris Johnson', message: 'The excellent school is the base of success in real politic.'}
  ],
  articles: [
    {
      date: new Date(),
      author: 'Artur Conan Doyle',
      content: 'some text',
      image: 'blog-1.jpg',
      title: 'Some remarks home-about poetry',
      comments: [{author: '', comment: ''}, {author: '', comment: ''}],
      favorites: 5,
      path: ''
    },
    {
      date: new Date(),
      author: 'Artur Rimbaud',
      content: 'some text',
      image: 'blog-2.jpg',
      title: 'Some remarks home-about poetry',
      comments: [{author: '', comment: ''}, {author: '', comment: ''}],
      favorites: 3,
      path: ''
    }],
  user: {
    token: null,
  },
  shoppingCart: {},
  selectedArticle: null,
};
