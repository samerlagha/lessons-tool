//render side bar
function renderSidebar() {
  var sidebar = document.querySelector('.sidebar');

  for (var hour = 0; hour < 24; hour++) {
    var sidebarHour = document.createElement('div');
    sidebarHour.classList.add('sidebar__hour');
    var sidebarHourText = document.createElement('span');
    sidebarHourText.classList.add('sidebar__hour-text');
    sidebarHourText.textContent = "".concat(hour < 10 ? '0' + hour : hour, ":00");
    sidebar.append(sidebarHour);
    sidebarHour.append(sidebarHourText);
  }

  var firstHour = sidebar.firstChild;
  firstHour.classList.add('sidebar__no-display');
}

;
renderSidebar();
export { renderSidebar };