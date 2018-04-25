export const fetchUserType = 'FETCH_USER_FULFILLED';
export function fetchUser() {
    return {
        type: fetchUserType,
        payload: {
            name: 'Andy',
            age: 27
        }
    }
}

export const setUserNameType = 'SET_USER_NAME';
export function setUserName(name) {
    return {
        type: setUserNameType,
        payload: name
    }
}

export const setUserAgeType = 'SET_USER_AGE';
export function setUserAge(age) {
    return {
        type: setUserAgeType,
        payload: age
    }
}

