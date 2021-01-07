import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-footer-news-letters',
  templateUrl: './footer-news-letters.component.html',
  styleUrls: ['./footer-news-letters.component.scss']
})
export class FooterNewsLettersComponent implements OnInit {
  @ViewChild('form') f: NgForm;
  error = {message: null};
  constructor() { }

  ngOnInit() {
    this.error.message = null;
  }
  onChange() {
    console.log('change');
    if (this.error.message) {
      const valid = /^\w+@\w+\.\w{2,}$/.test(this.f.value.email);
      if (valid) {
        this.error.message = null;
      }
    }
    console.log(this.error);
  }
  onBlur() {
    console.log(this.f, !!this.f.value.email);
    const Error = !/^\w+@\w+\.\w{2,}$/.test(this.f.value.email);
    if (Error && !this.f.dirty) {
      this.error.message = 'Email required';
    } else if (Error && this.f.dirty) {
      this.error.message = 'Please enter valid email';
    } else {
      this.error.message = null;
    }
  }
  onSubmit() {
    if (this.f.invalid) {
      console.log(this.f, 'submit');
    }
  }
}
