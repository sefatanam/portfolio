import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpotlightComponent } from '@omnedia/ngx-spotlight';
import { BackgroundComponent } from "./components/background.component";
import { HeaderComponent } from "./components/header.component";
import { ResumeComponent } from "./components/resume.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, BackgroundComponent, HeaderComponent, ResumeComponent, NgxSpotlightComponent]
})
export class AppComponent {

}
