const express = require('express');
const router= express.Router();

router.get('/',(req,res)=>
	{
		// console.log(__dirname)
		res.render("index",{titulo:"mi titulo dinamico "});//investigar que  hace render= configurado por express ver tamvien que hace express 
	})
 router.get('/servicios',(req,res) =>
 {
	 res.render("servicios",{tituloservicios:"este es un mesaje dinamico de servicios"});
	})
	
module.exports = router;