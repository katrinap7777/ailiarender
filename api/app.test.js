const request = require("supertest");
const app = require("./app.js");
const pool = require("./db");

describe("Test route for GET courses", () => {
  //   afterEach(async () => {
  //     await pool.query("SELECT * FROM courses");
  //   });

  afterAll(() => {
    pool.end();
  });

  test("GET /courses: WHEN there are todos in the database THEN return status 200 and an array of courses", async () => {
    await pool.query(
      `SELECT name, description, price, image, buyLink FROM courses WHERE status ='active'`
    );
    const expectedResponseBody = [
      {
        name: "Personal Property",
        description:
          "Introduces the concept of personal property and outlines the range of legal right and duties associated with the concept.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_00g8z29Yg0Bbbyo003",
      },
      {
        name: "Legal System",
        description:
          "An introduction to the legal system of Aotearoa New Zealand.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_dR66qU0nG3NnfOEaEG",
      },
      {
        name: "Trusts",
        description:
          "Examines the origins of trusts, and current rules and principles governing the creation and operation of trusts as a method of holding property by divided ownership.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_cN2eXq7Q81FfeKAcMN",
      },
      {
        name: "Law of Contract",
        description:
          "Examines the general principles that govern the law of contract in New Zealand.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_8wM02w0nG4Rr8mc000",
      },
    ];
    const response = await request(app)
      .get("/courses")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toBe(expectedResponseBody);
  });

  test("GET /courses sql query should filter out all inactive courses before displaying results", async () => {
    const expectedBody = [
      {
        name: "Personal Property",
        description:
          "Introduces the concept of personal property and outlines the range of legal right and duties associated with the concept.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_00g8z29Yg0Bbbyo003",
      },
      {
        name: "Legal System",
        description:
          "An introduction to the legal system of Aotearoa New Zealand.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_dR66qU0nG3NnfOEaEG",
      },
      {
        name: "Trusts",
        description:
          "Examines the origins of trusts, and current rules and principles governing the creation and operation of trusts as a method of holding property by divided ownership.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_cN2eXq7Q81FfeKAcMN",
      },
      {
        name: "Law of Contract",
        description:
          "Examines the general principles that govern the law of contract in New Zealand.",
        price: "$1,000.00",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        buylink: "https://buy.stripe.com/test_8wM02w0nG4Rr8mc000",
      },
    ];

    const response = await request(app)
      .get("/courses")
      .set("Accept", "application/json");

    // expect(response.status).toBe(200);
    expect((response) => {
      expect(response.body).toEqual(expectedBody);
    });
  });

  test("GET /courses returns 404 if no courses are supplied to the course page from database", async () => {
    const expectedStatus = 404;

    await request(app).get("/course").expect(expectedStatus);
  });
});

// const { makeApp } = require("./app");
// const request = require("supertest");

// const getRoutes = jest.fn();

// const mockRepository = {
//   getRoutes,
// };

// const app = makeApp(mockRepository);

// describe(" GET /courses", () => {
//   describe("Check get routes return courses, check courses match expected data and status codes are correct", () => {
//     beforeEach(() => {
//       getRoutes.mockReset();
//     });

//     const requestData = [
//       {
//         name: "Personal Property",
//         description:
//           "Introduces the concept of personal property and outlines the range of legal right and duties associated with the concept.",
//         price: "$1,000.00",
//         image:
//           "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
//         buylink: "https://buy.stripe.com/test_00g8z29Yg0Bbbyo003",
//       },
//       {
//         name: "Legal System",
//         description:
//           "An introduction to the legal system of Aotearoa New Zealand.",
//         price: "$1,000.00",
//         image:
//           "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
//         buylink: "https://buy.stripe.com/test_dR66qU0nG3NnfOEaEG",
//       },
//       {
//         name: "Trusts",
//         description:
//           "Examines the origins of trusts, and current rules and principles governing the creation and operation of trusts as a method of holding property by divided ownership.",
//         price: "$1,000.00",
//         image:
//           "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
//         buylink: "https://buy.stripe.com/test_cN2eXq7Q81FfeKAcMN",
//       },
//       {
//         name: "Law of Contract",
//         description:
//           "Examines the general principles that govern the law of contract in New Zealand.",
//         price: "$1,000.00",
//         image:
//           "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
//         buylink: "https://buy.stripe.com/test_8wM02w0nG4Rr8mc000",
//       },
//     ];

//     test("GET /courses should return filtered courses", async () => {
//       getRoutes.mockResolvedValue({
//         name: requestData.name,
//         description: requestData.description,
//         price: requestData.price,
//         image: requestData.image,
//         buyLink: requestData.buyLink,
//       });
//       const response = await request(app).get("/courses").send(requestData);
//       expect(response.body.name).toBe(requestData.name);
//       expect(response.body.description).toBe(requestData.description);
//       expect(response.body.image).toBe(requestData.image);
//       expect(response.body.buyLink).toBe(requestData.buyLink);
//     });
//   });
// });
