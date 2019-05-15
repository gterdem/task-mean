const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Load models
const { Role } = require('./db/models');

/* Index */
app.get('/', (req, res) => {
    res.send("Hello world!");
});

/* Get Roles */
app.get('/roles', (req, res) => {
    Role.find().then((roles) => {
        res.send(roles);
    }).catch((e) => {
        res.send(e);
    })
});

/* Create Role */
app.post('/roles', (req, res) => {
    let name = req.body.name;
    let newRole = new Role({
        name
    });
    newRole.save().then((roleDoc) => {
        res.send(roleDoc);
    })

});

/* Update Role */
app.patch('/roles/:id', (req, res) => {
    Role.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        console.error(`Update failed: ${e}`);
    });
});

/* Delete Role */
app.delete('/roles/:id', (req, res) => {
    Role.findOneAndDelete({ _id: req.params.id }).then((removedRoleDoc) => {
        res.send(removedRoleDoc);
    }).catch((e) => {
        Console.error(`Delete failed: ${e}`);
    })
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
