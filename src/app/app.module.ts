import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './material.module'
import { ResponsiveToolbarComponent } from './responsive-toolbar/responsive-toolbar.component'
import { HomeComponent } from './home/home.component'
import { DownloadsComponent } from './downloads/downloads.component'
import { PresskitComponent } from './presskit/presskit.component'
import { FooterComponent } from './footer/footer.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveToolbarComponent,
    HomeComponent,
    DownloadsComponent,
    PresskitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
