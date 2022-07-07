const request = require('supertest');
const app = require('../app');
const data = require('../data/pokemon')

describe('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5005, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /cats with status 200', (done) => {
        request(api).get('/pokemon').expect(200, done);
    });

    it('retrieves a pokemon by id', (done) => {
        request(api)
            .get('/pokemon/3')
            .expect(200)
            .expect({ id: 3, name: 'vena', type: "grass/poison" }, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });

    let testPokemon = {
        name: 'Char',
        type: "Fire",
    };

    it('responds to post /pokemon with status 201', (done) => {
        request(api)
            .post('/pokemon')
            .send(testPokemon)
            .expect(201)
            .expect({ id: 7, ...testPokemon }, done);
    });

    it('responds to delete /pokemon/:id with status 204', async () => {
        await request(api).delete('/pokemon/4').expect(204);
    
        const updatedPokemon = await request(api).get('/pokemon');
        expect(updatedPokemon.body.length).toBe(6);
    });
});