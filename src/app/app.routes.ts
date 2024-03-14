import { Routes } from '@angular/router';
import { DatePipeComponent } from './date/date-pipe/date-pipe.component';
import { StringPipeComponent } from './string/string-pipe.component';
import { CurrencyComponent } from './currency/currency.component';
import { JsonComponent } from './json/json.component';
import { KeyValuePipeComponent } from './key-value-pipe/key-value-pipe.component';
import { AsyncComponent } from './async/async.component';
import { HomeComponent } from './home/home.component';
import { PercentPipeComponent } from './percent-pipe/percent-pipe.component';
import { SlicepipeComponent } from './slicepipe/slicepipe.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'date-pipe',
        component: DatePipeComponent,
    },
    {
        path: 'string-pipe',
        component: StringPipeComponent,
    },
    {
        path: 'currency-pipe',
        component: CurrencyComponent
    },
    {
        path: 'json-pipe',
        component: JsonComponent
    },
    {
        path: 'keyvalue-pipe',
        component: KeyValuePipeComponent
    },
    {
        path: 'async-pipe',
        component: AsyncComponent
    },
    {
        path: 'percentage-pipe',
        component: PercentPipeComponent
    },
    {
        path: 'slice-pipe',
        component: SlicepipeComponent
    },
];
