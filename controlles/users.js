const mongoose = require("mongoose");
const User = require('../models/User');
const bcrypt = require("bcrypt");


const findByName = (buscado) => {

    return User.findOne({ email: buscado });

};


function register(req, res) {

    let promesaUser = findByName(req.body.email);
    promesaUser.then(finalResult => {
        if (finalResult == null) {

            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,


            });

            user.save((err, user) => {
                if (err) return res.status(500).send(err.message)
                res.status(200).json({
                    name: user.name,
                    email: user.email,
                    id: user._id
                });

            });

        } else {
            res.status(200).send({ mensage: "no se puede repetir email", error: true, code: -1 })

        }
    }
    ).catch(rusulError => {
        console.log(rusulError)
    })


};




const login = (req, res) => {


    if (req.body.password && req.body.email) {
        let promesaUser = findByName(req.body.email);
        promesaUser.then(userEncontrado => {
            respuesta = {}

            if (userEncontrado != null) {
                let sonIguales = bcrypt.compareSync(req.body.password, userEncontrado.password)

                if (sonIguales) {
                    res.status(200).send({
                        error: false,
                        codigo: 200,
                        mensaje: 'ok',
                        userData: {
                            name: userEncontrado.name,
                            email: userEncontrado.email,
                            id: userEncontrado._id

                        }



                    });



                } else {
                    res.status(500).send({
                        error: true,
                        codigo: 500,
                        mensaje: 'contraseña o usuario incorrectas'
                    });

                }
            } else {
                res.status(200).send({
                    error: true,
                    codigo: 200,
                    mensaje: 'contraseña o usuario incorrectas'
                });
            }
        })

    }


};









module.exports = { register, login }