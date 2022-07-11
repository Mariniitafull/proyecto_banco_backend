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


La contraseña debe cifrarse mediante el algoritmo de hash bcrypt