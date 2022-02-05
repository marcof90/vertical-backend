const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item.controller')

//Routes

/**
 * @api {post} search/ Get a list of items
 * @apiName Search Items
 * @apiDescription Get a list of items searching a string in the title
 * @apiGroup Search
 * @apiPermission none
 * @apiParam {string} string String used to find objects
 * @apiSampleRequest https://vertical-backend.herokuapp.com/search
 * @apiSuccess (200) {json} json with the list of items
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 ok
 * [
 *       {
 *           "_id": "61faebf8ebd9fca50f65b010",
 *           "title": "gym picture",
 *           "description": "lift weight to get a hot body",
 *           "createdAt": "2022-02-02T20:39:20.790Z",
 *           "picture": "/public/1643834360779gym.jpg",
 *           "__v": 0
 *       },
 *       {
 *           "_id": "61faecd70934c02863ead565",
 *           "title": "get strong",
 *           "description": "make u better than yesterday",
 *           "createdAt": "2022-02-02T20:43:03.012Z",
 *           "picture": "/public/1643834583004gym2.jpg",
 *           "__v": 0
 *       },
 *       {
 *           "_id": "61fbdf813f223562ed1e4159",
 *           "title": "another item of gym",
 *           "description": "inprove yourself, with a long sentence...",
 *           "createdAt": "2022-02-03T13:58:25.626Z",
 *           "picture": "/public/1643896705615gym4.jpg",
 *           "__v": 0
 *       }
 *   ]
 * @apiError (404) {json} Not Found
 * @apiErrorExample
 * {
 *      "error": "not found"
 * }
 */
router.post('/', itemController.search)

module.exports = router