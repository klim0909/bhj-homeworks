const tooltipLinks = document.querySelectorAll('.has-tooltip');

tooltipLinks.forEach(link => {

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';

  const text = link.getAttribute('title');

  tooltip.textContent = text;

  link.addEventListener('click', event => {

    event.preventDefault();

    if (tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
      tooltip.remove();
    } else {
      
      // Получаем координаты элемента
      const linkCoords = link.getBoundingClientRect();
      
      // Устанавливаем координаты подсказки
      tooltip.style.left = linkCoords.left + "px";
      tooltip.style.top = linkCoords.bottom + "px";
      
      tooltip.classList.add('tooltip_active');
      
      document.body.append(tooltip);
    }

  });

});