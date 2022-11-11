import * as actionTypes from "./actionTypes"

export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})

export const carpma=()=>({
    type:actionTypes.CARPMA,
    payload:3
})

export const ikiyeBol=()=>({
    type:actionTypes.IKIYEBOL,
    payload:2
})

export const modAl=()=>({
    type:actionTypes.MODAL,
    payload:2
})

export const asd=()=>({
    type: actionTypes.ASD,
    payload:5
})