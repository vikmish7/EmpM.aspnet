const $ = require("jquery");
const { updateData } = require("../crud/put");

jest.mock("jquery", () => ({
  ajax: jest.fn(),
}));

describe("updateData()", () => {
  it("should resolve with response data on a successful PUT request", async () => {
    const mockResponse = { success: true };
    const mockData = { name: "John Doe Updated", age: 31 };

    $.ajax.mockImplementation(({ success }) => success(mockResponse));

    await expect(updateData("https://api.example.com/users/1", mockData)).resolves.toEqual(mockResponse);
  });

  it("should reject with an error message on failure", async () => {
    const mockError = "Failed to update user";

    $.ajax.mockImplementation(({ error }) => error(null, null, mockError));

    await expect(updateData("https://api.example.com/users/1", { name: "John" })).rejects.toBe(mockError);
  });
});
