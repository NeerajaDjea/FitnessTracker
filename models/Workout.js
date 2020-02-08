const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
            name: {
                type: String,
                trim: true,
                required: "name is Required"
            },
            type: {
                type: String,
                trim: true,
                required: "type is Required"

            },
            weight: {
                type: Number,
                trim: true,
                required: "type is Required"

            },

            sets: {
                type: String,
                trim: true,

            },

            reps: {
                type: String,
                trim: true,


            },

            duration: {
                type: Number,
                trim: true,
                required: "duration is Required"

            },
            distance: {
                type: Number,
                trim: true,
                required: "type is Required"

            }

        }

    ]
});

const Workout = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workout;