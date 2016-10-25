import React from 'react';
import Note from './Note.jsx';

import Masonry from 'react-masonry-component';

import './NotesGrid.less';

const NotesGrid = React.createClass({
    onChangeNote(noteTitle, noteText, noteColor){
        this.props.changeNoteApp(noteTitle, noteText, noteColor);
    },
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className='NotesGrid'
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete.bind(null, note)}
                            onFindById={this.props.findNoteById.bind(null, note)}
                            //onUpdate={this.props.handleUpdateNote}
                            color={note.color}
                            changeNote={this.onChangeNote}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
});

export default NotesGrid;