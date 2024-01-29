let worker;

function initializeWorker() {
    // Initialize the Web Worker
    worker = new Worker('worker.js');

    // Listen for messages from the Web Worker
    worker.onmessage = function (event) {
        displayData(event.data);
    };
}

function fetchData() {
    // Simulate fetching real-time data from a mock API
    setInterval(() => {
        const mockData = generateRandomData();
        worker.postMessage({ action: 'processData', data: mockData });
    }, 3000); // Update data every 3 seconds
}

function generateRandomData() {
    const mockData = [];
    for (let i = 0; i < 5; i++) {
        mockData.push({ value: Math.floor(Math.random() * 100) });
    }
    return mockData;
}

function displayData(processedData) {
    const dashboardElement = document.getElementById('dashboard');

    // Display processed data on the dashboard
    const dataHtml = processedData.map(item => `<p>${item.value}</p>`).join('');
    dashboardElement.innerHTML = dataHtml;
}

// Initialize the Web Worker when the page loads
initializeWorker();

// Fetch data and start the processing when the user interacts with the page
document.addEventListener('DOMContentLoaded', fetchData);
