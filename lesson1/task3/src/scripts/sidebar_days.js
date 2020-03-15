const sidebarDaysBlock = document.querySelector('.main__sidebar_days');


const generateHoursPlace = () => {
    let tempArrOfDays = [];
    for(let i = 0; i < 24; i++){
        let tempStr = `
            <div class="main__sidebar_days_hours" data-hour-number="${i}"></div>
        `;
        tempArrOfDays.push(tempStr);
    }
    return tempArrOfDays.join('');
};


export const generateDaysPlace = () => {
    let tempArrOfDays = [];
    let tempArrOfHours = generateHoursPlace();
    for(let i = 0; i < 7; i++){
        let tempStr = `
        <div class="main__sidebar_days_line" data-day-number="${i}">
            ${tempArrOfHours}
        </div>
        `;
        tempArrOfDays.push(tempStr);
    }
    const stringOfHTML = tempArrOfDays.join('');
    sidebarDaysBlock.innerHTML = stringOfHTML;
};
generateDaysPlace();