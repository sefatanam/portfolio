import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unimage } from '@interfaces/Unimage';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtComponent implements OnInit {
  images!: Observable<Unimage[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.images = this.httpClient.get<Unimage[]>(environment.unsplash_api);
  }
}
