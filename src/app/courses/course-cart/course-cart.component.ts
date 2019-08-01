import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-cart',
  templateUrl: './course-cart.component.html',
  styleUrls: ['./course-cart.component.scss']
})
export class CourseCartComponent implements OnInit {
  @Input() course: any;
  image: string;
  constructor() { }

  ngOnInit() {
    this.image = this.course.image.split('.')[0];
  }

}
