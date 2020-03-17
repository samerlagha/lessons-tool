//render side bar
function renderSidebar () {
  const sidebar = document.querySelector('.sidebar');
  
  for (let hour = 0; hour < 24; hour++) {
    
    const sidebarHour = document.createElement('div');
    sidebarHour.classList.add('sidebar__hour');
    
    const sidebarHourText = document.createElement('span');
    sidebarHourText.classList.add('sidebar__hour-text');

    sidebarHourText.textContent = `${(hour < 10) ? '0' + hour : hour}:00`;
       
    sidebar.append(sidebarHour);
    sidebarHour.append(sidebarHourText);
  }

  const firstHour = sidebar.firstChild;
  firstHour.classList.add('sidebar__no-display');
};

renderSidebar();

export { renderSidebar };
