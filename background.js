chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabled: true }, function() {
    console.log("A extensão está ativada.");
  });
});
