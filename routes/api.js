var express = require('express');
var router = express.Router();

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