// Angular
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';

// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { GestionSimComponent } from './components/gestionsim/gestionsim.component';
import { GestionRessourcehumaineComponent } from './components/gestionressourcehumaine/gestionressourcehumaine.component';
import { SimbyrhComponent } from './components/gestionsimbyrh/simbyrh.component';
import { NbrsimbyrhComponent } from './components/nbrsimbyrh/nbrsimbyrh.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RessourcehumaineComponent } from './components/gestionressourcehumaine/ressourcehumaine.component';
import { SimComponent } from './components/gestionsim/sim.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    GestionSimComponent,
    GestionRessourcehumaineComponent,
    SimComponent,
    RessourcehumaineComponent,
    SimbyrhComponent,
    NbrsimbyrhComponent
   
  ],
  providers: []
})
export class BaseModule { }
