export const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'
export const UPDATE_SECONDNAME = 'UPDATE_SECONDNAME'
export function updateFirstname(firstName){
    return {
        type:UPDATE_FIRSTNAME,
        firstName:firstName
    }
}

export function updateSecondname(secondName){
    return {
        type:UPDATE_SECONDNAME,
        secondName:secondName
    }
}
