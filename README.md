¿Qué sucedio al usar async y await?
La designacion de async fue necesaria para marcar funciones como asyncronas. Usando await, se esperaba la resolucion de una promesa antes de continuar con la ejecucion del programa.


¿Qué sucedio al usar el método then()?
El metodo then se utilizo para ejecutar mas instructiones luego de que una Promesa fuera completada, y podia hacer uso de parametros retornados por la promesa. En este caso se utilizo para imprimir los mensajes de resultado.

¿Qué diferencias encontraste entre async, await y el método then()?
async se utiliza para marcar funciones como asyncronas, que se ejecutan en paralelo con el hilo principal.
await se utiliza para llamar una funcion que retorna una Promesa, y esperar que esta se complete antes de continuar con la ejecucion del hilo.
then se utiliza para ejecutar instruciones luego que una Promesa fuera completada.