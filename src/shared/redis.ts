import { createClient } from "redis";
import logger from "./logger";
import config from "../config";

let redisClient = createClient({
    url: config.redis.url
});

redisClient.on('error', (err) => logger.error('RedisError', err));
redisClient.on('connect', (err) => logger.info('Redis connected'));

const connect = async (): Promise<void> => {
    await redisClient.connect()
}

export const RedisClient = {
    connect
}