import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtComponent } from './art.component';

@NgModule({
  declarations: [ArtComponent],
  imports: [CommonModule, ArtRoutingModule]
})
export class ArtModule {}
