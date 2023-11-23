import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent implements OnChanges {
  ngOnChanges(){
    alert("onit");
  }
}
