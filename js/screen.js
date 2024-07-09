function resizeWindow() {
    const newWidth = window.screen.availWidth / 2; // Half of the available screen width
    const newHeight = window.screen.availHeight / 2; // Half of the available screen height
  
    window.resizeTo(newWidth, newHeight);
  }
  
  // Call the function to resize the window
  resizeWindow();

