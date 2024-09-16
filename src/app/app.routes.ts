import { Routes } from '@angular/router';
import { HomeComponent } from './commonComponents/home/home.component';
import { MainComponent } from './commonComponents/main/main.component';

export const routes: Routes = [
    {path:'',redirectTo:'home'},
    {path:'home',component:HomeComponent}
];
