import React from 'react';

import NotesStore from '../stores/NotesStore';
import NoteActions from '../actions/NoteActions';

import NoteEditor from './NoteEditor.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes(),
        note: NotesStore.getNote()
    };
}

const App = React.createClass ({

    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        NoteActions.loadNotes();
    },

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    },

    handleFindNoteById(note) {
        NoteActions.findById(note.id);
    },

    handleNoteUpdate(id, note) {
      NoteActions.updateNote(id, note);
    },

    handleNoteDelete(note) {
        NoteActions.deleteNote(note.id);
    },

    handleNoteAdd(noteData) {
        NoteActions.createNote(noteData);
    },

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>NotesApp</h2>
                <NoteEditor
                    note_id ={this.state.note._id}
                    onNoteAdd={this.handleNoteAdd}
                    updateNote={this.handleNoteUpdate}
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                    findNoteById={this.handleFindNoteById}
                />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});


export default App;