export class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = ".card-title a";
        this.addToCartButton = "Add to cart";
        this.cart = "#cartur";
    }

    async addProductToCart(productName) {
        const products = await this.page.$$(this.productList);
        for (const product of products) {
            if (productName === await product.textContent()) {
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async (dialog) => {
            if (dialog.message() === 'Product added.') {
                await dialog.accept();
            }
        });
        await this.page.getByRole('link', { name: this.addToCartButton }).click();
    }

    async goToCart() {
        await this.page.locator(this.cart).click();
    }
}