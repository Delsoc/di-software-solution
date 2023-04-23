import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  names: string[] = ['Delsoc Ibrahim', 'Softwareentwickler'];
  currentName: string = '';
  currentDots: string = '';

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    let index = 0;
    setInterval(() => {
      this.currentName = this.names[index];
      if (index === 0) {
        this.currentDots = '';
        setTimeout(() => {
          this.currentDots = '';
        }, 1000);
      } else if (index === 1) {
        this.currentDots = '';
        setTimeout(() => {
          this.currentDots = '';
        }, 1000);
      }
      index = (index === this.names.length - 1) ? 0 : index + 1;
    }, 2000);
  }

}
