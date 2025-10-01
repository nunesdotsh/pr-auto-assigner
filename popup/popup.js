const enabledSwitch = document.getElementById('enabledSwitch');
const statusElement = document.getElementById('status');

function updateInterface(enabled) {
    enabledSwitch.checked = enabled;
    statusElement.textContent = `Status: ${enabled ? 'Ativado' : 'Desativado'}`;
    statusElement.className = enabled ? 'status-enabled' : 'status-disabled';
}

chrome.storage.sync.get('enabled', (data) => {
    const isEnabled = data.enabled ?? true;
    updateInterface(isEnabled);
});

enabledSwitch.addEventListener('change', (e) => {
    const enabled = e.target.checked;

    chrome.storage.sync.set({ enabled: enabled }, () => {
        updateInterface(enabled);

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    type: 'toggleState',
                    enabled: enabled
                });
            }
        });
    });
});