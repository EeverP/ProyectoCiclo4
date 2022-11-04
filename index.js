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
mongoose.connect("");


// Schema Cliente
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

// Schema Vehículo
const vehiculoSchema = new mongoose.Schema({
    placa: String,
    tipo: String,
    marca: String,
    modelo: String,
    cantidad_pasajeros: String,
    cilindraje: String,
    pais_origen: String,
    descripcion: String,
    id_propietario: String
});


const clienteModelo = mongoose.model("clientes", clienteSchema);

const vehiculoModelo = mongoose.model("vehiculos", vehiculoSchema);


app.get("/", (request, response) => {
    response.send("Realiciste una petición");
});

//:::::::::::::::::::: CRUD Cliente

// Registrar cliente -----------------
app.post("/AgregarCliente", (request, response) => {

    let nuevoCliente = new clienteModelo({
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

    nuevoCliente.save(function (error, documento) {
        if (error) {
            response.send("Error al agregar usuario");
        } else {
            response.send("Usuario agregado exitosamente");
        }
    })
});

//Obtener Clientes
app.get("/Clientes", (request, response) => {
    clienteModelo.find(function (error, documentos) {
        response.send(documentos)
    });
});

//Editar Cliente
app.put("/EditarCliente", function (request, response) {
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

//Obtener Cliente por ID
app.get("/ClienteId", (request, response) => {
    clienteModelo.find(
        { documento: request.body.documento | request.param("docuemnto")},
        function (error, docuemnto) {
            response.send(docuemnto)
        }
    )
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

//::::::::::::::::::::::::: CRUD Vehículo

// Registrar vehiculo
app.post("/AgregarVehiculo", (request, response) => {

    let nuevoVehiculo = new vehiculoModelo({
        placa: request.body.placa,
        tipo: request.body.tipo,
        marca: request.body.marca,
        modelo: request.body.modelo,
        cantidda_pasajeros: request.body.cantidad_pasajeros,
        cilindraje: request.body.cilindraje,
        pais_origen: request.body.pais_origen,
        descripcion: request.body.descripcion,
        id_propietario: request.body.id_propietario
    });

    nuevoVehiculo.save(function (error, documento) {
        if (error) {
            response.send("Error al agregar vehículo");
        } else {
            response.send("Vehículo agregado exitosamente");
        }
    })
});

// Obtener vehículos
app.get("/Vehiculos", (request, response) =>{
    vehiculoModelo.find( function(error, documentos) {
        response.send(documentos);
    });
});

//Obtener vehículo por ID
app.get("/VehiculoId", (request, response) => {
    vehiculoModelo.find(
        { documento: request.body.documento | request.param("docuemnto")},
        function (error, docuemnto) {
            response.send(docuemnto)
        }
    )
});


// Editar Vehículo 
app.put("/EditarVehiculo", function (request, response) {
    const filter = { documento: request.body.documento };
    const update = { marca: String(request.body.marca),
                   tipo: String(request.body.tipo)
    };

    vehiculoModelo.findOneAndUpdate(filter, update, function (error, documento){
        if(error) {
            console.log(error);
            response.send("error al editar el vehículo.")
        } else {
            response.send("El vehículo ha sido editado.")
        }
    });
});

// Eliminar Vehículo
app.delete("/EliminarVehiculo", function (request, response) {
    vehiculoModelo.deleteOne(
        {documento: request.body.documento | request.param("documento") },
        function (error, documento) {
            if (error){
                response.send("Error al eliminar el vehículo.");
            } else {
                response.send("El vehículo ha sido eliminado");
            }
        }

    );
});



app.listen(3000, () => {
    console.log("escuchando...")
})
