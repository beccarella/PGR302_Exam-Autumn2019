const numberOfEmailsReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_EMAIL_LIST":
            return state + 1;
            default:
                return state;
    }
}

export default numberOfEmailsReducer;