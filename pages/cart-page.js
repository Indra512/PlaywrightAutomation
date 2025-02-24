export class CartPage {
    constructor(page) {
        this.page = page;
        this.productsList = "#tbodyid tr";
        this.deleteLink = "//a[text()='Delete']";
    }

    async checkProductInCart(productName) {
        let isFound = false;
        const products = await this.page.$$(this.productsList);
        for (const product of products) {
            if (productName === await product.textContent()) {
                console.log(await product.textContent());
                isFound = true;
                break;
            }
        }
        return isFound;
    }
}