(function(){
  const btn = document.getElementById('tiktokLogin');
  const status = document.getElementById('status');

  btn.addEventListener('click', async () => {
    status.textContent = "Requesting TikTok login URL...";
    try {
      const resp = await fetch(SERVER_BASE + "/auth/tiktok");
      const data = await resp.json();
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      status.textContent = "Failed to get auth URL.";
    }
  });
})();
