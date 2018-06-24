import { Schema } from 'mongoose';

export const CompanySchema = new Schema({
  name: {
    required: true,
    type: String
  },
  city: String,
  address: String
});
