const supertest = require('supertest')
const app = require('../server')
const body = require('body-parser')

mock_item = {
    'id': '61faebf8ebd9fca50f65b010',
    'picture': '/public/1643834360779gym.jpg',
    'description':'lift weight to get a hot body',
    'title':'gym picture' 
}

describe('Get item', () => {
    it('Should get an item', async () => {
        const res = await supertest(app)
        .get('/items/' + mock_item.id);        
        expect(res.statusCode).toBe(200)
        expect(res.body.item.picture).toBe(mock_item.picture)
        expect(res.body.item.title).toBe(mock_item.title)
        expect(res.body.item.description).toBe(mock_item.description)        
        expect(res.body.item._id).toBe(mock_item.id)
    })
})

describe('Search items', () => {
    it('Should find items', async () => {        
        const res = await supertest(app)
        .post('/search/')
        .send({
            'title':'g'
        })
        .type('form')
        expect(res.statusCode).toBe(200)
    })
})
describe('Search items', () => {
    it('Should not find items', async () => {        
        const res = await supertest(app)
        .post('/search/')
        .send({
            'title':''
        })
        .type('form')
        expect(res.statusCode).toBe(404)
    })
})