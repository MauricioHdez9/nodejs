//video 2----------------------------------------------------------------------------------------------------------------------------------------------
//const frutas = require('./frutas.js');//solo se extrayendo una variable 
// const {frutas,dinero} = require('./frutas');//tambien se puede sin la extencion de el archivo == frutas
//npm video 3 ------------------------------------------------------------------------------------------------------------------------------------------
// const cowsay=require("cowsay");
// console.log(cowsay.say({
// 	text :"hola ke ase",
// 	e:"0 0",
// 	T:"UU"
// }));
//npx       (nombre del packete)  //=sin instalar 
//npm i     (nombre del packete)  //=local 
//npm i -g  (nombre del packete)  //=global
// frutas.forEach(item =>
// 	{
// 		console.count(item)
// 	})
// 	console.log(dinero)
//-------video 4------------------------------------------------------------------
// const http = require('http');
// const server= http.createServer((req,res)=> //? se crea el servidor req=request res=respond =respuesta 
// {
// 	res.end("estoy respondiendo a tu solicitud .v7")//?responder desde el servidor 

// })
// const puerto = 3000;//? puerto en el que esta la aplicacioin
// server.listen(puerto,() => {
	// 	console.log('escuchando  solicitudes')
	// })
	//-------video 5 express.js----------------------------------------------------------
// 	const express = require('express');
// 	const app = express();
// 	const port = 3000;

// 	app.use(express.static(__dirname + "/public")); //?esto es un midelwere comando para que lea de la carpeta public 

// 	app.get('/',(req,res)=> //? obtener una respuesta 
// 	{
// 		// console.log(__dirname)
// 		res.send('mi respuesta de express v2');
// 	})
//  app.get('/servicios',(req,res) =>
//  {
// 	 res.send('estas en la pagina de servicios');
// 	})
	
	
// 	app.listen(port,() => //? escuchando  en el puertotal 
// 	{
// 		console.log('servidor a su servicio en el puerto', port);
// 	})
// 	app.use((req,res,next)=>
// 	{
// 		res.status(404).sendFile(__dirname + "/public/404.html");
// 	})
	//--------video 6---template engines EJS con Express---------------------------------------------------------------------------------------
	const express = require('express');//? utilisa la "libreria" descargada con npm
	const app = express(); //? utilisa lo que se guarda en la variavle de arriba
	app.timeout = 1000;

	require('dotenv').config();
	const port = process.env.PORT || 3000; //? puerto  que lo da por defeto o el 3000

	//?conexion a la base de datos 
	const mongoose = require('mongoose');
	let url=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vbjcd.mongodb.net/${process.env.NAMEBD}?retryWrites=true&w=majority`;
	mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
	
	.then(() =>console.log('base de datos conetada'))
    .catch(e =>console.log(e))

	app.set("view engine", "ejs");//? indica que se istalo en este caso ejs  
    app.set("views", __dirname + "/views-vistas");//? nota :: poner la direccion con el   nombre como la carpeta de views 
	app.use(express.static(__dirname + "/public"));

	//?rutasweb
	app.use('/',require('./router/rutasweb'));
	app.use('/mascotas',require('./router/mascotas'))
	
	app.listen(port,() =>
	{
		console.log('servidor a su servicio en el puerto', port);
	})
	app.use((req,res,next)=>
	{
		res.status(404).render("404",{titulos:"404",descripcion:"algo fallo verifique las rutas de acceso"});
	})