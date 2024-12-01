const InformeVentas = require('./informes/InformeVentas');
const InformeRendimiento = require('./informes/InformeRendimiento');
const InformeFinanciero = require('./informes/InformeFinanciero');

// se crean instancias de los diferentes tipos de informe
const informeVentas = new InformeVentas();
const informeRendimiento = new InformeRendimiento();
const informeFinanciero = new InformeFinanciero();

// genra  los informes
console.log("Generando Informe de Ventas:");
informeVentas.generarInforme();

console.log("\nGenerando Informe de Rendimiento:");
informeRendimiento.generarInforme();

console.log("\nGenerando Informe Financiero:");
informeFinanciero.generarInforme();
