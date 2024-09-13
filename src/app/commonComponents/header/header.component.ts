import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isResumeWritingVisible = false;
  isBlogVisible:boolean=false
  isResumeexampleVisibles = false;
  showResumeWriting(text:any) {
    if(text=='Resumeexample'){
      this.isResumeexampleVisibles = true
    }else if(text=='ResumeWriting'){
      this.isResumeWritingVisible = true;
    }
   
  }

  

  handleMouseLeave(text:any) {
    // Delay hiding to allow user to move the cursor to the content
    if(text=='Resumeexample'){
      setTimeout(() => {
        if (!document.querySelector('.resume-writing-container:hover') && !document.querySelector('#resumewrite:hover')) {
          this.isResumeexampleVisibles = false;
        }
      }, 100);
    }else if(text=='ResumeWriting')
    setTimeout(() => {
      if (!document.querySelector('.resume-writing-container:hover') && !document.querySelector('#resumewrite:hover')) {
        this.isResumeWritingVisible = false;
      }
    }, 100);
  }

 

  keepResumeexample(text:any) {
  if (text='Resumeexample') {
    this.isResumeexampleVisibles = true;
  }else if(text=='ResumeWriting'){
    this.isResumeWritingVisible = true;
  }
   
  }

  
}
