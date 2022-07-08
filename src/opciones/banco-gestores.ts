import { Gestor } from './../modelos/gestor';
import { BancoArchivos } from './../almacenamiento/banco-archivos';
import { Configuracion } from './../modelos/configuracion';
import validator from 'validator';

export class BancoGestores {

    //atributos
    private conf: Configuracion;
    private bancoArchivos: BancoArchivos;
    private rlp: any;

    //constructor, método especial

    constructor(
        conf:Configuracion,
        bancoArchivos: BancoArchivos,
        rlp){

            this.conf= conf;
            this.bancoArchivos = bancoArchivos;
            this.rlp = rlp;

        }

        async insertarGestor(){
            const usuario: string = await this.rlp.questionAsync('Usuario:\n');

            if((usuario.length < 3) || (usuario.length > 14 )){
                console.log('La longitud es incorrecta (3-14)');
            }
             // extrae la primera letra del nombre de usuario
            const primeraLetra = usuario.charAt(0);
            const primeraLetraNum = +primeraLetra;

            // verificamos si la primera letra es un número 
            if(!isNaN(primeraLetraNum)){
                console.log('La primera letra de usuario no puede ser un nº');
                return;
            }

            // si gestorExistente es undefined, entonces ha pasado la validación, pero si existe, entonces mostramos una advertencia y retornamos
    const gestorExistente = await this.bancoArchivos.obtenerGestorPorUsuario(usuario);
    if(gestorExistente) {
      console.log('Ya existe un gestor con el mismo nombre de usuario');
      return
    }

    
    const password: string = await this.rlp.questionAsync('Password: ');
    if((password.length < 3) || (password.length > 25)) {
      console.log('La longitud es incorrecta (3-25)');
      return;   
    }


    // solicitamos el correo
    const correo: string = await this.rlp.questionAsync('Correo: ');
    if(!validator.isEmail(correo)) {
      console.log('No es un email válido');
      return;
    }
    
    const gestorExistente2 = await this.bancoArchivos.obtenerGestorPorCorreo(usuario);
    if(gestorExistente2) {
      console.log('Ya existe un gestor con el mismo correo');
      return;
    }
    this.bancoArchivos.insertarGestor({
        usuario,
        password,
        correo
    } as Gestor);

    console.log('Gestor insertado correctamente');
    await this.rlp.questionAsync('');
  }
}
