export default function load(req, params, models) {

  const getUsers = models.Users.getUsers;
  const getEvents = models.Users.getEvents;

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
