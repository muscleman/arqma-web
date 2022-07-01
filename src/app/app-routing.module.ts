import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { PresskitComponent } from './presskit/presskit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'presskit', component: PresskitComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
