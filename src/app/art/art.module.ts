import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArtRoutingModule} from './art-routing.module';
import {ArtComponent} from './art.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [ArtComponent],
  imports: [CommonModule, ArtRoutingModule, HttpClientModule]
})
export class ArtModule {
}
