const Informe = require('./Informe');

class InformeFinanciero extends Informe {
    // implemtación de la generación del contenido del informe financiero
    generarContenido() {
        console.log("Generando informe financiero...");
        console.log("Ingresos: $50,000");
        console.log("Gastos: $30,000");
        console.log("Beneficio neto: $20,000");
    }
}

module.exports = InformeFinanciero;
