import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SahiratoAuthComponent } from './sahirato-auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const SahiratoAuthRoutes: Routes = [
    {
        path: '',
        component: SahiratoAuthComponent,
        outlet: 'sahiratoAuth',
        children: [
            {
                path: 'sign-in',
                component: SignInComponent,
                outlet: 'auth',

            },{
                path: 'sign-up',
                component: SignUpComponent,
                outlet: 'auth',
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(SahiratoAuthRoutes)],
    exports: [RouterModule]
})
export class SahiratoAuthRoutingModule {


}
