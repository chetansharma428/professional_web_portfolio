import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-work',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }
  projectLink(ele:any){
    if(ele==='GlamourRise')
      this.document.location.href ='https://chetansharma428.github.io/GlamourRise/';
    else if(ele ==='DC')
      this.document.location.href ='https://dungeon-chat.netlify.app';
    else if(ele == 'Dashboard')
      this.document.location.href ='https://admin-pannel-demo.netlify.app/';
  }
}
