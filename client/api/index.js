import axios from 'axios';
import NoteEditor from '../components/NoteEditor.jsx';

import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/notes`);
    },

    findById(noteId) {
        return axios.get(`${apiPrefix}/notes/${noteId}`);
    },

    createNote(data) {
        return axios.post(`${apiPrefix}/notes`, data);
    },

    updateNote(noteId, data) {
        return axios.post(`${apiPrefix}/notes/${noteId}`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/notes/${noteId}`);
    }
}