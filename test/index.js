if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: ".env" });

const { APP_HOST } = require("../src/config/config");

const expect = require("chai").expect;
const request = require("request");

describe("Routes responses", function () {
  describe("Get request to / route", function () {
    it("Return ok status(200) and recive an html document from /", function (done) {
      request(`${APP_HOST}/`, function (error, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(res.headers["content-type"]).to.equal(
          "text/html; charset=utf-8"
        );
        done();
      });
    });
  });
  describe("Get request to /chat route", function () {
    it("Return ok status(200) and recive an html document from /chat", function (done) {
      request(`${APP_HOST}/chat`, function (error, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(res.headers["content-type"]).to.equal(
          "text/html; charset=utf-8"
        );
        done();
      });
    });
  });
  describe("Get request to /rooms route", function () {
    it("Return ok status(200) and recive an html document from /rooms", function (done) {
      request(`${APP_HOST}/rooms`, function (error, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(res.headers["content-type"]).to.equal(
          "text/html; charset=utf-8"
        );
        done();
      });
    });
  });
  describe("Get request to /random route", function () {
    it("Return ok status(404) and recive an html document from /random", function (done) {
      request(`${APP_HOST}/random`, function (error, res, body) {
        expect(res.statusCode).to.equal(404);
        expect(res.headers["content-type"]).to.equal(
          "text/html; charset=utf-8"
        );
        done();
      });
    });
  });
});
