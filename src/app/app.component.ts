import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from "./components/background.component";
import { HeaderComponent } from "./components/header.component";
import { ResumeComponent } from "./components/resume.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule, BackgroundComponent, HeaderComponent, ResumeComponent]
})
export class AppComponent {

}
