import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'postgres',
    password: '6565',
    host: 'localhost',
    port: '5433',
    database: 'budget',
  });

  await client.connect();
  return client;
};