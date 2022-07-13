import { Configuracion } from '../modelos/configuracion';
import { MongoClient } from 'mongodb';
export class BancoDatabase {

  // atributos
  private conf: Configuracion;

  constructor(conf: Configuracion) {
    this.conf = conf;
  }

  async conectar() {
    const uri = `mongodb://${this.conf.databaseHost}:${this.conf.databasePuerto}`
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db();
      }
      catch {
        console.log('Error conectando a la base de datos');      
      }
      finally { // liberación de recursos
        await client.close();
      }
    }
  }