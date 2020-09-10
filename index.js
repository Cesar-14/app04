import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 5000;

app.use(bodyParser.json());//cosumir cosas

const tacos = [
    {
        id: 1,
        name: 'de asada',
        quantity: 5,
        pica: 'no'
    },
    {
        id: 2,
        name: 'al pastor',
        quantity: 4,
        pica: 'si'
    },
    {
        id: 3,
        name: 'cabeza',
        quantity: 6,
        pica: 'no'
    }
];

//Metodo GET o Obtener
//READ
app.get('/', (request, response) =>{
    response.send(tacos);
});

//Encontrar taco a partir de su id
app.get('/:id', (request, response) =>{
    const {id} = request.params;
    const taco = tacos.find(taco => taco.id == id);
    response.send(taco);
});

//Encontrar taco a partir de su nombre
/*app.get('/:name', (request, response) =>{
    const {name} = request.params;
    const taco = tacos.find(taco => taco.name == name);
    response.send(taco);
});*/

//agregar taco
//CREATE
app.post('/', (request, response) =>{
    const taco = request.body;
    const {name, quantity, pica} = request.body;
    taco.id = tacos.length + 1;
    tacos.push(taco);
    response.send(taco);
});


//UPDATE
//Put para aplicar cambios al arreglo
app.put('/:id', (request, response) =>{

    //buscamos lo que vas a actualizar
    const {id} = request.params;
    const taco = tacos.find(taco => taco.id == id);
    //pides los cambios al body
    const {name, quantity, pica} = request.body;
    //aplicar los cambios
    taco.name = name;
    taco.quantity = quantity;
    taco.pica = pica;
    //mostrar los cambios
    response.send(taco);
});

//DELETE

app.listen(port, ()=> console.log(`Server started at: http://localhost:${port}`));