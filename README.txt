1. Crear un archivo de configuración conf.json con una única propiedad archivosUbicacion. El valor de esta será datos. Añadir el directorio datos en .gitignore

2. Leer el archivo de configuración y parsearlo a un objeto que esté tipado con una interfaz. La interfaz (Configuracion) se crea en el archivo modelos/configuracion.ts 

3. Crear un archivo banco-archivos.ts dentro del directorio src/almacenamiento. Dentro del archivo creamos la clase BancoArchivos. En el constructor de la clase (hay que pasar por parámetro el objeto conf) vamos a verificar si el directorio que se ha definido en la propiedad conf.archivoUbicacion existe (fs.exists). Si no existe, lo creamos (fs.mkdir). A continuación creamos un array vacío dentro del archivo gestores.json (solamente si no existe el archivo) en el directorio de datos

4. Creamos algunos gestores de prueba en el archivo gestores.json. A continuación, en el constructor BancoArchivos, leemos el archivo  gestores.json, parseamos a array de TypeScript y guardamos el valor como una propiedad de la clase (gestores tipada un array de Gestor). Será necesario crear una interfaz Gestor (modelos/gestor.ts) en el directorio modelos.

5. Crear el archivo src/mostrar.ts con el contenido del archivo mostrar.ts (proyecto banco-frontend)

6. Crear el siguiente menú principal (menu/menu-principal.ts). Todo el menú tiene que escribirse en la función mostrarMenuPrincipal, que debe recibir como parámetros conf, bancoArchivos. 

BANCO
--------
1. Gestores
2. Clientes
3. Mensajes
4. Transferencias
5. Otros
6. Login
0. Salir

7. Al acceder a gestores se tiene que mostrar un submenú (menu/menu-gestores.ts). Todo el menú tiene que escribirse en la función mostrarMenuGestores, que debe recibir como parámetros conf, bancoArchivos y rlp. 

MENÚ GESTORES
--------
1. Insertar gestor
2. Insertar gestores masivamente
3. Mostrar gestores
4. Mostrar gestor por identificador
5. Modificar gestor
6. Eliminar gestor por identificador
7. Atrás <-- vuelve al menú principal


8. En el archivo menu-gestores.ts implementar la opción 1 (Insertar gestor). Crear el archivo opciones/banco-gestores.ts Dentro de este archivo creamos una clase con nombre BancoGestores. El constructor recibe conf, bancoArchivos y rlp y se asignan a los atributos de la clase. Crear dentro del método insertarGestor. En ese método se solicita por pantalla al usuario el nombre del usuario, el password y la contraseña. Realizar las siguientes validaciones sobre los datos

1. El nombre de gestor (usuario) debería tener entre 3 y 15 caracteres (ambos inclusive)
2. El nombre del gestor no puede comenzar con un número
3. El correo electrónico debe ser válido
4. La contraseña debería tener entre 3 y 25 caracteres (ambos inclusive)
5. No puede existir dos gestores con el mismo nombre. Será necesario el método obtenerGestorPorUsuario. Debe recibir por parámetro el nombre de usuario y retornar el gestor (si lo encuentra). Si no lo encuentra, devuelve undefined
6. No puede existir dos gestores con el mismo correo electrónico. Será necesario el método obtenerGestorPorCorreo. Debe recibir por parámetro el correo y retornar el gestor (si lo encuentra). Si no lo encuentra, devuelve undefined
/*

TODAS LAS LIBRERÍAS QUE SE DESCARGAN NPM SON LIBRERÍAS DE JAVASCRIPT:

1. No tenga tipado ni se le puede añadir de ninguna manera. Ej: readline-promise
2. Tienen tipado incorporado: Ej: mongo
3. No tienen tipado, pero se le puedes instalar. Ej: validator --> @types/validator

*/


9. Implementar el método insertarGestor en la clase BancoArchivos. Debe recibir un objeto de tipo Gestor y se debe agregar al array de gestores mediante push. Y guardar los datos en el archivo de gestores.json. 

10. El siguiente id tendrá que obterse iterando todas los gestores en el contructor y obteniedo cual es el mayor id

11. Encapsular todos los objetos de inicialización en un solo objeto envolvente (wrapper), de tal forma que a la función mostrarMenuPrincipal únicamente vamos a pasarle el objeto envolvente. El objeto debe debe tiparse (modelos/wrapper.ts) e incluir 3 objetos: rlp, conf, bancoArchivos

