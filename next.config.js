// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "<mongoConnectionString>",// paste what you have copied from mongdoDB connection string;
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
