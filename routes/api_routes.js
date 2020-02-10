const mongoose = require('mongoose');
const Workout = require("../models/Workout");
module.exports = function(app) {
    app.get('/api/workouts', async(req, res) => {
        const workout = await Workout.find({});
        res.json(workout)
    });

    app.post('/api/workouts', (res, req) => {
        const data = req.body;
        data.date = new Date();
        const workout = new Workout(data);
        workout
            .save()
            .then(() => {
                res.send(workout);

            })
            .catch(error => {
                console.log(error);
            })
    });
    app.put('/api/workouts/:id', async(req, res) => {
        try {
            const newWorkout = await Workout.findById(req.params.id);
            newWorkout.exercises.push(req.body);
            newWorkout
                .save()
                .then(() => {
                    res.send(newWorkout);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).send(error);
                });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });


    app.get(`/api/workouts/range`, async(req, res) => {
        try {
            const data = await Workout.find({});
            console.log(data);
            res.json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });
}