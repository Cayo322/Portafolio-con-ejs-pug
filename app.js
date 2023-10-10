const express = require('express');
const app = express();
const PORT = 3000;

// Configuración del middleware para parsear datos del formulario
app.use(express.urlencoded({ extended: true }));

app.get('/inicio/:nombre?', (req, res) => {
    const nombre = req.params.nombre || 'Invitado';
    res.render('index', { nombre });
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/inicio');
});

app.get('/confirmacion/:nombre?', (req, res) => {
  const nombre = req.params.nombre || 'Invitado';
  res.render('confirmacion', { nombre });
});

app.post('/enviar-formulario', (req, res) => {

  res.redirect('/confirmacion/' + req.body.nombre);
});

app.get('/skills/:nombre?', (req, res) => {
  const nombre = req.params.nombre || 'Invitado';
  res.render('skills', { nombre });
});

app.get('/contact/:nombre?', (req, res) => {
  const nombre = req.params.nombre || 'Invitado';
  res.render('contact', { nombre });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
