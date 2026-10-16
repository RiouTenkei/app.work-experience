import express from 'express'
import * as fs from 'fs';
import {createTask, deleteTask, findTaskById, getJsonFile, updateTask} from "./utils/db.js";

const router = express.Router()

// Tasks Routes
router.get('/', (req, res, next) => {
    res.json(getJsonFile());
})


router.get('/:id', (req, res, next) => {
    const taskId = req.params.id
    res.json(findTaskById(taskId));
});


router.post('/', (req, res, next) => {
    console.log(req.body)
    // const task = createTask(req.body.name)
    res.json();
})

router.put('/:id', (req, res, next) => {
    const task = updateTask(req.params.id, req.body.name);
    res.json(task);
})

router.delete('/:id', (req, res, next) => {
    deleteTask(req.params.id);
    res.json();
})

export default router