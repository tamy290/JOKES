const Broma = require('../modelos/jokes.model');

module.exports.findAllJokes = (req, res) => {
  Broma.find()
  .then(bromas => res.json(bromas))
  .catch(error => res.json({ message: 'Algo salió mal', error }));
};

module.exports.findJoke = (req, res) => {
  Broma.findOne({ _id: req.params.id })
  .then(broma => res.json(broma))
  .catch(error => res.json({ message: 'Algo salió mal', error }));
};

module.exports.createJoke = (req, res) => {
  const nuevaBroma = {
    setup: req.body.setup,
    punchline: req.body.punchline
};

module.exports.updateJoke = (req, res) => {
  Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
  .then(broma => res.json(broma))
  .catch(error => res.json({ message: 'Algo salió mal', error }));
},


module.exports.deleteJoke = (req, res) => {
  Broma.deleteOne({ _id: req.params.id })
  .then(result => res.json(result))
  .catch(error => res.json({ message: 'Algo salió mal', error }));
}

};
