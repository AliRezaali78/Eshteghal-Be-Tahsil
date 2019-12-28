import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {
  isLoading = false;
  constructor() { }
  start() {
    this.isLoading = true;
  }
  end() {
    this.isLoading = false;

  }
}
