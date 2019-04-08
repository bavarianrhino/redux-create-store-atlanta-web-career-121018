

function createStore() {
    // State is now accessable to the function dispatch
    let state;

    function dispatch(action){
        state = changeCount(state, action);
        render();
    };

    function getState() {
        return state;
    }

    // This is our Store, can be called from outside this func
    return { dispatch, getState }
}


function changeCount(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 };

        default:
            return state;
    }
};


function render() {
    let container = document.getElementById('container');
    container.textContent = store.getState().count;
};


let store = createStore();
store.dispatch({ type: '@@INIT' });


let button = document.getElementById('button');
button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
