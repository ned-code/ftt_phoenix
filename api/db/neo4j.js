import neo4j from 'neo4j-driver';

export default class Neo4jDB {
  constructor () {
    this.driver = neo4j.driver(
      "bolt://localhost",
      neo4j.auth.basic("neo4j", "212300")
    );  
  }

  session () {
    return this.driver.session();
  }
}
