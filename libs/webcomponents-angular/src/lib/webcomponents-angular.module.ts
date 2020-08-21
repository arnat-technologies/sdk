import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '@arnat-sdk/webcomponents/loader';

defineCustomElements(window);

@NgModule({
  imports: [CommonModule],
})
export class WebcomponentsAngularModule {}
