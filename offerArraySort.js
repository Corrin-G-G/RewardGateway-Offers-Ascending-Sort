// Select all retailer items
const items = document.querySelectorAll('.item.itcss-box.flush.clearfix.search_page');

// Convert NodeList to an array and sort it based on the discount percentage
const sortedItems = Array.from(items).sort((a, b) => {
    const amountA = a.querySelector('.amount');
    const amountB = b.querySelector('.amount');

    // Initialize discount values
    let discountA = 0;
    let discountB = 0;

    // Extract discount values if they exist
    if (amountA) {
        const matchA = amountA.innerText.match(/[\d.]+/);
        discountA = matchA ? parseFloat(matchA[0]) : 0; // Use parsed value or 0 if not found
    }

    if (amountB) {
        const matchB = amountB.innerText.match(/[\d.]+/);
        discountB = matchB ? parseFloat(matchB[0]) : 0; // Use parsed value or 0 if not found
    }

    return discountB - discountA; // Sort in descending order
});

// Clear the existing items and append the sorted items
const container = document.querySelector('.list_view'); // Use the list_view container
container.innerHTML = ''; // Clear existing items
sortedItems.forEach(item => container.appendChild(item)); // Append sorted items
