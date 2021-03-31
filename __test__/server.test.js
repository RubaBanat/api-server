'use strict';
require('dotenv').config();
const { app,start } = require('../src/server.js'); // => {server,start}
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(app);


let id;
describe('api server', () => {
    it('invalid routes handler', async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
      });
      it('invalid method handler', async () => {
        const response = await request.post('/error');
        expect(response.status).toEqual(404);
      });
      it('should be able to get a clothes on get /clothes', async () => {
        const response = await request.get('/api/v1/clothes');
        expect(response.status).toEqual(200);
      });
      it('should be able to create a clothes on POST /clothes', async () => {
        const obj = {
          type: 'T-shirt',
          size: 'small',
        };
        const response = await request.post('/api/v1/clothes').send(obj);
        expect(response.status).toEqual(201);
        expect(response.body.type).toEqual('T-shirt');
        id = response.body._id;
      });

  it('should be able to update a clothes on PUT /clothes', async () => {
    const response = await request.put(`/api/v1/clothes/${id}`).send({
      type: 'dress',
      size: 'small',
    });
    expect(response.status).toEqual(200);
    expect(response.body.type).toEqual('dress');
  });
  it('should be able to get a clothes on Get /clothes/:id', async () => {
    const response = await request.get(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body[0].type).toEqual('dress');
  });
  it(`should delete a clothes on DELETE / clothes` , async ()=>{
      const response = await request.delete(`/api/v1/clothes/${id}`);
      expect(response.status).toEqual(200);
});
  //-----------Food tests-------------//
  it('should be able to get a food on get /food', async () => {
    const response = await request.get('/api/v1/food');
    expect(response.status).toEqual(200);
  });
  it('should be able to create a food on POST /food', async () => {
    const obj = {
      name: 'mansaf',
      type: 'main-dish'
    };
    const response = await request.post('/api/v1/food').send(obj);
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('mansaf');
    id = response.body._id;
  });
  it('should be able to update a food on PUT /food', async () => {
    const response = await request.put(`/api/v1/food/${id}`).send({
      name: 'knafa',
      type: 'desert',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('knafa');
  });
  it('should be able to get a food on Get /food/:id', async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('mansaf');
  }); 
  it(`should delete a food on DELETE / food` , async ()=>{
    const response = await request.delete(`/api/v1/food/${id}`);
expect(response.status).toEqual(200);
});
});