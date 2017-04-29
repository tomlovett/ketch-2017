export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced

  this.get('games/:id');

  this.get('players/:id');

  this.get('teams/:id');
}
