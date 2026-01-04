const Thing = require('../models/thing');

exports.createThing = async (req, res) => {
  try {
    if (!req.file || !req.file.id) {
      return res.status(400).json({ error: 'Fichier manquant ou non uploadé' });
    }

    const thing = new Thing({
      title: req.body.title,
      description: req.body.description,
      imageId: req.file.id,
      ingredients: req.body.ingredients,
      preparation: req.body.preparation
    });

    await thing.save();
    res.status(201).json({ message: 'Pâtisserie ajoutée avec succès !' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllStuff = async (req, res) => {
  try {
    const things = await Thing.find();
    res.status(200).json(things);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
