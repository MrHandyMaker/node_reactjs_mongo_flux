import React from 'react';

import ColorPicker from './ColorPicker.jsx'
import Note from './Note.jsx'

import NotesGrid from './NotesGrid.jsx';

import './NoteEditor.less';

const NoteEditor = React.createClass({
    getInitialState(){
      return {
        title: '',
        text: '',
        color: '#FFFFFF'
      };
    },

    onChangeNote(noteTitle, noteText, noteColor){
        this.setState({text: noteTitle, title: noteText});
        this.handleColorChange(noteColor);
    },

    handleTextChange(event){
        this.setState({text: event.target.value});
    },

    handleTitleChange(event){
        this.setState({title: event.target.value});
    },

    handleColorChange(color){
      this.setState({color});
    },

    handleNoteAdd(){
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({text: '', title: '', color: '#FFFFFF'});
    },

    handleNoteUpdate(){
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.updateNote(this.props.note_id, newNote);
        this.setState({text: '', title: '', color: '#FFFFFF'});
    },

    render(){
        return (
            <div>
                <div className="NoteEditor">
                    <input
                        type="text"
                        className="NoteEditor__title"
                        placeholder="Enter title"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                <textarea
                    placeholder="Enter note text"
                    rows={5}
                    className="NoteEditor__text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                    <div>
                        <ColorPicker
                            value={this.state.color}
                            onChange={this.handleColorChange}
                        />
                        <button
                            className="NoteEditor__button"
                            disabled={!this.state.text}
                            onClick={this.handleNoteAdd}
                        >
                            Add
                        </button>
                        <button
                            className="NoteEditor__update__button"
                            disabled={!this.state.text}
                            onClick={this.handleNoteUpdate}
                        >
                            Update
                        </button>
                    </div>
                </div>
                <div>
                    <NotesGrid
                        notes={this.props.notes}
                        onNoteDelete={this.props.onNoteDelete}
                        findNoteById={this.props.findNoteById}
                        changeNoteApp={this.onChangeNote}
                    />
                </div>
            </div>

        );
    }
});


export default NoteEditor;