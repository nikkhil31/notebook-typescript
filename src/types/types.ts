export interface CategoryState {
    id: number,
    title: string,
}

export interface initCategoryState {
    active:number,
    category:CategoryState[]
}

export interface NoteState {
    id: number,
    title: string,
    category: number,
    desc: string,
    createAt: number
}

export interface initNoteState {
    active: number,
    notes: NoteState[]
}

export interface updateNotes {
    id: number,
    note: {
        title: string,
        desc: string
    }
}

