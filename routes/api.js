var express = require('express');
var router = express.Router();
var axios = require('axios').default;


var data = {
    message: "ok",
    names: [
        "Jesse",
        "Sarah"
    ],
    pets: [
        "Tiny Terror Floof",
        "Taz",
        "Rogue"
    ]
};

// endpoints
router.get('/', (req, res) => {
    res.send(data);
});

// http call endpoints
router.get('/fact', (req, res) => {
    // make an http call to another site, process the data, and return.
    axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
        .then((response) => {
            //console.log(response.data);
            res.send(response.data.text);
        })
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.send(err);
        });
});


// get all pets
router.get('/pets', (req, res) => {
    res.send(data.pets);
});

// get one pet
router.get('/pets/:index', (req, res) => {
    var pet = data.pets[req.params.index];
    res.send(pet);
});

// create pet
router.put('/pets', (req, res) => {
    data.pets.push(req.body.name);
    res.send(data.pets);
})

// update pets
router.post('/pets', (req, res) => {
    data.pets = req.body;
    res.send(data.pets);
});

// delete pets
router.delete('/pets', (req, res) => {
    data.pets = [];
    res.send(data);
});

module.exports = router;