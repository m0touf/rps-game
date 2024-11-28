import mongoose from 'mongoose';
import { IPlayer } from '../types';

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  currency: { type: Number, default: 1000 },
  collection: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  decks: [{
    name: String,
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
  }]
});

export default mongoose.model<IPlayer>('Player', playerSchema);