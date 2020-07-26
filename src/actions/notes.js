import {db} from "../firebase/firebase-config";
import {types} from "../types/types";
import {loadNotes} from "../helpers/loadNotes";
import Swal from 'sweetalert2'

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch(activeNote(doc.id, newNote));
        Swal.fire('Created', "Lest's write a new note", 'success')
        dispatch(startLoadingNotes(uid));

    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }

})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}


export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNotes = (note) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success')
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id, ...note
        }
    }
})
