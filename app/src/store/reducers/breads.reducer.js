import { FILTER_BREADS, SELECT_BREAD } from '../actions/bread.action'

import { BREADS } from "../../data/products";

const initialState = {
    breads: BREADS,
    filteredBreads: [],
    selected: null
}

const BreadsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BREAD:
            return {
                ...state,
                selected: state.breads.find(bread => bread.id === action.breadId)
            }
        case FILTER_BREADS:
            return {
                ...state, filteredBreads: state.breads.filter(bread => bread.categoryId === action.categoryId)
            }
        default:
            return state
    }
}

export default BreadsReducer;