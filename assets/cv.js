document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
  });
  
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('.column-1').classList.add('dark');
        document.querySelector('.column-2').classList.add('dark');
        document.querySelector('.gallery').classList.add('dark');
        document.querySelector('.themetoggle span').textContent = 'dark_mode';
      }
      else {
        document.querySelector('.column-1').classList.remove('dark');
        document.querySelector('.column-2').classList.remove('dark');
        document.querySelector('.gallery').classList.remove('dark');
        document.querySelector('.themetoggle span').textContent = 'wb_sunny';
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();