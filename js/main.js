
// typing
const text = "Mahamadou Cissé"; // Teks yang akan dianimasikan
let index = 0;
let isDeleting = false;
const speed = 100; // Kecepatan mengetik
const delayBeforeDeleting = 3000; // Waktu jeda sebelum menghapus
const delayBeforeTypingAgain = 500; // Waktu jeda sebelum mengetik ulang

function typeText() {
  const typingTextElement = document.getElementById("typing-text");

  if (isDeleting) {
    typingTextElement.innerHTML = text.substring(0, index);
    index--;
    if (index < 0) {
      isDeleting = false;
      setTimeout(typeText, delayBeforeTypingAgain);
    } else {
      setTimeout(typeText, speed / 2); // Lebih cepat saat menghapus
    }
  } else {
    typingTextElement.innerHTML = text.substring(0, index);
    index++;
    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeText, delayBeforeDeleting); // Jeda sebelum mulai menghapus
    } else {
      setTimeout(typeText, speed); // Kecepatan mengetik
    }
  }
}

window.onload = function () {
  setTimeout(typeText, delayBeforeTypingAgain); // Mulai mengetik setelah jeda
};