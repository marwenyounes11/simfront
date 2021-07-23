import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { GestionSimComponent } from './components/gestionsim/gestionsim.component';
import { GestionRessourcehumaineComponent } from './components/gestionressourcehumaine/gestionressourcehumaine.component';
import { SimbyrhComponent } from './components/gestionsimbyrh/simbyrh.component';
import { NbrsimbyrhComponent } from './components/nbrsimbyrh/nbrsimbyrh.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: 'gestionsim',
        component:  GestionSimComponent,
        data: {
          title: 'gestionsim'
        },
      },
      {
        path: 'gestionressourcehumaine',
        component:  GestionRessourcehumaineComponent,
        data: {
          title: 'gestionressourcehumaine'
        },
      },
      {
        path: 'gestionsimbyrh',
        component:  SimbyrhComponent,
        data: {
          title: 'gestionsimbyrh'
        },
      },
      {
        path: 'nbrsimbyrh',
        component:  NbrsimbyrhComponent,
        data: {
          title: 'gestionsimbyrh'
        },
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
