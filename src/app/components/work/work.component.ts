import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
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
