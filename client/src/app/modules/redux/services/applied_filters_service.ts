/**
 * Updates object
 * @param oldObject
 * @param newValues
 * @returns  new Object with updated values
 * @description This function is a basic utility function to mutate and return the existing object with new values
 */
export function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}



/**
 * Adds filtered data action
 * @param state
 * @param action
 * @returns  newState
 * @description The function accepts the current state in the store and the action to perform (to add the new AppliedFilters Object)
 */
export function addFilteredDataAction(state, action) {
    console.log('inside addFilteredDataAction', action, state);
    // let newState = state;
    const newState = {
        appliedFilters: {},
        lastUpdated: null
    }
    newState.appliedFilters = action.payload;
    // add the current time
    newState.lastUpdated = new Date();
    console.log('returning final state as ', newState);
    return updateObject(state, newState);
}

