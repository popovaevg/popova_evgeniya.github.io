import {CREATE_CARD, MOVE_CARD_TO_PROGRESS} from '../constants'

const INITIAL_STATE ={
    ids:[],
    todoCards: [],
    progressCards: []
}

export const root = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CREATE_CARD:{
            const lastId=state.ids.length
            ?state.ids[state.ids.length-1]
            :0;
            const result ={
                ...action.payload,
                id: lastId+1
            };
            console.log(11)
            return{
                ...state,
                ids: [...state.ids, lastId+1],
                todoCards: [...state.todoCards, result]
            };
        }
        case MOVE_CARD_TO_PROGRESS:{
            const card = state.todoCards.find(item=>item.id===action.payload);
            return{
                ...state,
                todoCards: state.todoCards.filter(item=>item.id!==card.id),
                progressCards: [...state.progressCards, card]
            }
        }
        case EDIT_CARD:{
            return{
                ...state,
                progressCards: state.progressCards.map(item=>{
                    if(item.id===action.payload.id)
                        return action.payload
                    return item;
                })
                
            }
        }
        default: return state; //если не найдет, вурнуть текущий sate
    }
}