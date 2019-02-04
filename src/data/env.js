// Описание переменных окружения смотри в Readme.
const env = process.env;

module.exports = {
    GLS_MONGO_CONNECT: env.GLS_MONGO_CONNECT || 'mongodb://mongo/admin',
    GLS_DAY_START: env.GLS_DAY_START || 3,
    GLS_METRICS_HOST: env.GLS_METRICS_HOST || '127.0.0.1',
    GLS_METRICS_PORT: env.GLS_METRICS_PORT || 8125,
    GLS_CONNECTOR_HOST: env.GLS_CONNECTOR_HOST || '0.0.0.0',
    GLS_CONNECTOR_PORT: env.GLS_CONNECTOR_PORT || 3000,
    GLS_BLOCKCHAIN_BROADCASTER_SERVER_NAME: env.GLS_BLOCKCHAIN_BROADCASTER_SERVER_NAME,
    GLS_BLOCKCHAIN_BROADCASTER_CLIENT_NAME: env.GLS_BLOCKCHAIN_BROADCASTER_CLIENT_NAME,
    GLS_BLOCKCHAIN_BROADCASTER_CONNECT: env.GLS_BLOCKCHAIN_BROADCASTER_CONNECT,
    GLS_BLOCK_SUBSCRIBER_REPLAY_TIME_DELTA: env.GLS_BLOCK_SUBSCRIBER_REPLAY_TIME_DELTA || 600000,
    GLS_BLOCK_SUBSCRIBER_CLEANER_INTERVAL: env.GLS_BLOCK_SUBSCRIBER_CLEANER_INTERVAL || 600000,
    GLS_BLOCK_SUBSCRIBER_LAST_BLOCK_STORE: env.GLS_BLOCK_SUBSCRIBER_LAST_BLOCK_STORE || 1000,
};
