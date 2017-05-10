export default function(server) {
  let players = server.createList('player', 17);
  const squad = server.create('team', { players });

  const opponent = server.create('team');

  server.create('game', { squad, opponent });
}
