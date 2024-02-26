const express = require('express');
const { list, newest, recomended, detail, create, update, destroy} = require('../../controllers/api/moviesController');
const router = express.Router();


router.get('/api/movies', list);
router.get('/api/movies/new', newest);
router.get('/api/movies/recommended', recomended);
router.get('/api/movies/:id', detail);
//Rutas exigidas para la creación del CRUD

router.post('/api/movies', create);
router.put('/api/movies/:id', update);
router.delete('/api/movies/:id', destroy);

module.exports = router;