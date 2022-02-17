module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c0e4d66d61632ca2f63686cb73899a4'),
  },
});
