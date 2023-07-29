import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnChanges {
  ngOnChanges(){
    alert("onit");
  }
}