12. Crear el archivo validaciones/validacion-gestores.ts con tres funciones validarUsuario, validarPassword y validarCorreo. Las tres funciones tienen que ser asíncronas, ser tienen que exportar, reciben como parámetro un string y el objeto w, y devuelve otro string. El string que devuelve es el error de validación si se produce y si no, se devuelve undefined o null

13. Guardar el password no en texto plano, sino mediante un algoritmos de hash: bcrypt. Instalar la librería bcrypt

npm install bcrypt

14. Implementar la opción de mostrarGestores. Añadir la opción 3 de menú Gestores

15. En el menú de gestores, cambiar la opción de Atrás (7) por Atrás (8) y añador la opción 7. Eliminar todos los gestores

16. Implementar la opción de eliminarGestorPorId y eliminarGestores

17. Cuando no haya ningún gestor, mostrar por pantalla "No hay gestores"

18. La contraseña debe cifrarse mediante el algoritmo de hash bcrypt

19. Incorporar algunas propiedades adicionales al archivo conf.json:
   archivosHabilitado (boolean): indica si se habilita el almacenamiento en archivos
   databaseHabilitado (boolean): indica si se habilita el almacenamiento en base de datos
   databaseHost (string)
   databasePuerto (number)
   databaseNombre (string)

20. Tipar con los nuevas propiedades la interfaz Configuracion en el archivo modelos/configuracion.ts

21. Crear el archivo validaciones/validarcion-configuracion.ts. Creamos la función validarConfiguracion, que recibe como parámetro el objeto de configuración y devuelve un string. Si el string es null, entonces la validación se ha pasado y si no es null, entonces la validación no es correcta y mensaje del error viene dado por el valor del string devuelto.

22. Probar la función validarConfiguracion en el archivo main.ts, después de leer el archivo de configuración. Si se produce un error, se muestra un mensaje de error y se sale del programa (no se muestra el menú)

/*
 RECORDATORIO: ejecutar nodemon de la siguiente forma:

nodemon dist/main.js -i *.json

*/

23. Instalar la librería mongodb

npm install mongodb

24. Crear el archivo almacenamiento/banco-database.ts. Crear una clase dentro del archivo con nombre BancoDatabase. En el constructor recibe el objeto de configuración como parámetro y se almacena como atributo de la clase. Implementar también un método asíncrono para conectar a la base de datos y asociarlo con la base del datos banco. Guardar el objeto asociado a la colección gestores como un atributo de la clase

25. Crear un objeto de la clase BancoDatabase en el archivo main.ts, invocar al método conectar. Asociar el objeto bancoDatabase al objeto wrapper (tipar correctamente la intefaz Wrapper)

26. Implementar el método obtenerGestores en la clase BancoDatabase (archivo almacenamiento/banco-database.ts). El método no recibe parámetro y retorna una promesa que resuelve con un array de gestores.

27. Probar el método obtenerGestores de la clase BancoDatabase, invocándolo en el menú de gestores

28. Implementar el método agregarGestor en la clase BancoDatabase (archivo almacenamiento/banco-database.ts). El método recibe un parámetro un objeto de tipo gestor y retorna una promesa que resuelve con void

29. Implementar los métodos obtenerGestorPorCorreo y obtenerGestorPorUsuario en el archivo almacenamiento/banco-database.ts


28. Probar el método agregarGestor de la clase BancoDatabase, invocándolo en el menú de gestores

29. Cambiar el archivo validacion-gestores.ts reemplazando todas las apariciones bancoArchivos y sustituyendo por bancoDatabase

30. Crear el atributo idSiguiente en la clase BancoDatabase y obtener el último id en el método conectar.  En el método insertarGestor, agregar el id asignándole el valor del atributo idSiguiente (que debe incrementarse un valor posteriormente).

31. Implementar los métodos eliminarGestorPorId y eliminarGestores en la clase BancoDatabase

32. Probar los métodos anteriores de la clase BancoDatabase, invocándolo en el menú de gestores

33. Instalar las librerías random-email y unique-names-generator

npm install random-email unique-names-generator

