const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const multer = require('multer');
const path = require('path');

// Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Routes
router.get('/', appController.getApps);

router.post('/upload', upload.fields([
  { name: 'icon', maxCount: 1 },
  { name: 'screenshots', maxCount: 5 },
  { name: 'apk', maxCount: 1 }
]), appController.uploadApp);

router.put('/approve/:id', appController.approveApp);
router.delete('/:id', appController.deleteApp);
router.put('/download/:id', appController.incrementDownloads);

module.exports = router;
