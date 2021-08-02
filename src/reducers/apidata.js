const initialState = {
    transaction : []
};

const apiData = (state = initialState, payload) => {
    const {type, data} = payload;

    switch(type){
        case "transaction":
            return{
                ...state,
                transaction: data
            };

        default:
            return state
    }
}

export default apiData;