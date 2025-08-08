const App = require('../models/App');

// Get all approved apps
exports.getApps = async (req, res) => {
  const apps = await App.find({ isApproved: true });
  res.json(apps);
};

// Upload new app
exports.uploadApp = async (req, res) => {
  const {
    name, description, category, version, size
  } = req.body;

  const newApp = new App({
    name,
    description,
    category,
    version,
    size,
    icon: req.files['icon'][0].path,
    screenshots: req.files['screenshots']?.map(file => file.path) || [],
    apkUrl: req.files['apk'][0].path
  });

  await newApp.save();
  res.json({ message: 'App uploaded, pending approval' });
};

// Approve app
exports.approveApp = async (req, res) => {
  await App.findByIdAndUpdate(req.params.id, { isApproved: true });
  res.json({ message: 'App approved' });
};

// Delete app
exports.deleteApp = async (req, res) => {
  await App.findByIdAndDelete(req.params.id);
  res.json({ message: 'App deleted' });
};

// Download count
exports.incrementDownloads = async (req, res) => {
  const app = await App.findById(req.params.id);
  app.downloadCount += 1;
  await app.save();
  res.json({ message: 'Download recorded' });
};
