import React, { useState, KeyboardEvent, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '../hook/hooks'
import { addCategory, setActive } from '../slices/categorySlice';

const NotesNevigation: React.FC = () => {


    const category = useAppSelector((state) => state.category)
    const dispatch = useAppDispatch()


    const [showFiled, setshowFiled] = useState<boolean>(false)
    const [inputVal, setInputVal] = useState<string>()

    type InputChange = KeyboardEvent<HTMLInputElement> |
    ChangeEvent<HTMLInputElement>;


    const handleInput = (e:InputChange ) => {

        const { key } = (e as KeyboardEvent<HTMLInputElement>)
        const { target } = (e as ChangeEvent<HTMLInputElement>)

        if (key === 'Enter') {

            dispatch(
                addCategory(
                    {
                        id:Date.now(),
                        title:inputVal as string,
                    }
                )
            )
            setInputVal('')
            setshowFiled(false)

            return 
        }

        setInputVal(target.value)
    }



    return (
        <nav className="navigation" onDoubleClick={() => setshowFiled(!showFiled)}>
            <div className="logo" />
            <div className="listcontainer">
                <ul className="list">
                    {
                        showFiled && (
                            <li className='active'>
                                <input type={'text'}
                                    onKeyUp={handleInput}
                                    onChange={handleInput}
                                    value={inputVal}
                                />
                            </li>
                        )
                    }
                    {
                        category?.category.map((item,index) => (
                            <li key={item.id} className={category.active === item.id ? 'active' : ''} onClick={() => dispatch(setActive(item.id))}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NotesNevigation