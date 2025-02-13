const { showLoaderThenMessage } = require("../crud/timeout");
const $ = require("jquery");

describe("Timeout Handling (Loader to Heading)", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="content"></div>`;
  });

  it("should show loader initially and replace with heading after 2 seconds", () => {
    jest.useFakeTimers(); // Mock timers

    showLoaderThenMessage(); // Call function

    expect($("#content").html()).toBe('<div id="loader">Loading...</div>'); // Initially shows loader

    jest.advanceTimersByTime(2000); // Fast-forward 2s

    expect($("#content").html()).toBe("<h1>Hello Jest!</h1>"); // After 2s, loader is replaced

    jest.useRealTimers(); // Restore real timers
  });
});
