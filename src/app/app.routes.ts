import { Routes } from '@angular/router';
import { HomeComponent } from './commonComponents/home/home.component';
import { MainComponent } from './commonComponents/main/main.component';

export const routes: Routes = [
    {path:'',component:MainComponent,

        children:[
         { path: '', 
          redirectTo: 'home', // Redirect to the home 
          pathMatch: 'full' 
        },
        {
            path:'home',
            component:HomeComponent
        }
    
    ]}
];
