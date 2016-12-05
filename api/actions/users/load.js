export default function load(req, params, db) {
  const session = db.neo4j.session();

  const getUsers = () => session.run('MATCH (n:PERSON) RETURN n');
  const getEvents = () => session.run('MATCH p=()-[r:EVENT]->() RETURN p');

  return Promise.all([getUsers(), getEvents()])
  .then(data => {
    const [ users, events ] = data;
    return [
      users.records.map(u => u.get('n').properties),
      events.records.map(e => {
        const ev = e.get('p')
        const start = ev.start.properties;
        const end = ev.end.properties;

        return {
          treeId: start.treeId,
          userId: start.userId,
          name: start.name,
          eventId: end.eventId,
          type: end.type
        };
      })
    ];
  }) 
}
