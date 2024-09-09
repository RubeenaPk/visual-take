  // Function to show the first message
  function showFirstMessage() {
    const message1 = document.getElementById('message1');
    message1.classList.add('show');

    // After 5 seconds, hide the first message and show the second ones
    setTimeout(() => {
      message1.classList.remove('show');
      message1.classList.add('hide');
      showSecondMessage();
      showLogin();
    }, 5000); // Wait for 5 seconds before showing the second message
  }

  // Function to show the second message
  function showSecondMessage() {
    const message2 = document.getElementById('message2');
    message2.classList.add('show');
  }

  // Start the process when the page loads
  window.onload = function() {
    setTimeout(showFirstMessage, 1000); // Show the first message after 1 second
  };

  function showLogin() {
    const loginForm = document.getElementById('form');
    loginForm.classList.add('show');
  }

  // Start the process when the page loads
  window.onload = function() {
    setTimeout(showFirstMessage, 1000); // Show the first message after 1 second
  };
