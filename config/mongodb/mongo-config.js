module.exports = {
    mongodb: {
        server: process.env.MONGO_SERVER,
        database: process.env.MONGO_DATA_BASE,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD
    }
};