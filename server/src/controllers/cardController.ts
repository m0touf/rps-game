import { Request, Response } from 'express';
import Card from '../models/Card';

export const cardController = {
  async getAllCards(req: Request, res: Response) {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching cards' });
    }
  },

  async createCard(req: Request, res: Response) {
    try {
      const card = new Card(req.body);
      await card.save();
      res.status(201).json(card);
    } catch (error) {
      res.status(400).json({ message: 'Error creating card' });
    }
  }
};