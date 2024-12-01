const Informe = require('./Informe');

class InformeVentas extends Informe {
    // implementación de la generación del contenido del informe de ventas
    generarContenido() {
        console.log("Generando informe de ventas...");
        console.log("Total ventas: $10,000");
        console.log("Productos más vendidos: Laptop, Teléfono, Auriculares");
    }
}

module.exports = InformeVentas;
