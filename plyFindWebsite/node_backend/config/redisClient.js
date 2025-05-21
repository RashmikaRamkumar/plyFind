const Redis = require('ioredis');

let redisClient;

const getRedisClient = () => {
    if (!redisClient) {
        // Initialize redisClient only once
        redisClient = new Redis({
            host: 'localhost', // Replace with your Redis host
            port: 6379, // Replace with your Redis port
            password: '', // Optional, add if your Redis instance requires a password
        });

        // Handle Redis connection events
        redisClient.on('connect', () => {
            console.log('Connected to Redis');
        });

        redisClient.on('error', (err) => {
            console.error('Redis connection error:', err);
        });
    }

    return redisClient;
};

module.exports = getRedisClient;
