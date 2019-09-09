import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class NavService {
  dropdownOpen = false;
  onStateChange = new EventEmitter<boolean>();
  onOpenDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.onStateChange.emit(this.dropdownOpen);
  }
  onCloseDropdown() {
    this.dropdownOpen = false;
    this.onStateChange.emit(this.dropdownOpen);
  }
}
