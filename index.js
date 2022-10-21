const { Router, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const { request } = require("http");

const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.raw());

// Conexion a la base de datos
mongoose.connect("mongodb+srv://admin:admin123@tallermecanico.7z3am15.mongodb.net/Taller?retryWrites=true&w=majority");


//Schema Cliente
const clienteSchema = new mongoose.Schema({
    documento: String,
    nombre: String,
    apellido: String,
    telefono: String,
    correo: String,
    fecha_nacimiento: String,
    direccion: String,
    nivel_estudio: String,
    contrasenia: String
});

const clienteModelo = mongoose.model("clientes", clienteSchema);

app.get("/", (request, response) => {
    response.send("Realiciste una petición");
});

//:::::::::::::::::::: CRUD Cliente

// Registrar cliente -----------------
app.post("/AgregarCliente", (request, response) => {

    let clienteNuevo = new clienteModelo({
        documento: request.body.documento,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        telefono: request.body.telefono,
        correo: request.body.correo,
        fecha_nacimiento: request.body.fecha_nacimiento,
        direccion: request.body.direccion,
        nivel_estudio: request.body.nivel_estudio,
        contrasenia: request.body.contrasenia
    });

    clienteNuevo.save(function (error, documento) {
        if (error) {
            response.send("Error al agregar usuario");
        } else {
            response.send("Usuario agregado exitosamente");
        }
    })
});

//Obtener Clientes
app.get("Clientes", (request, response) => {
    clienteModelo.find(function (error, documentos) {
        response.send(documentos)
    });
});

//Editar Cliente
app.put("EditarCliente", function (request, response) {
    const filter = { documento: request.body.documento };
    const update = { documento: String(request.body.documento) };

    clienteModelo.findOneAndUpdate(filter, update, function (error, documento) {
        if (error) {
            console.log(error);
            response.send("Error al editar el usuario");
        } else {
            response.send("El usuario ha sido editado");
        }
    });
});

//Eliminar Cliente
app.delete("/EliminarCliente", function (request, response) {
    clienteModelo.deleteOne(
        { documento: request.body.documento | request.param("documento") },
        function (error, documento) {
            if (error) {
                response.send("Error al eliminar usuario");
            } else {
                response.send("El usuario ha sido eliminado")
            }
        }
    );
});

//::::::::::::::::::::::::: fin CRUD cliente

//::::::::::::::::::::::::: CRUD Mecánico











app.listen(3000, () => {
    console.log("escuchando...")
})
