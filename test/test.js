var request = require('supertest');
var app = require('../index.js');describe('GET /', function() {
 it('respond with hello im sohel syd', function(done) { //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello im sohel syd', done);
 });
});
