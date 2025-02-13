const $ = require("jquery");
const { deleteData } = require("../crud/delete");

jest.mock("jquery", () => ({
  ajax: jest.fn(),
}));

describe("deleteData()", () => {
  it("should resolve with response data on a successful DELETE request", async () => {
    const mockResponse = { success: true };

    $.ajax.mockImplementation(({ success }) => success(mockResponse));

    await expect(deleteData("https://api.example.com/users/1")).resolves.toEqual(mockResponse);
  });

  it("should reject with an error message on failure", async () => {
    const mockError = "Failed to delete user";

    $.ajax.mockImplementation(({ error }) => error(null, null, mockError));

    await expect(deleteData("https://api.example.com/users/1")).rejects.toBe(mockError);
  });
});
