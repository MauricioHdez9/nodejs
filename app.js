// //const frutas = require('./frutas.js');//solo se extrayendo una variable 
// const {frutas,dinero} = require('./frutas');//tambien se puede sin la extencion de el archivo == frutas

// const cowsay=require("cowsay");
// console.log(cowsay.say({
// 	text :"hola ke ase",
// 	e:"0 0",
// 	T:"UU"
// }));

// frutas.forEach(item =>
// 	{
// 		console.count(item)
// 	})
// 	console.log(dinero)
//-------video 4------------------------------------------------------------------
// const http = require('http');
// const server= http.createServer((req,res)=>
// {
// 	res.end("estoy respondiendo a tu solicitud .v7")

// })
// const puerto = 3000;
// server.listen(puerto,() => {
	// 	console.log('escuchando  solicitudes')
	// })
	//-------video 5 express.js----------------------------------------------------------
// 	const express = require('express');
// 	const app = express();
// 	const port = 3000;

// 	app.use(express.static(__dirname + "/public"));

// 	app.get('/',(req,res)=>
// 	{
// 		// console.log(__dirname)
// 		res.send('mi respuesta de express v2');
// 	})
//  app.get('/servicios',(req,res) =>
//  {
// 	 res.send('estas en la pagina de servicios');
// 	})
	
	
// 	app.listen(port,() =>
// 	{
// 		console.log('servidor a su servicio en el puerto', port);
// 	})
// 	app.use((req,res,next)=>
// 	{
// 		res.status(404).sendFile(__dirname + "/public/404.html");
// 	})
	//--------video 6---template engines EJS con Express---------------------------------------------------------------------------------------
	const express = require('express');
	const app = express();
	const port = 3000;
	app.set("view engine", "ejs");
    app.set("views", __dirname + "/views-vistas");// nota :: poner la direccion con el   nombre como la carpeta de views 
	app.use(express.static(__dirname + "/public"));

	app.get('/',(req,res)=>
	{
		// console.log(__dirname)
		res.render("index",{titulo:"mi titulo dinamico "});//investigar que  hace render= configurado por express ver tamvien que hace express 
	})
 app.get('/servicios',(req,res) =>
 {
	 res.render("servicios",{tituloservicios:"este es un mesaje dinamico de servicios"});
	})
	
	
	app.listen(port,() =>
	{
		console.log('servidor a su servicio en el puerto', port);
	})
	app.use((req,res,next)=>
	{
		res.status(404).render("404",{titulos:"404",descripcion:"algo fallo verifique las rutas de acceso"});
	})