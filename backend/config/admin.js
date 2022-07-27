module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff614b8359d18a6f0b6a23ad7d6b4260'),
  },
});
