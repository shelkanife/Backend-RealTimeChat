const server = require("../../src/index");
const supertest = require("supertest");

describe("Routes responses", function () {
  describe("Get request to / route", function () {
    it("Return ok status(200) and recive an html document from /", function (done) {
      let st = supertest(server);
      st.get("/")
        .expect("Contenkt-Type", "text/html; charset=utf-8")
        .expect(200);
      done();
    });
  });
  describe("Get request to /chat route", function () {
    it("Return ok status(200) and recive an html document from /chat", function (done) {
      let st = supertest(server);
      st.get("/chat")
        .expect("Contenkt-Type", "text/html; charset=utf-8")
        .expect(200);
      done();
    });
  });
  describe("Get request to /rooms route", function () {
    it("Return ok status(200) and recive an html document from /rooms", function (done) {
      let st = supertest(server);
      st.get("/rooms")
        .expect("Contenkt-Type", "text/html; charset=utf-8")
        .expect(200);
      done();
    });
  });
  describe("Get request to /random route", function () {
    it("Return not found status(404) and recive an html document from /random", function (done) {
      let st = supertest(server);
      st.get("/random")
        .expect("Contenkt-Type", "text/html; charset=utf-8")
        .expect(404);
      done();
    });
  });
});
