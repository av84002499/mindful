import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
    Id: {
        type: String,
        required: true,
      },
      Name: {
        type: String,
        required: true,
      },
    
      Email: {
        type: String,
        required: true,
      },
      Phone : {
        type: String,
        required: true,
      },
      Gender : {
        type: String,
        default: Date.now,
      },
      City : {
        type: String,
        default: Date.now,
      },
      State : {
        type: String,
        default: Date.now,
      }

});