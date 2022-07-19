import { Wrapper } from '../modelos/wrapper';
import { BancoClientes } from '../opciones/banco-clientes';

export async function mostrarMenuClientes(w: Wrapper) {

  let opcion: string;
  const bancoClientes = new BancoClientes(w);

  do {

    console.clear();
    console.log('MENÚ CLIENTES');
    console.log('-------------');
    console.log('1. Insertar cliente');
    console.log('2. Mostrar clientes');
    console.log('3. Mostrar cliente por identificador');
    console.log('4. Modificar cliente');
    console.log('5. Eliminar cliente por identificador');
    console.log('6. Eliminar todos los clientes');
    console.log('7. Atrás');
    
    opcion = await w.rlp.questionAsync('¿Qué opción deseas?\n');

    console.clear();

    // Opción 1 --> Insertar cliente 
    if(opcion === '1') {
      await bancoClientes.insertarCliente();
      await w.rlp.questionAsync('');
    }

    // Opción 2 --> Insertar clientes de forma masiva
    if(opcion === '2') {
      await w.rlp.questionAsync('');
    }

    // Opción 3 --> Mostrar clientes 
    else if(opcion === '3') {
      await w.rlp.questionAsync('');
    }

     // Opción 4 --> Modificar cliente
     else if(opcion === '4') {
      await w.rlp.questionAsync('');
    }

    else if(opcion === '5') {
      await w.rlp.questionAsync('');
    }

    // Opción 6 --> Eliminar todos los clientes
    else if(opcion === '6') {
      await w.rlp.questionAsync('');
    }

  } while(opcion !== '7');
}