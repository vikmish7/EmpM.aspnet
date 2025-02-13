const $ = require("jquery");
const { postData } = require("../crud/post");

jest.mock("jquery", () => ({
  ajax: jest.fn(),
}));

describe("postData()", () => {
  it("should resolve with response data on a successful POST request", async () => {
    const mockResponse = { success: true };
    const mockData = { name: "John Doe", age: 30 };

    $.ajax.mockImplementation(({ success }) => success(mockResponse));

    await expect(postData("https://api.example.com/users", mockData)).resolves.toEqual(mockResponse);
  });

  it("should reject with an error message on failure", async () => {
    const mockError = "Failed to create user";

    $.ajax.mockImplementation(({ error }) => error(null, null, mockError));

    await expect(postData("https://api.example.com/users", { name: "John" })).rejects.toBe(mockError);
  });
});
