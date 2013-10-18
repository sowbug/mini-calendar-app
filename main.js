chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    bounds: {
      width: 360,
      height: 340
    },
    frame: 'none',
    maxWidth: 360,
    minWidth: 360,
    minHeight: 360,
    maxHeight: 360,
  });
});
