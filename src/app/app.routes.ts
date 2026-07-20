import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { TermsComponent } from './pages/legal/terms.component';
import { PrivacyComponent } from './pages/legal/privacy.component';
import { CookiesComponent } from './pages/legal/cookies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacta', component: ContactComponent },
  { path: 'gracias', component: ThankyouComponent },
  { path: 'terminos-y-condiciones', component: TermsComponent },
  { path: 'politica-de-privacidad', component: PrivacyComponent },
  { path: 'politica-de-cookies', component: CookiesComponent },
  { path: '**', redirectTo: '' },
];
