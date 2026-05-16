import mongoose, { Document, Schema } from "mongoose";

export interface ICareerApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  createdAt: Date;
}

const CareerApplicationSchema = new Schema<ICareerApplication>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    coverLetter: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const CareerApplication =
  mongoose.models.CareerApplication ||
  mongoose.model<ICareerApplication>("CareerApplication", CareerApplicationSchema);
