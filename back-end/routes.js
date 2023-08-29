import { addNewItem, deleteItem, getItem, getItems, updateItem } from "./controllers";

const  routes = (app) => {
    app.route('/api/items')
        .get(getItems) //GET Endpoint
        .post(addNewItem); //post endpoint

    app.route('/api/items/id')
        .get(getItem)  //Get specific Item
        .put(updateItem)   // Update specific Item
        .delete(deleteItem);   // delete specific Item
}
export default routes;