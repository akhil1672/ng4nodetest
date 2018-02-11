let expect=require('chai').expect;
let request=require('supertest');
const server = require('../../index.js');

describe('Home page',()=>{
    xit('should return home page',async()=>{
        let res=await request(server).get('/');
        expect(res).to.have.status(200);
    })
})