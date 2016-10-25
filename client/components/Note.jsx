import React from 'react';

import './Note.less';

const Note = React.createClass({

    onChangeNote(){
        this.props.onFindById();
        this.props.changeNote(this.props.title, this.props.children, this.props.color);
    },
    render() {
        const style = { backgroundColor: this.props.color };

        return (
            <div className='Note' style={style} onClick={this.onChangeNote}>
                <span className='Note__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                        ?
                        <h4 className='Note__title'>{this.props.title}</h4>
                        :
                        null
                }
                <div className='Note__text'>{this.props.children}</div>
            </div>
        );
    }
});

export default Note;