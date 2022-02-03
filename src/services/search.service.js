const Item = require('../models/item')

const searchService = {
    getItems: async function(params){
        const {
            title
        } = params
        if(title){
            const searchTitle = title.trim()
            const searchString = new RegExp(searchTitle, 'i')

            const result = await Item.find({
                $or: [{
                    title: searchString
                }]
            }, {})
            return result
        }else {
            return null
        }
    }
}

module.exports = searchService