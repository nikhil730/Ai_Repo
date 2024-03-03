const express = require('express');
const data = require('./modelData');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.send('server running');
});
app.get('/explore', function (req, res) {
  res.json(data);
});

app.get('/explore/tags', function (req, res) {
  const tags = data.map((item) => {
    return item.category;
  });
  const uniqueTags = [...new Set(tags)];
  const tagData = uniqueTags.map((item, index) => {
    return { id: index + 1, text: item };
  });
  res.json(tagData);
});

app.get('/topModel', function (req, res) {
  const topModelData = [...data].sort((a, b) => b.likes - a.likes).slice(0, 10);
  res.json(topModelData);
});
app.get('/topModel/accuracy', function (req, res) {
  const topModelData = [...data]
    .sort((a, b) => b.accurate - a.accurate)
    .slice(0, 10);
  res.json(topModelData);
});
app.get('/topModel/easyToUse', function (req, res) {
  const topModelData = [...data]
    .sort((a, b) => b.easyToUse - a.easyToUse)
    .slice(0, 10);
  res.json(topModelData);
});

app.get('/Models/:modelId', function (req, res) {
  const modelId = parseInt(req.params.modelId);
  const arr = [];
  const foundModel = data.find((obj) => {
    if (obj.id === modelId) {
      arr.push(obj);
      return arr;
    }
  });
  console.log(foundModel);
  if (foundModel) {
    res.json(arr);
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});

app.get('/search/:query', function (req, res) {
  const searchQuery = req.params.query;
  console.log(searchQuery);
  const arr = [];
  const foundModel = data.find((obj) => {
    if (obj.name === searchQuery) {
      arr.push(obj);
      return arr;
    }
  });
  console.log(foundModel);
  if (foundModel) {
    res.json(arr);
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});

app.post('/explore/like', function (req, res) {
  const id = req.body.id;
  console.log('hello');
  console.log(req.body);
  const foundModel = data.find((obj) => {
    return obj.id === id;
  });
  if (foundModel) {
    foundModel.likes = foundModel.likes + 1;
    res.json({
      success: true,
      message: 'updated the likes',
    });
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});
app.post('/explore/like/accuracy', function (req, res) {
  const id = req.body.id;
  console.log('hello');
  console.log(req.body);
  const foundModel = data.find((obj) => {
    return obj.id === id;
  });
  if (foundModel) {
    foundModel.accurate = foundModel.accurate + 1;
    res.json({
      success: true,
      message: 'updated the likes',
    });
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});
app.post('/explore/like/easyToUse', function (req, res) {
  const id = req.body.id;
  console.log('hello');
  console.log(req.body);
  const foundModel = data.find((obj) => {
    return obj.id === id;
  });
  if (foundModel) {
    foundModel.easyToUse = foundModel.easyToUse + 1;
    res.json({
      success: true,
      message: 'updated the likes',
    });
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});

app.post('/explore/dislike', function (req, res) {
  const id = req.body.id;
  console.log(id);
  const foundModel = data.find((obj) => {
    return obj.id === id;
  });
  if (foundModel) {
    foundModel.likes = foundModel.likes - 1;
    res.json({
      success: true,
      message: 'updated the likes',
    });
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});
app.post('/explore/dislike/accuracy', function (req, res) {
  const id = req.body.id;
  console.log(id);
  const foundModel = data.find((obj) => {
    return obj.id === id;
  });
  if (foundModel) {
    foundModel.accurate = foundModel.accurate - 1;
    res.json({
      success: true,
      message: 'updated the likes',
    });
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});
app.post('/explore/dislike/easyToUse', function (req, res) {
  const id = req.body.id;
  console.log(id);
  const foundModel = data.find((obj) => {
    return obj.id === id;
  });
  if (foundModel) {
    foundModel.easyToUse = foundModel.easyToUse - 1;
    res.json({
      success: true,
      message: 'updated the likes',
    });
  } else {
    res.status(404).json({ success: false, message: 'Model not found.' });
  }
});

app.post('/UploadModel', function (req, res) {
  console.log(req.body);
  data.push(req.body);
  res.status(200).json({ success: true, message: 'Model uploaded' });
});
app.listen(PORT, () => {
  console.log('listening on port 3000');
});
