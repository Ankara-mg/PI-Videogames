import { GET_GAME, GET_GENRES, GET_VIDEOGAMES, CREATE_VIDEOGAME, SEARCH_GAME } from "./actions"

const initialState = {
    videogames: [],
    videogame: {},
}

export const videogameReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
        
        case GET_GENRES:
            return state
        
        case CREATE_VIDEOGAME:
            return state
        
        case GET_GAME:
            return {
                ...state,
                videogame: action.payload
            }
        
        case SEARCH_GAME:
            return {
                ...state,
                videogames: action.payload
            }
            
        default:
            return state
    }
}