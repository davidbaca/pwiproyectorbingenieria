/* const knex = require('../db/config'); */
/* const nodemailer = require('nodemailer'); */


const inicio = (req, res) => {


};


const all = (req, res) => {

};


const search = (req, res) => {

};


const createConsulta = (req, res) => {

    let nombreForm, apellidoForm, emailForm, comentarioForm;

    nombreForm = req.body.nombre;
    apellidoForm = req.body.apellido;
    emailForm = req.body.email;
    comentarioForm = req.body.comentario;

    function validacion() {

        if (nombreForm == '' || apellidoForm == '' || emailForm == '') {
            let validacion = 'Por favor, complete los datos necesarios: Nombre, Apellido y Email'
            res.render('contacto', {
                validacion,
                nombreForm,
                apellidoForm,
                emailForm
            })
        }else {
            
        }       
    }



    

    validacion();
};


const updateConsulta = (req, res) => {

};


const deleteConsulta = (req, res) => {

};

module.exports = {
    inicio,
    all,
    search,
    createConsulta,
    updateConsulta,
    deleteConsulta
}





