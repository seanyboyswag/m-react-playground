const notesReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                { title: action.title, body: action.body }
            ]
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)
        case 'POPULATE_NOTES':
            return action.notes 
        default:
            return state;
    }
}

export { notesReducer as default }
