import { Collection, MongoClient } from 'mongodb';
import { Configuracion } from '../modelos/configuracion';
import { Pelicula } from '../modelos/pelicula';

export class TheMoviesDatabase {

  private conf: Configuracion;
  private cPeliculas: Collection<Pelicula>;

  constructor(conf: Configuracion) {
    this.conf = conf;
  }

  async conectar() {
    const uri = `mongodb://${this.conf.databaseHost}:${this.conf.databasePuerto}`
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db("themovies");
      this.cPeliculas = db.collection('peliculas');
    }
    catch {
      await client.close();
      console.log('Error conectando a la base de datos');      
    }
  }

  async eliminarPeliculas() {
    await this.cPeliculas.deleteMany({});
  }

  async insertarPelicula(pelicula: Pelicula) {
    await this.cPeliculas.insertOne(pelicula);
  }
}