## Proyecto de Generación de Informes con el Patrón Template Method en Node.js
Este proyecto implementa el **patrón de Diseño Template** en Node.js para un sistema de generación de informes. Cada tipo de informe (Ventas, Rendimiento, Financiero) sigue un flujo de trabajo predefinido, pero permite personalizar los pasos especificos como el contenido generado.

## Estructura del Proyecto
│   index.js                     # Punto de entrada de la aplicación
│   package-lock.json            # Archivo de dependencias
│   package.json                 # Archivo de configuración de dependencias
│   README.md                    # Documentación del proyecto
│
└───informes                     # Clases principales del sistema de informes
        Informe.js               # Clase base abstracta para generar informes
        InformeFinanciero.js     # Generación de informes financieros
        InformeRendimiento.js    # Generación de informes de rendimiento
        InformeVentas.js         # Generación de informes de ventas

## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flujo de Ejecucion
Generando Informe de Ventas:
Cargando datos...
Procesando datos...
Generando informe de ventas...
Total ventas: $10,000
Productos más vendidos: Laptop, Teléfono, Auriculares
Exportando informe...

Generando Informe de Rendimiento:
Cargando datos...
Procesando datos...
Generando informe de rendimiento...
Rendimiento del equipo: 95%
Proyectos completados a tiempo: 10
Exportando informe...

Generando Informe Financiero:
Cargando datos...
Procesando datos...
Generando informe financiero...
Ingresos: $50,000
Gastos: $30,000
Beneficio neto: $20,000

## Clases Principales y Metodos
1. Clase Informe (informes/Informe.js) --> La clase base abstracta que define el flujo de trabajo para generar cualquier tipo de informe. Los pasos comunes estan definidos aqui, mientras que los especificos se implementan en las subclases.
**Metodos Principales**
    1. generarInforme() --> Define el flujo general para generar un informe.
    2. cargarDatos() --> Metodo abstracto para cargar datos.
    3. procesarDatos() --> Metodo abstracto para procesar datos.
    4. generarContenido() --> Metodo abstracto para personalizar el contenido del informe.
    5. exportarInforme() --> Exporta el informe generado.
2. Clase InformeVentas (informes/InformeVentas.js) --> Genera el contenido especifico para un informe de ventas.
**Metodos Principales**
    1. generarContenido(): Implementa la logica para mostrar estadisticas de ventas como total vendido y productos más vendidos.
3. Clase InformeRendimiento (informes/InformeRendimiento.js) --> Genera el contenido especifico para un informe de rendimiento.
**Metodos Principales**
    1. generarContenido() --> Implementa la logica para mostrar detalles del rendimiento del equipo y proyectos completados.
4. Clase InformeFinanciero (informes/InformeFinanciero.js) --> Genera el contenido especifico para un informe financiero.
**Metodos Principales**
1. generarContenido() --> Implementa la logica para mostrar estadisticas financieras como ingresos, gastos y beneficios.

## Implementacion del Patrón Template 
El Patron Template Method permite definir un flujo de trabajo general y delegar pasos especificos a subclases. En el proyecto el flujo general para generar un informe esta definido en el Metodo generarInforme() de la clase base Informe. Las subclases (InformeVentas, InformeRendimiento, InformeFinanciero) implementan el Metodo abstracto generarContenido() para proporcionar contenido especifico del informe.