import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from '../landing/landing.component';
import {NewListComponent} from '../new-list/new-list.component';
import {HelpComponent} from '../help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  {path: 'AddList', component: NewListComponent},
  {path: 'help', component: HelpComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}