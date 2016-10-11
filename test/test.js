var chai = require('chai');
var expect = chai.expect;
var request = require("request");
var baseUrl = "http://polls.apiblueprint.org";
var util= require("util");

// refer http://docs.feedback13.apiary.io/#reference/0/questions-collection/list-all-questions

describe("API Test",function(){
  it("Passes for 200",function(done) {
    request.get({url: baseUrl + "/questions/2926"},
        function(error,response,body) {
        //  var bodyObj = JSON.parse(body);
        //  expect(bodyObj.question).to.equal("Favourite programming language?");
          expect(response.statusCode).to.equal(200);
          console.log(body);
          done();
        });
  });
});
