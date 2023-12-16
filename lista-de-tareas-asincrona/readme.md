¿Qué sucedió al usar async y await?

Al utilizar async y await, las funciones asíncronas se vuelven más legibles y similares a la programación síncrona. 
El código espera hasta que las operaciones asíncronas se completen antes de pasar a la siguiente instrucción, lo que facilita la comprensión del flujo de ejecución.


¿Qué sucedió al usar el método then()?

Al usar el método then(), se implementa el estilo de programación basado en promesas. Cada operación asíncrona se maneja mediante el método then() encadenado a la promesa correspondiente. 
Aunque funcional, el código puede volverse más complejo y anidado, especialmente cuando se tienen varias operaciones asíncronas consecutivas.

¿Qué diferencias encontraste entre async, await y el método then()?

La principal diferencia radica en la legibilidad y la estructura del código. 
async y await ofrecen un enfoque más limpio y fácil de entender, 
ya que el código parece ser síncrono a pesar de ser asíncrono. El método then(),
en cambio, utiliza un estilo de encadenamiento de promesas que puede resultar menos claro,
especialmente en código más complejo. Además, async y await permiten manejar errores de manera más sencilla utilizando bloques try-catch, mientras que con then()
se manejan mediante la función catch al final de la cadena de promesas.