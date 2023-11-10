import { Document, model, Schema } from "mongoose";

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
        }
    },
        {timestamps: true, versionKey: false}
)

const MoviesModel = model<IMovieDocument>('Movie', MovieSchema);

export default MoviesModel;