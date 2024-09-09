import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, input } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [NgxTypewriterComponent],
  template: `
    @if (isBrowser && words().length) {
      <om-typewriter
        [writeDelay]="50"
        [writeSpeed]="100"
        [words]="words()"
      ></om-typewriter>
    }
  `
})
export class IntroComponent {
  words = input<Array<string>>([]);
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
