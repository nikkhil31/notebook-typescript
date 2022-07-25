import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initNoteState, NoteState, updateNotes } from "../types/types";


const initialState: initNoteState = {
    active: -1,
    notes: [
        {
            id: 1,
            category: 1,
            title: 'This is test',
            desc: 'lorem sfjkahskfhahkf sdfhkashjdkfha',
            createAt: 452352324,
        }
    ]
}

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state: initNoteState, { payload }: PayloadAction<NoteState>) => {
            state.notes.push(payload)
            state.active = payload.id
        },
        setActive: (state: initNoteState, { payload }: PayloadAction<number>) => {
            state.active = payload
        },
        updateNote: (state: initNoteState, { payload }: PayloadAction<updateNotes>) => {
            let index = state.notes.findIndex(n => n.id === payload.id)
            state.notes[index] = { ...state.notes[index], ...payload.note }
        }
    }
})

export const { addNote, setActive, updateNote } = notesSlice.actions

export default notesSlice.reducer


