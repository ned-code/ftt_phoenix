export default function load(req, params, db) {
  return new Promise((resolve, reject) => {
    db.postgresql.knex
    .select()
    .from('users')
    .then( data => {
      console.log(data);
      resolve(data);
    });
  });
}
