const searchService = require('../services/search.service')
const Item = require('../models/item')

const itemController = {   
    /**
     * Searches an item in the database by title.
     * @param {*} req request sended for the client
     * @param {*} res response sended to the client
     */ 
    search: async function(req, res){
        try{
            const search = await searchService.getItems(req.body)
            if(search){
                res.status(200).json(search)
            }else{
                res.status(404).json({'error':'not found'})
            }
        }catch(error){
            res.status(500).json({"error":error})
        }
    },
    /**
     * Function to find an item by the ID
     * returns a response with a status 200 if can find the item, status 500 if there's an error
     * @param {*} req request sended for the client
     * @param {*} res response sended to the client
     */
    find: async function(req, res){
        try {
            const item = await Item.findById(req.params.id) 
            res.status(200).json({"item":item})
        } catch (error) {
            res.status(500).json({"error":error})
        }
    },
    /**
     * Function to add items on the database
     * creates a new item with, title, description and picture
     * stores de picture in the project files ./uploads/img
     * @param {*} req request sended for the client
     * @param {*} res response sended to the client
     */
    add: async function(req, res){        
        req.setTimeout(1800000);
        try {
            const item = new Item(req.body)
            const {filename} = req.file
            item.setPicture(filename)
            await item.save()
            res.status(200).json({"item":item})
        } catch (error) {
            res.status(500).json({"error":error})
        }
    }
}

module.exports = itemController