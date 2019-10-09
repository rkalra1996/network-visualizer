import { AppliedFiltersInterface } from './interfaces/applied-filters';

import {AppliedFiltersActions} from './actions/actions';

import * as appliedFilterSrvc from './services/applied_filters_service';

export interface IAppState {
    appliedFilters: AppliedFiltersInterface;
    lastUpdated: Date | null;
}


/**
 * Root reducer
 * @param state previous state of the store
 * @param action action to perform
 * @returns  new state
 * @description The Root Reducer is the one which will handle all the Action declarations.
 * This is the only reducer which will store the initial state. The purpose of the root reducer is
 * to recieve the action and pass it to the respective action handler / sub reducer
 */
export function rootReducer(state: IAppState, action): IAppState {
    if (typeof action.type === 'string') {
        switch (action.type) {
            case AppliedFiltersActions.ADD_APPLIED_FILTERS_DATA:
                return appliedFilterSrvc.addFilteredDataAction(state, action);

            case AppliedFiltersActions.CLEAR_STORE:
                const emptyObject = {
                    appliedFilters: {
                        requestBody: {},
                        filteredData: []
                    },
                    lastUpdated: null
                };
                return appliedFilterSrvc.updateObject(state, emptyObject);
        }
    } else {
      console.log('%c Type of action provided is not string', 'color: red; font-weight: bold;');
    }
    return state;
}

export const INITIAL_STATE: IAppState = {
    appliedFilters: {
        requestBody: {},
        filteredData: []
    },
    lastUpdated: null
};
