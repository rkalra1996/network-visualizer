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
 * @description The function accepts the current state in the store 
 */


/* export function resetFilter(state: any, action: any): IAppState {
    console.log('inside resetFilter', state);
    // let newState = state;
    const newState: IAppState = state;
    newState.resetFilter.value = action.payload.resetFilter.value;
    // add the current time
    newState.lastUpdated = new Date();
    console.log('returning final state as ', newState);
    return newState;
} */
