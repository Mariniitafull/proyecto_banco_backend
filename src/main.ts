import { BancoArchivos } from './almacenamiento/banco-archivos';
import { Configuracion } from './modelos/configuracion';
import fs from 'fs' ;
import path from 'path';
import { mostrarMenuPrincipal } from './menu/menu-principal';

async function main () {
   
    


// __dirname = C:\Users\Tarde\Desktop\FULL-STACK\proyecto_banco_backend\dist
// .. -> directorio superior (C:\Users\Tarde\Desktop\FULL-STACK\proyecto_banco_backend\)
const rutaArchivo = path.join(__dirname, '..', 'conf.json' );
const datos = fs.readFileSync('conf.json').toString();
const conf: Configuracion= JSON.parse(datos);

const bancoArchivos = new BancoArchivos(conf);
await mostrarMenuPrincipal(conf, bancoArchivos);

console.log(conf.archivosUbicacion);

// console.log(__dirname);
}

main();