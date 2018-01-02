import { Routes } from '@angular/router';

import { ToDoComponent } from './Components/to-do/to-do.component';
import { GroceryListComponent } from './Components/grocery-list/grocery-list.component';
import { CleaningComponent } from './Components/cleaning/cleaning.component';
import { IssuesComponent } from './Components/issues/issues.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { CopyrightComponent } from './Components/copyright/copyright.component';

export const routes: Routes = [
    {
        path: 'toDo',
        component: ToDoComponent
    },
    {
        path: 'grocery',
        component: GroceryListComponent
    },
    {
        path: 'cleaning',
        component: CleaningComponent
    },
    {
        path: 'issues',
        component: IssuesComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: 'terms',
        component: TermsComponent
    },
    {
        path: 'copyright',
        component: CopyrightComponent
    }
];