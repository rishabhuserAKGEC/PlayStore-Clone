const apps = [
    { name: "Educational App 1", description: "Learn new things!", image: "https://via.placeholder.com/100" },
    { name: "Gaming App 1", description: "Fun and exciting!", image: "https://via.placeholder.com/100" },
    { name: "Audio/Video App 1", description: "Enjoy media content.", image: "https://via.placeholder.com/100" },
    { name: "E-Books App 1", description: "Read your favorite books.", image: "https://via.placeholder.com/100" },
    // Add more apps as needed
];

let editingIndex = null;

function displayApps() {
    const appList = document.getElementById('app-list');
    appList.innerHTML = '';
    apps.forEach((app, index) => {
        const appItem = document.createElement('div');
        appItem.className = 'app-item';
        appItem.innerHTML = `
            <img src="${app.image}" alt="${app.name}">
            <strong>${app.name}</strong>
            <p>${app.description}</p>
            <button onclick="showEditAppForm(${index})">Edit</button>
            <button onclick="deleteApp(${index})">Delete</button>
        `;
        appList.appendChild(appItem);
    });
}

function showAddAppForm() {
    document.getElementById('add-app-form').style.display = 'block';
}

function hideAddAppForm() {
    document.getElementById('add-app-form').style.display = 'none';
}

function showEditAppForm(index) {
    editingIndex = index;
    const app = apps[index];
    document.getElementById('edit-app-name').value = app.name;
    document.getElementById('edit-app-description').value = app.description;
    document.getElementById('edit-app-image').value = app.image;
    document.getElementById('edit-app-form').style.display = 'block';
}

function hideEditAppForm() {
    document.getElementById('edit-app-form').style.display = 'none';
}

function processPayment() {
    const fee = 5; // Payment fee
    const paymentConfirmed = confirm(`The fee is $${fee}. Do you want to proceed?`);
    if (paymentConfirmed) {
        addApp();
    }
}

function addApp() {
    const name = document.getElementById('app-name').value;
    const description = document.getElementById('app-description').value;
    const image = document.getElementById('app-image').value;

    if (name && description && image) {
        apps.push({ name, description, image });
        displayApps();
        hideAddAppForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function updateApp() {
    const name = document.getElementById('edit-app-name').value;
    const description = document.getElementById('edit-app-description').value;
    const image = document.getElementById('edit-app-image').value;

    if (editingIndex !== null && name && description && image) {
        apps[editingIndex] = { name, description, image };
        displayApps();
        hideEditAppForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function deleteApp(index) {
    if (confirm('Are you sure you want to delete this app?')) {
        apps.splice(index, 1);
        displayApps();
    }
}

window.onload = displayApps;
