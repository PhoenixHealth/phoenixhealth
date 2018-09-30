import { FormsModule } from '@angular/forms';
import {MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailedComponent } from './contact-detailed/contact-detailed.component';

export const routerConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'doctors',
      component: DoctorsComponent
  },
  {
      path: 'services',
      component: ServicesComponent
  },
  {
      path: 'contact',
      component: ContactDetailedComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DoctorsComponent,
    ServicesComponent,
    ContactComponent,
    ContactDetailedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
