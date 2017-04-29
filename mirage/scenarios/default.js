export default function(server) {
  const players = server.createList('player', 14);
  const squad = server.create('team', { players });

  server.create('game', { squad });
}
