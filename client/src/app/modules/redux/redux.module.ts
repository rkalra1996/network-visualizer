import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, rootReducer, INITIAL_STATE} from './store';
import { CoreFilterService } from './services/core-filter-service/core-filter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgReduxModule
  ],
  providers: [CoreFilterService]
})
export class ReduxModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    try {
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
      console.log('%c Redux store successfully activated', 'color: green; font-weight: bold;');
    } catch (e) {
      console.log('%c An error occured while registering the redux store in the redux module ', 'color: red; font-weight: bold;');
      console.log(e);
    }
  }
}
