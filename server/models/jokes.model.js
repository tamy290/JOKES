const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
		required: true
	},
	punchline:{
		type: String,
		required: true
	}
}, { timestamps: true });
    const Broma = moongose.model('Broma', JokeSchema)

module.exports = Broma;