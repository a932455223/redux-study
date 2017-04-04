import { UPDATE_FIRSTNAME,UPDATE_SECONDNAME } from '../actions'
const  initState = {
    firstName:'',
    secondName:''
}
export default function(state = initState,action){
    switch (action.type) {
        case UPDATE_FIRSTNAME:
            return {
                ...state,
                firstName:action.firstName
            }
        case UPDATE_SECONDNAME:
            return {
                ...state,
                secondName:action.secondName
            }
        default:
            return state

    }
}
