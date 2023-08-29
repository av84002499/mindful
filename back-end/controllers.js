import mongoose from "mongoose";
import { ItemSchema } from "./itemModel";

const Item = mongoose.model('Item', ItemSchema);
export const addNewItem = async (req,res) => {
    let newItem = new Item(req.body);
    let result = await newItem.save();
    res.json(result);
};

export const getItems = async (req, res) => {
    let result = await Item.find({});
    res.json(result);
};
export const getItem = async (req, res) => {
    let result = await Item.findById(req.params.id);
    res.json(result);
};
export const updateItem = async (req, res) => {
    let result = await Item.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(result);
};
export const deleteItem = async (req, res) => {
    let result = await Item.deleteOne({ _id: req.params.id });
    res.json(result);
};