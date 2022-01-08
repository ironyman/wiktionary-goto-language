function saveOptions(e) {
    e.preventDefault();
    var language = document.querySelector("#language").value;
    language = language[0].toUpperCase() + language.substring(1);
    chrome.storage.sync.set({
      language
    });
  }
  
  function restoreOptions() {
  
    let getting = chrome.storage.sync.get("language",     function setCurrentChoice(result) {
        document.querySelector("#language").value = result.language || "Spanish";
      });
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);
  