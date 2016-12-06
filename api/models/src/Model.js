import PostgreSQLDB from '../db/postgresql';
import Neo4jDB from '../db/neo4j';

export default class Model { 
  constructor() {
    this._postgresql = new PostgreSQLDB;
    this._neo4j = new Neo4jDB;
  }
  
  neo4j (query) {
    const session = this._neo4j.session();
    return new Promise((resolve, reject) => {
      session
        .run(query)
        .catch(err => { 
          session.close();
          reject(e)
        })
        .then(result => {
          session.close();
          resolve(result);
        });
    }); 
  }

  postgresql () {
    return this._postgresql.knex();
  }
  
}
