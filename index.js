import express from 'express';

const app = express();

const port = 5000;

app.use('/', (requiest, response) =>{
    response.send('<h1>Hello my custom server</h1>')
});

app.listen(port, ()=> console.log(`server started at: http://localhost:${port}`));