/** @type {import('next').NextConfig} */
const { parsed: env } = require('dotenv').config();
const nextConfig = {
  env: env,
};

module.exports = nextConfig;
