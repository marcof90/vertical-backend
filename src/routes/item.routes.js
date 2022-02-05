const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item.controller')
const upload = require('../helper/storage.helper')

//----------Routes------------

/**
 * @api {get} items/:id Get an item by its ID
 * @apiName Get Item
 * @apiDescription you can get an item sending its ID as a url param
 * @apiGroup Item
 * @apiPermission none
 * @apiSuccess (200) {json} json object with the item data
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 ok
 *  {
 *       "item": {
 *           "_id": "61faebf8ebd9fca50f65b010",
 *           "title": "gym picture",
 *           "description": "lift weight to get a hot body",
 *           "createdAt": "2022-02-02T20:39:20.790Z",
 *           "picture": "/public/1643834360779gym.jpg",
 *           "__v": 0
 *       }
 *   }
 * @apiSampleRequest https://vertical-backend.herokuapp.com/items/61faebf8ebd9fca50f65b010
 * @apiError (500) {json} json object with an error
 * @apiErrorExample {json} Error-response
 * Status 500 Internal Server Error
 *  {
 *       "error": {
 *           "stringValue": "\"61faebf8ebd9fca50f65b01\"",
 *           "valueType": "string",
 *           "kind": "ObjectId",
 *           "value": "61faebf8ebd9fca50f65b01",
 *           "path": "_id",
 *           "reason": {},
 *           "name": "CastError",
 *           "message": "Cast to ObjectId failed for value \"61faebf8ebd9fca50f65b01\" (type string) at path \"_id\" for model \"items\""
 *       }
 *   }
 */
router.get('/:id', itemController.find)

/**
 * @api {post} items/ Add an item
 * @apiName Add Item
 * @apiGroup Item
 * @apiDescription Add an item sending the data by form-data 
 * @apiParam {string} title Title of the item
 * @apiParam {file} picture Picture file of the item
 * @apiParam {string} description Short description of the item
 * @apiParamExample {json} Request-Example:
 *  {
 *      
 *       "title": "another item",
 *       "description": "inprove yourself, something else"      
 *  }
 * @apiPermission none
 * @apiSuccess (200) {json} Json object with the item data
 * @apiSuccessExample {json} Success-Response
 *  {
 *       "item": {
 *           "title": "another item of gym",
 *           "description": "inprove yourself, with a long sentence...",
 *           "_id": "61fbdf813f223562ed1e4159",
 *           "createdAt": "2022-02-03T13:58:25.626Z",
 *           "picture": "/public/1643896705615gym4.jpg",
 *           "__v": 0
 *       }
 *   }
 * @apiError (500) {json} Json object with the errors
 * @apiErrorExample {json} Error-Response
 * Status 500 Internal Server Error
 * {
 *       "error": {
 *           "errors": {
 *               "description": {
 *                   "name": "ValidatorError",
 *                   "message": "Path `description` is required.",
 *                   "properties": {
 *                       "message": "Path `description` is required.",
 *                       "type": "required",
 *                       "path": "description"
 *                   },
 *                   "kind": "required",
 *                   "path": "description"
 *               },
 *               "title": {
 *                   "name": "ValidatorError",
 *                   "message": "Path `title` is required.",
 *                   "properties": {
 *                       "message": "Path `title` is required.",
 *                       "type": "required",
 *                       "path": "title"
 *                   },
 *                   "kind": "required",
 *                   "path": "title"
 *               }
 *           },
 *           "_message": "items validation failed",
 *           "name": "ValidationError",
 *           "message": "items validation failed: description: Path `description` is required., title: Path `title` is required."
 *       }
 *   }
 */
router.post('/', upload.single('picture'), itemController.add)

module.exports = router