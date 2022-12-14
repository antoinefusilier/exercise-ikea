import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubTestComponent } from './sub-test/sub-test.component';
import { TestComponent } from './test.component';

const routes: Routes = [{
   path: '',
   component: TestComponent,
   children: [{
      path: 'subtest',
      component: SubTestComponent
   }]
},
// {
    // path: 'subtest',
    // component: SubTestComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
