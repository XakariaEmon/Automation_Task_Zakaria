class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async placeOrderAndPay() {
    await this.page.getByRole("link", { name: "Place Order" }).click();
    await this.page.locator('input[name="name_on_card"]').fill("zakaria");
    await this.page
      .locator('input[name="card_number"]')
      .fill("123456789");
    await this.page.getByPlaceholder("ex.").fill("03");
    await this.page.getByPlaceholder("MM").fill("06");
    await this.page.getByPlaceholder("YYYY").fill("2026");
    await this.page
      .getByRole("button", { name: "Pay and Confirm Order" })
      .click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = CheckoutPage;
