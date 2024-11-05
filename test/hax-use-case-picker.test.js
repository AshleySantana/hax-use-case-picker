import { html, fixture, expect } from '@open-wc/testing';
import "../hax-use-case-picker.js";

describe("HaxUseCasePicker test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <hax-use-case-picker
        title="title"
      ></hax-use-case-picker>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
