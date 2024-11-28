import mongoose from 'mongoose';
import { ICard } from '../types';

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  element: { 
    type: String, 
    required: true,
    enum: ['Fire', 'Water', 'Grass']
  },
  power: { 
    type: Number, 
    required: true,
    min: 1,
    max: 10
  },
  ability: {
    name: String,
    effect: String
  }
});

export default mongoose.model<ICard>('Card', cardSchema);