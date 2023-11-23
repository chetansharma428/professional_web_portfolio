import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }
  isCollapsed = false;
  isCategories = false;
  downloadResume(){
    this.document.location.href = 'https://drive.google.com/u/3/uc?id=1GXRpx7jp4PkiR-nNKRDNd7F1z3qhBkd1&export=download';
  }
}
