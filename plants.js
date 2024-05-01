onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 5000);

  var audio = document.getElementById("bg-music");
  audio.volume = 0.1;

  //   // Load the audio file
  //   audio.load();

  //   // Play the audio after it's loaded
  //   audio.addEventListener("canplaythrough", () => {
  //     audio.play().catch((error) => {
  //       console.error("Error playing audio:", error);
  //     });
  //   });

  //   // Handle manual page reload/refresh
  //   window.addEventListener(
  //     "online",
  //     () => {
  //       audio.play().catch((error) => {
  //         console.error("Error playing audio:", error);
  //       });
  //     },
  //     true
  //   );

  const messageDiv = document.getElementById("message");

  let message = "Smart girl. You found the secret.";
  messageDiv.textContent = message;
  setTimeout(() => {
    messageDiv.classList.add("fade-in");
  }, 500); // Fade in after 0.5 seconds

  setTimeout(function () {
    // Fade out the current message
    messageDiv.classList.remove("fade-in");
    setTimeout(() => {
      message = "Happy 22nd Birthday, Ashleigh!";
      messageDiv.textContent = message;

      messageDiv.classList.add("fade-in");
    }, 2000); // Delay to allow fade-out to complete
  }, 5000);
};
