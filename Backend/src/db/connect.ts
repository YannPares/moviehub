import mongoose, { mongo } from "mongoose";
import config from "../config/config";

const connect = () => {
    return mongoose.connect(config.db.URI)
}

export default connect