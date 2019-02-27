var fs = require('fs');
var cont;
var contenido;
var total="";
fs.readFile('comas.csv','utf8', function(err,datos){
    if(err) {
        throw err;
    }
    datos2 = datos.split('\n');

    datos2.map(function(e){
            cont = {};
            contenido = [];
            var linea = e.split(",");
            cont = "Registro: "+linea[0]+"\n"+
            "NC: "+linea[1]+"\n"+
            "Nombre: "+linea[2]+"\n"+
            "Calificacion: "+linea[3];
            contenido.push(cont);
            total = total+contenido;       
            
    })

    fs.writeFile('archivo.txt', total, function (err) {
        if (err) throw err;
        console.log('Guardado');
      });
   
    
    
})