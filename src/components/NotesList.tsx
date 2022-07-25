import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../hook/hooks';
import { setActive } from '../slices/notesSlice';
import { NoteState } from '../types/types';

const NotesList: React.FC = () => {


    const notes = useAppSelector((state) => state.notes)
    const category = useAppSelector((state) => state.category)


    const dispatch = useAppDispatch()


    const filterdByCategory = (note: NoteState) => {
        return note.category === category.active
    }

    return (
        <div className="noteslist box" onDoubleClick={() => dispatch(setActive(0))}>
            {
                category.active !== 0 && (
                    <>
                        <div className="search">
                            <FaSearch className='searchicon' />
                            <input type="text" name="search" placeholder="Search" />
                        </div>
                        <ul className="notescontainer">

                            {
                                notes.notes.filter(filterdByCategory).map(note => (
                                    <li className={notes.active === note.id ? 'active' : ''}
                                        onClick={() => dispatch(setActive(note.id))}
                                    >
                                        <p className="title">{note.title}</p>
                                        <p className="para">{note.desc}</p>
                                        <p className="time">{note.createAt}</p>
                                    </li>

                                ))
                            }
                        </ul>
                    </>

                )
            }
        </div>
    )
}

export default NotesList