34. Implementar la opción 2 del menú de gestores. Hay que solicitar al usuario el número de gestores a introducir y posteriormente utilizar las librerías anteriores para generar nombres de usuarios y correos aleatorios. Implementar el método insertarGestoresMasivo en la clase BancoGestores

35. En la opción de mostrarGestores, añadir un console.log indicando el número de gestores totales en la colección de gestores

36. Crear el archivo menu-clientes.ts y escribir el menú de clientes:

MENÚ CLIENTES
--------
1. Insertar cliente
2. Mostrar clientes
3. Mostrar cliente por identificador
4. Modificar cliente
5. Eliminar cliente por identificador
6. Eliminar todos los clientes
7. Atrás <-- vuelve al menú principal

37. Crear el archivo banco-clientes.ts con la clase BancoClientes. El constructor recibe el objeto w (Wrapper) y su valor se asigna a un atributo de la clase que debe crearse

38. Implementar el método insertarCliente en la clase BancoClientes. Habrá que pedir al usuario, toda la información cliente: usuario, password, correo, saldo, identificador del gestor. Validaciones: todas las del gestor (opcionales), el saldo no puede negativo, el gestor que le asigna tiene que existir. Las validaciones estarán validaciones-clientes. Habrá que tipar el objeto cliente con la interfaz Cliente (modelos/cliente.ts)

----
39. Instalar la librería nodemailer, que es la que permite enviar correos electrónicos

npm install nodemailer
npm install @types/nodemailer

40. Añadir las siguientes propiedades
 smtpHost: smtp.gmail.com
 smtpPuerto: 465
 smtpUsuario: "pepitonode@gmail.com"
 smtpPassword: "rhncigxanbrurjnf"

41. Agregar conf.json al .gitignore

42. Tipar la interfaz Configuracion (modelos/configuracion.ts) para agregar las cuatro nuevas propiedades

43. Agregar un submenú para la opción "Otros":

MENÚ OTROS
-------------
1. Enviar correo
2. Atrás

Crear el archivo menu/menu-otros.ts con la función asíncrona mostrarMenuOtros, que recibe como parámetro el objeto w (Wrapper)

44. Crear directorio modulos y dentro crear el archivo modulo-email.ts. Crear la clase ModuloEmail, con un costructor el objeto conf o w e implementar el método enviarCorreo, que recibe tres parámetros: la dirección correo destino, el asunto, el texto el correo. El método devuelve un booleano (true si el correo se envió correctamente y false en caso contrario).

45. Crear un objeto de la clase ModuloEmail en el archivo main.ts y asociarlo al objeto w (tipar la interfaz Wrapper el nuevo objeto)

46. La opción de Enviar Correo debe solicitar al usuario por pantalla el correo destino, el asunto y el contenido del correo. Realizar alguna validación e invocar al método enviarCorreo de la clase ModuloEmail.
---

47. Agregar una nueva propiedad al archivo de configuración conf.json
  autenticacionHabilitado (boolean)

Tipar la interfaz Configuración con la nueva propiedad

48. Crear el archivo modulo-autenticacion.ts con la clase ModuloAutenticacion. El constructor va recibir el objeto w. Implementar el método loginGestor y logoutGestor. El método loginGestor recibe como parámetro el usuario y la contraseña y retorna una promesa que resuelve con booleano (true si la autenticación es correcta y false en caso contrario). Los atributos de la clase son: el usuario gestor autenticado (si no está autenticado, su valor será undefined),  token del gestor (undefined si no está autenticado) que será generado mediante la librería jsonwebtoken. El método logout no recibe ningún parámetro, no devuelve y asigna undefined a los atributos del usuario gestor y al token del gestor. 

49. El objeto moduloAutenticacion (de la clase ModuloAutenticación) lo añadimos al objeto w dentro del archivo main.ts

48. La opción de Login debe ofrecer la posibilidad de hacer el login con el gestor o con el cliente:

MENÚ LOGIN
---
1. Login gestor
2. Login cliente
3. Atrás

Crear los archivos menu/menu-login.ts y opciones/banco-login.ts

49. Mostrar en el menú principal, un mensaje notificando si el gestor está autenticado. Si lo está, mostrar el nombre de usuario del gestor autenticado. Añadir los siguientes métodos al módulo de autenticación
  estaGestorAutenticado(): boolean
  obtenerTokenGestor(): string
  obtenerUsuarioGestor(): string

