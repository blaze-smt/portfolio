import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThisPortfolioComponent } from './this-portfolio/this-portfolio.component';
import { StapledHillsComponent } from './stapled-hills/stapled-hills.component';
import { BohlmanAaComponent } from './bohlman-aa/bohlman-aa.component';
import { NtcLegoComponent } from './ntc-lego/ntc-lego.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'this-portfolio', component: ThisPortfolioComponent },
  { path: 'stapled-hills', component: StapledHillsComponent },
  { path: 'bohlman-aa', component: BohlmanAaComponent },
  { path: 'ntc-lego', component: NtcLegoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
