const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = 'mongodb+srv://davecamp:R8dy0LYFUlCh54lp@cluster0.fdwpzyb.mongodb.net/miapp?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB Atlas exitosa'))
.catch(err => console.log(err));

const contactoSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    numero: Number,
    mensaje: String,
    nombreempresa: String
});
const Contacto = mongoose.model('Contacto', contactoSchema);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

// app.get('/vistadatos', async (req, res) => {
//     try {
//         const contactos = await Contacto.find();
//         res.render('vistadatos', { contactos });
//       } catch (err) {
//         console.error('Error al obtener contacto:', err);
//         res.status(500).send('Error interno del servidor');
//       }
// });

app.post('/crear', async (req, res) => {
    try {
      const { nombre, correo, numero, mensaje, nombreempresa } = req.body;
      const nuevocontacto = new Contacto({ nombre, correo, numero, mensaje, nombreempresa });
      await nuevocontacto.save();
      console.log("guardado")
      setTimeout(() => {
        res.redirect('/');
      }, 3000);
    } catch (err) {
      console.error('Error al crear un nuevo contacto:', err);
      res.status(500).send('Error interno del servidor');
    }
  });

//   app.get('/eliminar/:id', async (req, res) => {
//     try {
//         await Contacto.findByIdAndDelete(req.params.id);
//         res.status(200).send(alert('Contacto eliminado exitosamente'));
//     } catch (err) {
//         console.error('Error al eliminar el contacto:', err);
//         res.status(500).send('Error interno del servidor');
//     }
// });

// app.get('/editar/:id', async (req, res) => {
//     try {
//         const contacto = await Contacto.findById(req.params.id);
//         if (!contacto) {
//             return res.status(404).send('Contacto no encontrado');
//         }
//         res.render('editar', { contacto });
//     } catch (err) {
//         console.error('Error al editar contacto:', err);
//         res.status(500).send('Error interno del servidor');
//     }
// });

// app.post('/actualizar/:id', async (req, res) => {
//     try {
//         const { nombre, correo, numero, mensaje, nombreempresa } = req.body;
//         await Contacto.findByIdAndUpdate(req.params.id, { nombre, correo, numero, mensaje, nombreempresa });
//         res.redirect('/vistadatos');
//     } catch (err) {
//         console.error('Error al actualizar el contacto:', err);
//         res.status(500).send('Error interno del servidor');
//     }
// });

app.listen(port, () => {
    console.log(`servidor en: ${port}`);
});