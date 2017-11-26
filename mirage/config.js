import Mirage from 'ember-cli-mirage';

export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced

  this.get('games/:id');
  this.patch('games/:id', (schema, request) => {
    return request.requestBody;
  }, 201);

  this.get('players/:id', () => {
    return send(201);
  });

  this.post('points');
  this.patch('points/:id', (schema, request) => {
    return request.requestBody;
  }, 201);

  this.post('stats');

  this.get('teams/:id');

}
function send(code) {
  return new Mirage.Response(code);
}

