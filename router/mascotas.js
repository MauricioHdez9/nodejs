const express = require('express'); //!investigar 
const router = express.Router();    //!investigar 
const Mascota= require('../models/mascota');//esto es el modelo    //!investigar  


router.get('/',async(req,res)=>
{
    
    try
    {
        let arrayMascotasDB = await Mascota.find();//!investigar 
        // console.log(arrayMascotasDB);
        res.render("mascotas",{ //!investigar  que es un render+
            arraymascotas:arrayMascotasDB //? nombre la propiedad : contenido ==todo esto es un objeto
        
        //      arraymascotas:[
        //      {id:'125447',nombre:'rex',descripcion:'rex descargas '},
        //      {id:'485871',nombre:'rexxar',descripcion:'ahora es chaman '}
    
        // ]
     })

        
    }
    catch(error)
    {
      console.log('error');
    }
    
    
});
module.exports = router;