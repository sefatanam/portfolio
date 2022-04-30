import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '@interfaces/Technology';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  technologies!: Observable<Technology[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.technologies = this.httpClient.get<Technology[]>('technologies.json');
  }
}
