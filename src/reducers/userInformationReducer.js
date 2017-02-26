import initialState from './initialState';

const userInformationReducer = (state = initialState.userInformation, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default userInformationReducer;