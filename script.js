const countdown = document.querySelector("[data-countdown]");

if (countdown) {
  const target = new Date(countdown.dataset.countdown).getTime();
  const days = countdown.querySelector("[data-days]");
  const hours = countdown.querySelector("[data-hours]");
  const minutes = countdown.querySelector("[data-minutes]");
  const seconds = countdown.querySelector("[data-seconds]");

  const pad = (value) => String(value).padStart(2, "0");

  const renderCountdown = () => {
    const remaining = Math.max(0, target - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    days.textContent = Math.floor(totalHours / 24);
    hours.textContent = pad(totalHours % 24);
    minutes.textContent = pad(totalMinutes % 60);
    seconds.textContent = pad(totalSeconds % 60);
  };

  renderCountdown();
  window.setInterval(renderCountdown, 1000);
}
