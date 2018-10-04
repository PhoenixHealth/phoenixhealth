import { FormsModule } from '@angular/forms';
import {MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutTitleComponent } from './about-title/about-title.component';
import { ServicesComponent } from './services/services.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactTitleComponent } from './contact-title/contact-title.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { DoctorsTitleComponent } from './doctors-title/doctors-title.component';

export const routerConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutPageComponent
  },
  {
      path: 'doctors',
      component: DoctorsPageComponent
  },
  {
      path: 'services',
      component: ServicesComponent
  },
  {
      path: 'contact',
      component: ContactPageComponent
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
    AboutTitleComponent,
    DoctorsTitleComponent,
    ServicesComponent,
    ContactTitleComponent,
    ContactPageComponent,
    AboutPageComponent,
    DoctorsPageComponent
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
    MatTooltipModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
