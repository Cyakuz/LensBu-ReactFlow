const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Sunucunun statik dosyaları sunması için "public" klasörünü kullanır
app.use(express.static(path.join(__dirname, 'public')));

// React uygulamasının ana dosyasını yönlendirir
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Diğer yolları burada yönlendirebilirsiniz
// Örnek: app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Sunucuyu belirtilen portta dinlemeye başlar
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
