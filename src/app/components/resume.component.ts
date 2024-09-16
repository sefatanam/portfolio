import { Component, inject } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  providers: [GithubService],
  template: `
    <button
      class="download-resume"
      title="Download Resume"
      (click)="gitubService.donwloadResume()"
    >
      Download Resume
    </button>
  `,
  styles: `
    @import '../../styles/media.scss';

    .download-resume {
      --size: 60px;
      --icon-pad-size: 50px;
      @include for-web {
        --icon-pad-size: 50px;
      }

      @include for-phone {
        --icon-pad-size: 10px;
      }

      font-weight: 600;
      font-family: system-ui;
      --icon-pad-size: 50px;
      position: fixed;
      right: var(--icon-pad-size);
      bottom: var(--icon-pad-size);
      background: canvas;
      color: canvastext;
      outline: none;
      border: none;
      cursor: pointer;
      padding: 1em;
      font-size: 0.75em;
      transition : all 100ms ease-in;
      border-radius:1em;

      &:hover {
        background: canvastext;
        color: canvas;
      }
    }
  `
})
export class ResumeComponent {
  gitubService = inject(GithubService);
}
