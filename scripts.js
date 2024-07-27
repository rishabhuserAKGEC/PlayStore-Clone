const apps = [
    { name: "App One", description: "Description for App One" },
    { name: "App Two", description: "Description for App Two" }
];

function displayApps() {
    const appList = document.getElementById('app-list');
    appList.innerHTML = '';
    apps.forEach(app => {
        const appItem = document.createElement('div');
        appItem.className = 'app-item';
        appItem.innerHTML = `<strong>${app.name}</strong><p>${app.description}</p>`;
        appList.appendChild(appItem);
    });
}

function showAddAppForm() {
    document.getElementById('add-app-form').style.display = 'block';
}

function hideAddAppForm() {
    document.getElementById('add-app-form').style.display = 'none';
}

function processPayment() {
    // Simulate payment processing
    const paymentSuccessful = confirm("Pay $5 to add a new app?");

    if (paymentSuccessful) {
        addApp();
        document.getElementById('payment-status').innerText = "Payment successful! New app added.";
    } else {
        document.getElementById('payment-status').innerText = "Payment canceled.";
    }
}

function addApp() {
    const name = document.getElementById('app-name').value;
    const description = document.getElementById('app-description').value;
    if (name && description) {
        apps.push({ name, description });
        displayApps();
        hideAddAppForm();
    } else {
        alert('Please fill in both fields.');
    }
}

window.onload = displayApps;
