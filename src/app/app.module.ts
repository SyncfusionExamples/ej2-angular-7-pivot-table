import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { AppComponent } from './app.component';
import { ConditionalFormattingService, GroupingBarService, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import {CalculatedFieldService } from '@syncfusion/ej2-angular-pivotview';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PivotViewModule
  ],
  providers: [ ConditionalFormattingService, GroupingBarService, FieldListService, CalculatedFieldService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
