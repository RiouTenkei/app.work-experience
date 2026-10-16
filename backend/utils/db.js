import {readFileSync, writeFileSync} from "node:fs";

export const getJsonFile = () => {
    return JSON.parse(readFileSync('db.json', {encoding: 'utf8', flag: 'r'}));
}

export const writeJsonFile = (json) => {
    writeFileSync('db.json', JSON.stringify(json));
}


export const findTaskById = (id) => {
    const data = getJsonFile();
    return data.find((task) => {
        return task.id === Number(id);
    })
}

export const createTask = (name) => {
    const data = getJsonFile();

    const newTask = {
        id: nextId(),
        name: name,
    }
    data.push(newTask);
    writeJsonFile(data);
    return newTask;
}

export const updateTask = (id, name) => {
    const data = getJsonFile();
    let originalTask = findTaskById(id);
    const newData = data.map((task) => {
        if (task.id === Number(id)) {
            originalTask = {...task, name: name};
            return originalTask
        } else {
            return task;
        }
    });
    writeJsonFile(newData);
    return originalTask;
}

export const deleteTask = (id) => {
    const data = getJsonFile();
    const newData = data.filter((task) => {
        return task.id !== Number(id);
    })
    writeJsonFile(newData);
}


const nextId = () => {
    const data = getJsonFile();
    let max = Math.max(...data.map(item => item.id))
    return max + 1;
}