50. Añadir una nueva opción en el menú (Logout) para desautenticarnos

51. En el menú de gestores añadimos una condición para evaluar si el gestor está autenticado. Si no lo está, mostrar un mensaje de error y volver al menú principal. Si lo está, mostrar el menú de gestores. Hay que tener en cuenta que la autenticación estará deshabilitada cuando la propiedad autenticacionHabilitado del archivo de configuración está a false

51. En la opción de mostrarGestores, solicitamos al usuario si quiere mostrar todos los gestores o que los muestre paginados (archivo menu-gestores.ts). Si se muestra con paginación, hay que solicitar al usuario el número de página y el número de gestores a mostrar

52. Implementar el método obtenerGestoresConPaginacion en la clase BancoDatabase. Recibe como parámetro numPagina y numElementos y devuelve una promesa que resuelve con un array de gestores

53. Implementar la opción de "Mostrar gestor por identificador". Añadir el método mostrarGestorPorId dentro de la clase MenuGestores, pasando como parámetro el objeto w. 

54. Implementar el método obtenerGestorPorId en la clase BancoDatabase. Recibe como paráemtro el identificador (number) y devuelve una promesa que resuelve con un gestor

55. Invocar al método mostrarGestor del archivo mostrar.ts. Será necesario añadir export al método mostrarGestor para poder ser utilizado desde el archivo banco-gestores.ts

56. Implementar la opción de "Modificar gestor". Añadir el método actualizarGestorPorUsuario dentro de la clase MenuGestores, pasando como parámetro el objeto w

57. Implementar el método actualizarGestor. Recibe como parámetro un gestor y devuelve una promesa que resuelve como void

58. Crear el archivo modulos/modulo-express.ts. Creamos una clase de nombre ModuloExpress
 Atributo de la clase: app (express.Application)
 constructor: inicializamos el atributo app. El constructor recibe como parámetro un objeto de la clase Configuracion con la configuración del programa (conf.json)
 método inicializar: definir las rutas de la aplicación. Primero definimos una ruta sencilla /ok (GET) y que devuelva el texto ok

59. Integrar un objeto de la clase ModuloExpress en el objeto w (archivo main.ts)


60. Agregar en el archivo de configuración (conf.json) una propiedad expressPuerto. Añadir tipado a la interfaz Configuracion y establecer el valor de la propiedad en el método listen de express, dentro del archivo (modulo-express.ts)

61. Crear el archivo modulos/modulo-autenticacion-web.ts con la clase ModuloAutenticacionWeb. El constructor recibe como parámetro el objeto w y la clase incluye también los siguientes 
  métodos: loginGestor (recibe usuario y contraseña), logout (recibe usuario)
  atributos: gestoresAutenticados (objeto que almacena los nombres de los gestores autenticados y sus tokens)

62. Desde el manejador de ruta o callback de la ruta /login/gestor, invocar al método loginGestor del objeto moduloAutenticacionWeb (clase ModuloAutenticacionWeb)

63. Crear el archivo modelos/respuesta.ts con la interfaz Respuesta para tipar la respuesta que se devuelve al cliente

64. Crear las funciones generarRespuestaOK, generarRespuestaOKConDatos y generarRespuestaError para facilitar la generación de respuestas al cliente

65. Crear la ruta /gestores en el archivo de rutas express (modulo-express.ts)

66. Añadir un condicional en callback que maneja la ruta /gestores comprobando si el token se encuentra en la cabecera Authorization. Si no se encuentra, devolver un objeto JSON de tipo respuesta con el mensaje de error al valor "Privilegios insuficientes"


67. Crear el método autorizacionGestor en la clase ModuloAutenticacionWeb (archivo modulo-autenticacion-web.ts). Recibe el objeto req de Express y devuelve un booleano (true si el token es correcto y false en caso contrario).

68. Crear una ruta en express para manejar peticiones desconocidas. La respuesta tiene en este caso tiene que ser un objeto JSON con ok: false, msg: 'Ruta no encontrada' y data: {}

69. Crear una ruta en express para manejar errores. Es necesario instalar la librería express-async-errors para manejar errores que se produzcan en callbacks asíncronos (se corregirá en las versiones de Express >5.0)

70. Crear ruta para del autenticación del cliente /login/cliente/


  