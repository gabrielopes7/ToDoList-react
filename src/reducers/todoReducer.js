export default function todoReducer(state=[], action){
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return action.payload;
        case "LOAD":
            return action.payload;
        default:
            return state;
    }
}