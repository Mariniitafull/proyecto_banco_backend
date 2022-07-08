import { BancoArchivos } from './../almacenamiento/banco-archivos';
import { BancoGestores } from './../opciones/banco-gestores';

import { Configuracion } from './../modelos/configuracion';
import validator from 'validator';



export async function mostrarMenuGestores(
    conf: Configuracion,
    bancoArchivos: BancoArchivos,
    rlp) {

        // const rlp = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        //     terminal: false,
        //   });
        
          let opcion: string;
          const bancoGestores = new BancoGestores(conf, bancoArchivos, rlp);
        
          do {
            console.clear();
            console.log('MENÚ GESTORES');
            console.log('-------------');
            console.log('1. Insertar gestor');
            console.log('2. Insertar gestores masivamente');
            console.log('3. Mostrar gestores');
            console.log('4. Mostrar gestor por identificador');
            console.log('5. Modificar gestor');
            console.log('6. Eliminar gestor por identificador');
            console.log('7. Atrás <-- vuelve al menú principal');
            
            opcion = await rlp.questionAsync('¿Qué opción deseas?\n');
            console.clear();

            // validator.isEmail('marinafullferrer@gmail.com')

            if(opcion === '1') {

                await bancoGestores.insertarGestor();   
                await rlp.questionAsync('');
     
              }

              
          } while(opcion !== '7');
        
          // esta es la última línea del programa
          rlp.close();
        }
