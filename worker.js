// Web Worker for processing data in the background

// Listen for messages from the main script
self.onmessage = function (event) {
    const { action, data } = event.data;

    if (action === 'processData') {
        // Perform data processing (e.g., aggregation, calculations, filtering)
        const processedData = data.map(item => ({ value: item.value * 2 })); // Example: doubling the values

        // Send the processed data back to the main script
        self.postMessage(processedData);
    }
};
