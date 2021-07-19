window.onload = () => {
  const name = prompt("Lütfen adınızı giriniz: ");
  const nameDisplay = document.querySelector("#myName");

  nameDisplay.textContent = name;

  const clockDisplay = document.getElementById("myClock");

  const dateInterval = setInterval(() => {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    const dayName = date.toLocaleDateString("tr-TR", { weekday: "long" });
    const time = hours + ":" + minutes + ":" + seconds + " " + dayName;

    clockDisplay.textContent = time;
  }, 1000);
};
