import {MediaCard} from './media-card.interface';
import {PersonCard} from './person-card.interface';

export interface Course {
  id: string;
  name: string;
  featured: boolean;
  staff: PersonCard[];
  duration: string;
  relatedCourses: string[];
  price: number;
  currency: string;
}

export type CourseType = MediaCard & Course;
