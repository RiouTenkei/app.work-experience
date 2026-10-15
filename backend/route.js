import express from 'express'
import { userLogin, userSignup } from './controller.js'
import * as fs from 'fs';
import e from 'express';

const router = express.Router()


// Tasks Routes
router.get('/', (req,res,next) => {
    // Get all the tasks from the json file
    let tasks;
    fs.readFile('./db.json', function (err, data) {
        if (err) throw err;
        tasks = JSON.parse(data);
        res.json(tasks);
    })
})



router.get('/:id', (req,res,next) => {
    const taskId = req.params.id
    let tasks;
    fs.readFile('./db.json', function (err, data) {
        if (err) throw err;
        tasks = JSON.parse(data);  
        
        const taskRecord = tasks.find((task) => {
            return task.id === taskId;
        })

        res.send(taskRecord);
        
    })
});




router.post('/', (req,res,next) => {    
    
    console.log(req);
    res.send('aweklfaiwoefj');
    
})
router.put('/:id', (req,res,next) => {
    
    // Find the tasks with the '/:id'

    // Update the tasks with the information you have gotten from the request body

})
router.delete('/:id', (req,res,next) => {
    // Find the tasks with the '/:id'

    // Remove it from the json file
})



export default router