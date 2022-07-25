import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CategoryState, initCategoryState } from '../types/types'



const initialState: initCategoryState ={ 
    active:0,
    category: [
        {
            id: 1,
            title: 'Study',
        },
        {
            id: 2,
            title: 'Banking',
        }
    ]
}


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state: initCategoryState, { payload }: PayloadAction<CategoryState>) => {
            state.category.push(payload)
        },
        setActive: (state: initCategoryState, { payload }: PayloadAction<number>) => {
            state.active = payload
        }
    }
})

export const { addCategory, setActive } = categorySlice.actions

export default categorySlice.reducer