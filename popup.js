document.getElementById('getTitleButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      document.getElementById('title').innerHTML = tab.title;
    });
  });
  