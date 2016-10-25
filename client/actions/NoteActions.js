import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const NoteActions = {
    loadNotes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listNotes()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_SUCCESS,
                    notes: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_FAIL,
                    error: err
                })
            );
    },

    findById(noteId){
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTE_REQUEST
        });

        api.findById(noteId)
            .then(({ data }) =>
            {
                console.log(data);
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTE_SUCCESS,
                    notes: data
                })
            }
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTE_FAIL,
                    error: err
                })
            );
    },

    updateNote(noteId, note){
        api.updateNote(noteId, note)
            .then(() =>
                this.loadNotes()
            )
            .catch(err =>
                console.error(err)
            );
    },

    createNote(note) {
        api.createNote(note)
            .then(() =>
                this.loadNotes()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteNote(noteId) {
        api.deleteNote(noteId)
            .then(() =>
                this.loadNotes()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default NoteActions;