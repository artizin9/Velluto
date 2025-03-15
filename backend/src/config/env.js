import dotenv from 'dotenv'

dotenv.config()

export const env = {
    NODE_ENV: "development",
    PORT: process.env.PORT  || 3000,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    COOKIE_SECRET: process.env.COOKIE_SECRET
}