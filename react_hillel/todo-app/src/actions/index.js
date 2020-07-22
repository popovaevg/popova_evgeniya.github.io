import { CREATE_CARD, MOVE_CARD_TO_PROGRESS, EDIT_CARD } from "../constants";

export const createCard = (data) => ({
    type: CREATE_CARD,
    payload: data
});

export const moveCardToPropress = (payload) => ({
    type: MOVE_CARD_TO_PROGRESS,
    payload
})

export const adtitCard = (payload) =>({
    type: adtitCard,
    payload
})