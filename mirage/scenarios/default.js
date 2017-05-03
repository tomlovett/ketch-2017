export default function(server) {
  let players = server.createList('player', 17);
  const squad = server.create('team', { players });

  const opponent = server.create('team');

  const points = server.createList('point', 3);

  server.create('game', { squad, opponent, points });
}
