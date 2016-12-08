export default function load(req, params, models) {

  const getUsers = models.Users.getUsers;
  const getEvents = models.Users.getEvents;

  return Promise.all([getUsers(), getEvents()])
  .then(data => {
    const [ users, events ] = data;
    return [
      users.records.map(u => {
        const p = u.get('n').properties
        return {
          treeId: parseInt(p.treeId, 10),
          userId: parseInt(p.userId, 10),
          name: p.name
        }
      }),
      events.records.map(e => {
        const ev = e.get('p')
        const start = ev.start.properties;
        const end = ev.end.properties;

        return {
          treeId: parseInt(start.treeId, 10),
          userId: parseInt(start.userId, 10),
          eventId: parseInt(end.eventId, 10),
          name: start.name,
          type: end.type
        };
      })
    ];
  }) 
}
