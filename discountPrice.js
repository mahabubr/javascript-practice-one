function discountPrice(price) {
    if (price > 5000) {
        let discountPrice = price * (20 / 100);
        let netPrice = price - discountPrice;
        console.log(netPrice);
        return discountPrice, '20% Discount';
    }
    else if (price >= 3000) {
        let discountPrice = price * (15 / 100);
        let netPrice = price - discountPrice;
        console.log(netPrice);
        return '15% Discount';
    }
    else if (price >= 1000) {
        let discountPrice = price * (10 / 100);
        let netPrice = price - discountPrice;
        console.log(netPrice);
        return '10% Discount';
    }
    else {
        return 'No Discount';
    }
}
console.log(discountPrice(6500));
console.log(discountPrice(3500));
console.log(discountPrice(1500));
console.log(discountPrice(500));