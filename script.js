const icon = document.getElementById("revealIcon");
const cover = document.getElementById("blackCover");
const violetPage = document.querySelector(".violet-page");
const audio = document.getElementById("backgroundMusic");
const mainText = document.getElementById("mainText");

function showPoeticLines(lines) {
  mainText.innerHTML = "";
  lines.forEach((line, index) => {
    const p = document.createElement("p");
    p.className = "fade-line";
    p.textContent = line;
    mainText.appendChild(p);
    setTimeout(() => {
      p.classList.add("visible");
    }, index * 700);
  });
}

icon.addEventListener("click", () => {
  cover.classList.add("slide-diagonal");

  audio.play().catch((err) => console.error("Audio error:", err));

  setTimeout(() => {
    mainText.textContent = "May 13✨";
  }, 10000);

  setTimeout(() => {
    violetPage.classList.add("animate-color");
  }, 10500);

  setTimeout(() => {
    showPoeticLines(["Main", "gehra", "tamas🌑", "tu sunehra", "savera🌅"]);
  }, 17000);

  setTimeout(() => {
    mainText.textContent = "May 13✨";
  }, 22000);

  setTimeout(() => {
    showPoeticLines(["Musafir main", "bhatka", "tu mera", "baseraa"]);
  }, 26000);

  setTimeout(() => {
    mainText.textContent = "May 13✨";
  }, 30000);

  setTimeout(() => {
    showPoeticLines(["Tu jugnu", "chamkta🌟", "main jungle", "ghanera🌳"]);
  }, 34000);

  setTimeout(() => {
    mainText.textContent = "May 13✨";
  }, 38000);

  setTimeout(() => {
    mainText.textContent = "O piya🩷";
  }, 41000);

  setTimeout(() => {
    mainText.textContent = "May 13✨";
  }, 42000);
});
