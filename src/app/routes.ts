import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },

  {
    path: 'thankyou',
    component: ThankyouComponent,
    title: 'thankyou',
  },
];

export default routeConfig;
