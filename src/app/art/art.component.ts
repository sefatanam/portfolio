import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Unimage } from '@interfaces/Unimage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class ArtComponent implements OnInit {
  images!: Observable<Unimage[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.images = this.httpClient.get<Unimage[]>(environment.unsplash_api);
  }
}
