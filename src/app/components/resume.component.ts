import { Component, inject } from '@angular/core';
import { GithubService } from "../services/github.service";

@Component({
  selector: 'app-resume',
  standalone: true,
  providers: [GithubService],
  template: `
   <button class="download-resume" title="Download Resume" (click)="gitubService.donwloadResume()">
    <svg title="Download Resume" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
      stroke="currentColor" class="icon">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
    </svg>
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

    position: fixed;
    height: var(--size);
    width: var(--size);
    right: var(--icon-pad-size);
    bottom: var(--icon-pad-size);
    border-radius: 50%;
    background: canvas;
    color: canvastext;
    cursor: pointer;
    outline: none;
    border: none;
    transition: scale 0.2s;
    cursor: pointer;

    &:hover {
      scale: 0.7;
    }

    .icon {
      height: calc(var(--size) / 2);
      width: calc(var(--size) / 2);
      cursor: pointer;
    }
}
`
})
export class ResumeComponent {
  gitubService = inject(GithubService);

}
