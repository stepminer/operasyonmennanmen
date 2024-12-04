document.getElementById('languageSwitcher').addEventListener('change', function() {
  const language = this.value;
  window.location.href = `index-${language}.html`;
});
