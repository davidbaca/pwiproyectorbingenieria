const { Router } = require('express');
const router = Router();
const { 
    inicio,
    all,
    search,
    createConsulta,
    updateConsulta,
    deleteConsulta
} = require('../controllers/consultas');


router.get('/', inicio);
router.get('/todos', all);
router.get('/buscar/:id', search);
router.post('/ingresar', createConsulta);
router.put('/actualizar/:id', updateConsulta);
router.delete('/eliminar/:id', deleteConsulta);


module.exports = router;



