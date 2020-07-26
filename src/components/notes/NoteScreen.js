import React, {useEffect, useRef} from 'react';
import NotesAppBar from "./NotesAppBar";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {activeNote} from "../../actions/notes";

const NoteScreen = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const [values, handleInputChange,reset] = useForm(active)

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current){
            reset(active)
            activeId.current = active.id
        }
    }, [active, reset]);

    useEffect(() => {
     dispatch(activeNote(values.id,{...values}))
    }, [values, dispatch]);


    return (
        <div className='notes__main-content'>
            <NotesAppBar/>
            <div className='notes__content'>
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={values.title}
                    onChange={handleInputChange}
                    name={'title'}
                />

                <textarea
                    placeholder="What happen today?"
                    className="notes__textarea"
                    value={values.body}
                    onChange={handleInputChange}
                    name={'body'}
                />

                {(active.url) &&
                <div className='notes__image'>
                    <img
                        src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                        alt="imagenPrueba"
                    />
                </div>}

            </div>
        </div>
    );
};

export default NoteScreen;
