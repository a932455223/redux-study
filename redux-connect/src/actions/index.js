const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'
const UPDATE_SECONDNAME = 'UPDATE_SECONDNAME'
const function updateFirstname(firstName){
    return {
        type:UPDATE_FIRSTNAME,
        firstName:firstName
    }
}

const function updateSecondname(secondName){
    return {
        type:UPDATE_SECONDNAME,
        secondName:secondName
    }
}

export {
    UPDATE_FIRSTNAME,
    UPDATE_SECONDNAME,
    updateFirstname,
    updateSecondname
}
