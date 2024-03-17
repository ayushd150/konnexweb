document.addEventListener('DOMContentLoaded', function() {
    const fanSpeedSelect = document.getElementById('fan-speed');
    const lightToggle = document.getElementById('light-toggle');
    const applyChangesBtn = document.getElementById('apply-changes-btn');

    applyChangesBtn.addEventListener('click', function() {
        const fanSpeed = fanSpeedSelect.value;
        const lightState = lightToggle.checked;

        // Here you would make API calls to control the fan speed and light state
        // Example:
        // makeAPICall('/api/fan', { speed: fanSpeed });
        // makeAPICall('/api/light', { state: lightState });

        // For the sake of this example, let's just log the values
        console.log('Fan Speed:', fanSpeed);
        console.log('Light State:', lightState);
    });
});
