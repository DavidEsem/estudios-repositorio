const mongoose = require("mongoose");
const Publication = require('../models/publication');
const bcrypt = require("bcrypt");
const publication = require("../models/publication");
const { response } = require("express");




const addPublication = (req, res) => {
  let publication = new Publication({
    name: req.body.name,
    date: req.body.date,
    creador: req.body.creador,

  });
  publication.save((err, publication) => {

    if (err)
      return res.status(500).send(err.message);
    res.status(200).json({
      name: publication.name,
      date: publication.date,
      creador: publication.creador,
      id: publication._id

    });

  });
}

const findallpublication = (req, res) => {

  Publication.find(function (err, publications) {
    if (err) {
      res.send("Ocurrió error obteniendo las publicaciones");
    } else {
      res.send(publications);
    }

  });

};



module.exports = { addPublication, findallpublication };