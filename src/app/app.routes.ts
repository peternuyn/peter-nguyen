import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

import { ProjectsComponent } from './projects/projects.component';


// Define your routes here
export const routes: Routes = [
  { path: '', component: AboutComponent }, // Default to "About" page
  { path: 'projects', component: ProjectsComponent }, // Route to "Projects" page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
