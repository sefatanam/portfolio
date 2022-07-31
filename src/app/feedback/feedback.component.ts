import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent {
  constructor() {}
}
