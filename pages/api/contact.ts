import type { NextApiRequest, NextApiResponse } from 'next';
import { normaliseEmail, validate } from '../../lib/validate';
import { MongoClient } from 'mongodb';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const data = {
      name,
      email: normaliseEmail(email),
      message
    };
    // Validate incoming data
    const correctData = validate(data);
    if (!correctData) {
      res.status(422).json({ message: 'Data validation failed! Please check data and try again' });
    }
    let client;
    try {
      client = await MongoClient.connect(process.env.DB_STRING);
    } catch (error) {
      res.status(500).json({ message: 'Failed to connect to the database' });
      return;
    }
    const db = client.db();
    try {
      await db.collection('messages').insertOne(data);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }
    res.status(201).json({ message: 'success', data: data });
    client.close();
  } else {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

export default handler;
