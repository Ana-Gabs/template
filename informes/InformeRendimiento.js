const Informe = require('./Informe');

class InformeRendimiento extends Informe {
    // implemtación de la generación del contenido del informe de rendimiento
    generarContenido() {
        console.log("Generando informe de rendimiento...");
        console.log("Rendimiento del equipo: 95%");
        console.log("Proyectos completados a tiempo: 10");
    }
}

module.exports = InformeRendimiento;
