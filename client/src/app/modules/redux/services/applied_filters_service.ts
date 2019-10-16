
import { IAppState } from '../store';

/**
 * Updates object
 * @param oldObject the previous state
 * @param newValues the new values to update the state
 * @returns  new Object with updated values
 * @description This function is a basic utility function to mutate and return the existing object with new values
 */
export function updateObject(oldObject: object, newValues: object): any {
    return Object.assign({}, oldObject, newValues);
}



/**
 * Adds filtered data action
 * @param state the previous state
 * @param action current action object
 * @returns  newState
 * @description The function accepts the current state in the store and the action to perform (to add the new AppliedFilters Object)
 */
export function addFilteredDataAction(state: any, action: any): IAppState {
    console.log('inside addFilteredDataAction', action, state);
    // let newState = state;
    const newState: IAppState = {
        appliedFilters: {
            requestBody: {},
            filteredData: {}
        },
        lastUpdated: null
    };
    newState.appliedFilters = action.payload;
    // add the current time
    newState.lastUpdated = new Date();
    console.log('returning final state as ', newState);
    return newState;
}

