module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'f9a3a697589c95dd41f734a7ea32cd21855529f74b02e21dd833eb378863fa5658b7f96191a101a7c89640a2d35b92c5e047e18789bba5f8ec048cc9ed6f8701',
      'a5f74e9d6fd3c1eddd4625a283826e348ffe35791992daa7e8ad151073e11de8977544216bd9869789419961fb8245270c626df70261707edd0b9849b77b1b88'
    ]),
  },
});
