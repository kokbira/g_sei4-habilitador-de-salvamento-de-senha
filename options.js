document.addEventListener('DOMContentLoaded', function() {
  const statusLabel = document.getElementById('status');
  const toggleButton = document.getElementById('toggleButton');

  function updateUI(enabled) {
    statusLabel.innerText = enabled ? "Extensão está ativada" : "Extensão está desativada";
    toggleButton.innerText = enabled ? "Desativar Extensão" : "Ativar Extensão";
  }

  chrome.storage.sync.get(["enabled"], function(result) {
    updateUI(result.enabled);
  });

  toggleButton.addEventListener('click', function() {
    chrome.storage.sync.get(["enabled"], function(result) {
      const newValue = !result.enabled;
      chrome.storage.sync.set({ enabled: newValue }, function() {
        updateUI(newValue);
      });
    });
  });
});
