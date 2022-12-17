import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SahiratoAuthComponent } from './sahirato-auth.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const SahiratoAuthRoutes: Routes = [
    {
        path: '',
        component: SahiratoAuthComponent,
        outlet: 'sahirato-auth',
        children: [
            {
                path: 'sign-in',
                component: SignInComponent,
                outlet: 'sahirato-auth',
            }
        ]
    },
    {
        path: 'test',
        component: SignInComponent,
        outlet: 'sahirato-auth',
    }


];

@NgModule({
    imports: [RouterModule.forChild(SahiratoAuthRoutes)],
    exports: [RouterModule]
})
export class SahiratoAuthRoutingModule {


}
