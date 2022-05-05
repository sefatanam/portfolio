import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TitleService } from './utils/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.init();
  }
}
