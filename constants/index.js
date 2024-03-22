import env from 'dotenv';

env.config();

export const constants = {
    mongourl: process.env.MONGOURL,
    port: process.env.PORT,
}