import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItems } from '@config/navItems';
import { GithubService } from './services/github.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class AppComponent {
  public navItems = NavItems;
  gitubService = inject(GithubService);
}
