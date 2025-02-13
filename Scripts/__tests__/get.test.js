const $ = require("jquery");
const { getData } = require("../crud/get");

jest.mock("jquery", () => ({
  ajax: jest.fn(),
}));

describe("getData()", () => {
  it("should resolve with data on a successful GET request", async () => {
    const mockResponse = { id: 1, name: "John Doe" };
    
    $.ajax.mockImplementation(({ success }) => success(mockResponse));

    await expect(getData("https://api.example.com/user/1")).resolves.toEqual(mockResponse);
  });

  it("should reject with an error message on failure", async () => {
    const mockError = "Network Error";
    
    $.ajax.mockImplementation(({ error }) => error(null, null, mockError));

    await expect(getData("https://api.example.com/user/1")).rejects.toBe(mockError);
  });
});
