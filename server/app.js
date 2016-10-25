import  express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import { serverPort } from '../etc/config.json'

import * as db from './utils/DataBaseUtils.js'

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.use(cors({origin: '*'}));
/*app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/

app.get('/notes', (req, res) => {
    db.listNotes().then(data => {
        res.send(data)});
});

app.get('/notes/:id', (req, res) => {
    db.findById(req.params.id).then(data => {
        res.send(data)});
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.post('/notes/:id', (req, res) => {
    db.updateNote(req.params.id, req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () =>{
    console.log(`Server is up and running on port ${serverPort}`);
});