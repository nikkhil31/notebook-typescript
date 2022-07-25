import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hook/hooks'
import { addNote, updateNote } from '../slices/notesSlice'
import { NoteState } from '../types/types'



const NoteEditor: React.FC = () => {

    const notes = useAppSelector((state) => state.notes)
    const category = useAppSelector((state) => state.category)

    const [heading, setHeading] = useState<string>('')
    const [desc, setDesc] = useState<string>('')

    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.target.name === 'heading' && setHeading(e.target.value)
        e.target.name === 'desc' && setDesc(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(notes.active === 0) {
            dispatch(addNote({
                id:Date.now(),
                category:category.active,
                title:heading,
                desc:desc,
                createAt:Date.now(),
            }))
        } else {
            dispatch(updateNote({
                id:notes.active,
                note:{
                    title:heading,
                    desc:desc,
                }
            }))
        }
    }



    useEffect(() => {
        if(![-1,0].includes(notes.active)) {
            const noteOne:NoteState | undefined = notes.notes.find(n => n.id === notes.active) 
            setHeading(noteOne!.title)
            setDesc(noteOne!.desc)
        } else {
            setHeading('')
            setDesc('')
        }
    }, [notes])
    

    return (

        <div className="noteeditor box">
            {notes.active !== -1 && (
                <form onSubmit={handleSubmit}>
                    <div className='heading'>
                        <input type="text" name='heading' placeholder='Heading' onChange={handleChange} value={heading} />
                    </div>

                    <div className="textarea">
                        <textarea name='desc' onChange={handleChange} value={desc} />
                    </div>

                    <button className='toolbar' type='submit'>Save</button>
                </form>
            )}

        </div>
    )
}

export default NoteEditor