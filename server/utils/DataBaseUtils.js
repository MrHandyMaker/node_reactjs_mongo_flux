import mongoose from "mongoose";

import '../models/Note';

import config from '../../etc/config.json'

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, (err, db) => {
        if(err) {
            console.error('MongoDB: Unable to connect to the database', err);
        } else {
            console.log("MongoDB: Connected correctly to server");
        }
    });
}

export function listNotes(){
    return Note.find();
}

export function createNote(data){
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Date()
    });

    return note.save();
}

export function findById(id){
    return Note.findById(id);
}

export function updateNote(id, data){
    return Note.update({"_id": id, "title": data.title, "text": data.text, "color": data.color})
}

export function deleteNote(id){
    return Note.findById(id).remove();
}