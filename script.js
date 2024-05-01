onload = () => {
  var audio = document.getElementById("bg-music");

  // Set the volume (between 0 and 1)
  audio.volume = 0.1;
};

var heart = String.fromCodePoint(0x2764);
var speak = String.fromCodePoint(0x1f5e3);
var laugh = String.fromCodePoint(0x1f602);
var smile = String.fromCodePoint(0x1f601);
var eye = String.fromCodePoint(0x1f441);
var mouth = String.fromCodePoint(0xe41c);
var blush = String.fromCodePoint(0x1f92d);

document.addEventListener("DOMContentLoaded", function () {
  var messages = [
    "I long for your smile, brighter than a thousand suns.",
    "Laughter echoes whenever we're together, pure bliss.",
    "Only you can make my heart flutter like a butterfly's wings.",
    "Vivacious and radiant, you light up every room.",
    "Even on the gloomiest days, your presence warms my soul.",
    "Your embrace is a sanctuary where worries cease to exist.",
    "Outrageously funny, you keep me in stitches.",
    "Undeniably, you're the crocodilian to my caecilian.",
    "Adorably quirky, you never fail to surprise me.",
    "Soft and gentle, your touch is a soothing balm.",
    "Holding you close, I feel like the luckiest person alive.",
    "Laughter and love, that's what our bond is made of.",
    "Eternally grateful, I cherish every moment with you.",
    "Incredibly kind, your heart overflows with compassion.",
    "Genuinely amazing, you're one in a million, Ashleigh.",
    "Having you in my life is the greatest gift of all.",
    "↤✿✧❀↦",
    "Hey Ash",
    "Happy 22nd Birthday " + heart,
    "I hope you have a day thats as amazing as you are",
    "I know you're going to be busy today",
    "But I do hope that you celebrate yourself",
    "Because you deserve it",
    "Truly",
    "You are incredible",
    "I love everything about you",
    "Your voice " + speak,
    "Your laugh " + laugh,
    "Your smile " + smile,
    "Your eyes " + eye + "" + mouth + "" + eye,
    "Even if I have to stare at them through those magnifying glasses of yours",
    "You're beautiful",
    "All of you",
    "You are so much fun to be around",
    "I know that",
    "Your friends know that",
    "I hope you know it too",
    "",
    "Happy Birthday " + heart,
    "PS. Maybe go look at the first letter of all the messages in the first part " +
      blush,
  ];
  var messageIndex = 0;
  var messageElement = document.getElementById("message");

  function fadeInMessage() {
    messageElement.textContent = messages[messageIndex];
    messageElement.style.display = "block";
    messageElement.style.opacity = 0;
    var fadeInInterval = setInterval(function () {
      if (messageElement.style.opacity < 1) {
        messageElement.style.opacity =
          parseFloat(messageElement.style.opacity) + 0.05;
      } else {
        clearInterval(fadeInInterval);
        setTimeout(fadeOutMessage, 5000); // Wait for 2 seconds before fading out
      }
    }, 50);
  }

  function fadeOutMessage() {
    var fadeOutInterval = setInterval(function () {
      if (messageElement.style.opacity > 0) {
        messageElement.style.opacity =
          parseFloat(messageElement.style.opacity) - 0.05;
      } else {
        clearInterval(fadeOutInterval);
        messageElement.style.display = "none";
        messageIndex++; // Move to the next message
        if (messageIndex < messages.length) {
          setTimeout(fadeInMessage, 1000); // Wait for 1 second before fading in the next message
        }
      }
    }, 50);
  }

  fadeInMessage(); // Start the animation
});
