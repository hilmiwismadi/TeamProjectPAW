const express = require('express');
const router = express.Router();
//impor fungsi-fungsi dosenController
const { 
    readAllDosen, 
    readDosen, 
    createDosen, 
    updateDosen, 
    deleteDosen 
} = require('../controllers/dosenController');

//definisi route
router.get('/dosen',readAllDosen);
router.get('/dosen/:id',readDosen);
router.post('/dosen',createDosen);
router.put('/dosen/:id',updateDosen);
router.delete('/dosen/:id',deleteDosen);

module.exports = router;
