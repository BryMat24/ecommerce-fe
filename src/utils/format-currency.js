let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 3,
}

let convertDollar = new Intl.NumberFormat("en-US", formatting_options);

export default convertDollar;