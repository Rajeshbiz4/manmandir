const initial = {
    result : [],
 loading : false,
 error : false
}

const QuestionReducer = (state = initial, action)  => {
    switch(action.type) {
        case 'FETCH_POST':
            return {
                ...state,
                loading : true,
                error : false
            }
        case 'FETCH_POST_SUCCESS':{
            return {
                ...state,
                result : action.data,
                loading : false,
                error : false
            }
        }
        case 'FETCH_POST_FAILURE':
            return {
                ...state,
                loading : false,
                error : true
            }
        default : 
        return state

    }

}

export default QuestionReducer;