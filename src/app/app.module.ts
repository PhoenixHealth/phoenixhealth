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
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ServicesComponent } from './services/services.component';
import { ContactTitleComponent } from './contact-title/contact-title.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

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
      component: DoctorsComponent
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
    AboutComponent,
    DoctorsComponent,
    ServicesComponent,
    ContactTitleComponent,
    ContactPageComponent,
    AboutPageComponent
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
