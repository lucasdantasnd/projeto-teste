import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

@NgModule({
    declarations: [
    ButtonComponent,
    PageNotfoundComponent
  ],
    imports: [CommonModule],
    exports: []
})
export class SharedModule { }