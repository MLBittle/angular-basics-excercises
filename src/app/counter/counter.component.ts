import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}


