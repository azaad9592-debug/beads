// Simple Selection function for Order Form
function selectProduct(productName) {
    const select = document.getElementById('productSelect');
    if (select) {
        select.value = productName;
    }
}

// Simple Email Order Submission
function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const product = document.getElementById('productSelect').value;

    const emailTo = "azaad9592@gmail.com";
    const subject = encodeURIComponent(`New Order: ${name} - ${product}`);

    let bodyText = `--- New Order Details ---\n\n`;
    bodyText += `Customer Name: ${name}\n`;
    bodyText += `City: ${city}\n`;
    bodyText += `Delivery Address:\n${address}\n\n`;
    bodyText += `Product Selected: ${product}\n`;

    const body = encodeURIComponent(bodyText);

    // Open default mail client
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
}
