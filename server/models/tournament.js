let mongoose = require('mongoose')

//create business contact model
let tournamentModel = mongoose.Schema({
    name: String,
    userId: String,
    description: String,
    status: String,
    playersList: Array,
    startDate: Date,
    endDate: Date,
    level: Number,
    userPhone : Number,
}, {
    collection: "tournaments"
})

module.exports = mongoose.model('tournament', tournamentModel)
