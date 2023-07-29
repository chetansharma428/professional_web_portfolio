import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // Add animation trigger for fading in/out the main content
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
   trigger('fadeOut', [
      transition(':enter', [
        style({ opacity: 1}),
        animate('1s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ]
})

export class AppComponent {
  showMainContent = false;
  showLogoContent = true;
  title = 'portfolio-website';
  ngOnInit() {
    // Show the main content after a delay (e.g., 2 seconds)
    setTimeout(() => {
      this.showMainContent = true;
    }, 8000); // Adjust the delay (in milliseconds) to your preference
    setTimeout(() => {
      this.showLogoContent = false;
    }, 10000); // Adjust the delay (in milliseconds) to your preference
  }
}
