import React from 'react';
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar/>
            <div className='notes__content'>
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happen today?"
                    className="notes__textarea"
                />

                <div className='notes__image'>
                    <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                         alt="image"
                    />
                </div>

            </div>
        </div>
    );
};

export default NoteScreen;
