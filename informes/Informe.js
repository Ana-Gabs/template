class Informe {
    // metodo template que define el flujo de trabajo para generar un informe
    generarInforme() {
        this.cargarDatos();
        this.procesarDatos();
        this.generarContenido();
        this.exportarInforme();
    }

    // paso abstracto: cargar datos especifico para el informe
    cargarDatos() {
        console.log("Cargando datos...");
    }

    // paso abstracto: procesar los datos cargados
    procesarDatos() {
        console.log("Procesando datos...");
    }

    // paso especifico que debe ser implementado en las subclases para generar el contenido del informe
    generarContenido() {
        throw new Error("Método 'generarContenido' debe ser implementado en la subclase");
    }

    // paso comun para todos los informes: exportar el informe
    exportarInforme() {
        console.log("Exportando informe...");
    }
}

module.exports = Informe;
