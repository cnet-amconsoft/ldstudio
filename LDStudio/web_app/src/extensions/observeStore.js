/**
 * Callback invokes when the slice of state is changed.
 *
 * @callback onChange
 */

/**
 *
 * @param {Object} store - Redux store
 * @param {string} storeSlice - slice of the store to observation
 * @param {onChange} onChange
 * @returns {*}
 */
const observeStore = (store, storeSlice, onChange) => {
    let currentState;

    function handleChange() {
        let nextState = store[storeSlice];
        if (nextState !== currentState) {
            currentState = nextState;
            onChange(currentState);
        }
    }

    let unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
};

export default observeStore;