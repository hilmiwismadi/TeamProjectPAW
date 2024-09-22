const express = require('express');
const router = express.Router();

const { 
    createMataKuliah,
    readAllMataKuliah,
    readMataKuliah,
    updateMataKuliah,
    deleteMataKuliah,
} = require('../controllers/mataKuliahController');

//definisi route
router.post('/mataKuliah',createMataKuliah);
router.get('/mataKuliah',readAllMataKuliah);
router.get('/mataKuliah/:id',readMataKuliah);
router.put('/mataKuliah/:id',updateMataKuliah);
router.delete('/mataKuliah/:id',deleteMataKuliah);

module.exports = router;
