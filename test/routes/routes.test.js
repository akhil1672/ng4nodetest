const chai = require('chai');
//const chaihttp = require('chai-http');
let expect = require('chai').expect;
const request=require('supertest');
const server = require('../../index.js');
let should = chai.should();

chai.use(require('chai-http'));

describe('Movies', () => {
    //this.timeout(5000);
    describe('/GET movies',() => { 
        before(function () {
            this.timeout(5000);
        })
        //this.timeout(5000);
        xit('should get all the movies',async () => {
            let res = {};
            res=await request(server).get('/api/movies');
            //console.log(res);
                expect(res).to.have.status(200);
                expect(res.body[0].name).to.be.equal('Hulk');
                expect(res.body[0].year).to.be.equal(2000);
                expect(res.body[0].rating).to.be.equal(8);
          
            // expect(res).to.have.status(200);
            // expect(res.body[0].name).to.be.equal('Hulk 2');
            // chai.request(server).get('/api/movies').end((err, res) => {
            //         //console.log(res);
            //         res.should.have.status(404);
            //         res.body.should.be.a('array');
            //         res.body.length.should.be.eql(0);
            //         expect('Content-Length').to.be.eql(145);
            //         res.body[0].should.have.property('_id');
            //         done();
            //    });
        })
    })

    describe('/POST movie',()=>{
        xit('should add movies',async ()=>{
            let newmovie={
                name:'godzilla 2',
                year:2018,
                rating:10
            }
            let res=await request(server).post('/api/movies').send(newmovie);
            //console.log(res);
            expect(res).to.have.status(200);
            expect(res.body.ok).to.be.equal(1);
            expect(res.body.n).to.be.equal(1);
        })
    })

    describe('/GET ',()=>{
        xit('should get one movie',async ()=>{
            let moviename="Iron Man 2";
            let res=await request(server).get('/api/movies/'+moviename);
            //console.log(res)
            expect(res.body.name).to.be.equal('Iron Man 2');
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        })
    })

    describe('/POST movies', () => {
        xit('should add movie', async () => {
            chai.request(server).post('/api/movies').send({name:'Smart man',year:1975,rating:5.0}).end((err, res) => {
                //console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.json;
                done();
            });
        })
    })

    // describe('/error',()=>{
    //     it('should return error',()=>{
    //         chai.request(server).get('/api/movie').end((err,res)=>{
    //             //console.log(res);
    //             expect(res).to.have.status(200);
    //         })
    //     })
    // })
    describe('/DELETE',()=>{
        xit('should delete movie',async ()=>{
            let moviename="Avengers 3";
            let res=await request(server).delete('/api/movies/'+moviename);
            expect(res).to.have.status(200);
            expect(res.body.ok).to.be.equal(1);
            expect(res.body.n).to.be.equal(1);
        })
    })

    describe('/PUT',()=>{
        xit('should update movie',async ()=>{
            let moviename="Avengers 3";
            let movie={
                name:"Iron Man 3",
                year:2017,
                rating:9.0
            }
            let res=await request(server).put('/api/movies/'+moviename).send(movie);
            expect(res).to.have.status(200);
            expect(res.body.ok).to.be.equal(1);
            expect(res.body.n).to.be.equal(1);
        })
    })

})