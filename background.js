chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: "WaterWorld2",
    state: "fullscreen"
  });

  chrome.app.window.current().fullscreen();
  chrome.app.window.current().isFullscreen();
});
