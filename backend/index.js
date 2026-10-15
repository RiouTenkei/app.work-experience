import express from 'express';
import { searchController, userLogin, userSignup, usernameController } from './controller.js';
import router from './route.js';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();

const upload = multer()

const port = 3000;

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(upload.array())
app.use('/tasks', router);

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.post('/form', (req, res) => {
  console.log(req.body)
  res.send('Form received')
})

//Set EJS as the view engine
/* app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const userName = 'Layton'
  res.render('index', {userName})
}) */

//Change aesthetics using EJS
/* app.use(express.static('public')) */

/* app.use((req, res, next) => {
  console.log('Start')
  res.on('finish', () => {
    console.log('End')
  })
  next()
}) */

 app.get('/', (req, res) => {
  console.log('Middle')
  res.send('Hello Express!');
}); 

app.get('/error', () => {
  throw new Error('This is test error')
})

app.use((err, req, res, next) => {
  console.error(err.message)
  res.send('Internal Server Error')
})

app.use('/Welcome', (req, res, next) => {
  console.log('A new request received at' + Date.now())
  next()
})

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/Welcome', (req, res) => {
  res.send('Welcome to Express App!');
});


app.get('/user/:username', usernameController)

app.get('/search', searchController)

app.get('/user/login', userLogin)

app.get('/user/signup', userSignup)

app.use('/user', router)

app.use(express.json())

app.post('/users', (req, res) => {
  const { name, email } = req.body
  res.json({
    message:`User ${name} with email ${email} created successfully`
  })
})

app.put('/users/:id', (req, res) => {
  const userId = req.params.id
  const {name, email} = req.body
  res.json({
    message:`User ${userId} updated to ${name}, ${email}`
  })
})

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id
  res.json({
    message:`User with ID ${userId} deleted successfully`
  })
})

/* app.get('/things/:name/:id)', (req, res) => {
  const {name, id} = req.params
  res.json({
    id,
    name
  })
})

// Catch-all invalid routes

app.get('*', (req, res) => {
  res.send('Sorry, this is an invalid URL')
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});