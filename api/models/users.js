import Model from './src/Model';

class Users extends Model {
  getUsers = () => this.neo4j('MATCH (n:PERSON) RETURN n')
  getEvents = () => this.neo4j('MATCH p=()-[r:EVENT]->() RETURN p');
}

const users = new Users();

export default users;
