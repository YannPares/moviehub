import { Document, Model, Schema } from "mongoose";

interface IMovieDocument extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const MovieSchema = new Schema<IMovieDocument>(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }

        
    }
)