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

  showResumeWriting() {
    this.isResumeWritingVisible = true;
  }

  keepResumeWriting() {
    this.isResumeWritingVisible = true;
  }

  handleMouseLeave() {
    // Delay hiding to allow user to move the cursor to the content
    setTimeout(() => {
      if (!document.querySelector('.resume-writing-container:hover') && !document.querySelector('#resumewrite:hover')) {
        this.isResumeWritingVisible = false;
      }
    }, 100);
  }isResumeWritingVisibles = false;

  showResumeWritings() {
    this.isResumeWritingVisibles = true;
  }

  keepResumeWritings() {
    this.isResumeWritingVisibles = true;
  }

  handleMouseLeaves() {
    // Delay hiding to allow user to move the cursor to the content
    setTimeout(() => {
      if (!document.querySelector('.resume-writing-container:hover') && !document.querySelector('#resumewrite:hover')) {
        this.isResumeWritingVisibles = false;
      }
    }, 100);
  }
}
