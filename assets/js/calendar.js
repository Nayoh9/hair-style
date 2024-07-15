// const currentDateDisplayer = document.querySelector(".current-date")
// const daysDisplayer = document.querySelector(".days");
// const prevNextIcon = document.querySelectorAll(".icons i");
// const calendarInput = document.querySelector("#calendar-input");
// let comingDays;
// let activeDay;

// const currentDate = new Date();
// let currentCalendarMonth = currentDate.getMonth();
// let currentCalendarYear = currentDate.getFullYear();
// const currentIRLMonth = currentDate.getMonth();
// const currentIRLYear = currentDate.getFullYear();
// const currentIRLday = currentDate.getDate();

// const currentDay = currentDate.getDay();
// const currentDayNumber = currentDate.getDate();

// const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

// const renderCalendar = () => {

//     const lastDateOfMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
//     const lastDateOfPreviousMonth = new Date(currentCalendarYear, currentCalendarMonth, 0).getDate();

//     // Days are translated from 0 to 6, 0 being sunday 
//     const firstDayOfMonth = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();

//     // Gets all the previous days until good day matchs with good date
//     for (let i = firstDayOfMonth; i > 0; i--) {
//         daysDisplayer.innerHTML += `<li class=inactive>${lastDateOfPreviousMonth - i + 1}</li>`
//     }

//     // Displays all the dates in the calendar
//     for (let i = 1; i <= lastDateOfMonth; i++) {

//         // Checks if the calendar date is same that real life date
//         const isCurrentTime = currentIRLMonth === currentCalendarMonth && currentIRLYear === currentCalendarYear

//         if (i === currentIRLday && isCurrentTime) {
//             daysDisplayer.innerHTML += `<li class="active coming">${i}</li>`
//         }
//         else if (i < currentIRLday && isCurrentTime) {
//             daysDisplayer.innerHTML += `<li class="inactive">${i}</li>`
//         } else {
//             daysDisplayer.innerHTML += `<li class="coming">${i}</li>`
//         }
//     }

//     // Displays current month and current year
//     currentDateDisplayer.innerHTML = `${months[currentCalendarMonth]} - ${currentCalendarYear}`
// }

// prevNextIcon.forEach((icon) => {
//     icon.addEventListener("click", (e) => {

//         switch (icon.id) {
//             case "prev":
//                 const isBeforeCurrentDate = currentCalendarMonth > currentIRLMonth && currentCalendarYear === currentIRLYear || currentCalendarYear > currentIRLYear;

//                 if (isBeforeCurrentDate) {
//                     currentCalendarMonth = currentCalendarMonth - 1

//                     if (currentCalendarMonth < 0) {
//                         currentCalendarMonth = 11
//                         currentCalendarYear = new Date(currentDate.setFullYear(currentCalendarYear - 1)).getFullYear();
//                     }
//                 }
//                 break;

//             case "next":
//                 currentCalendarMonth = currentCalendarMonth + 1
//                 if (currentCalendarMonth >= months.length) {
//                     currentCalendarMonth = 0
//                     currentCalendarYear = new Date(currentDate.setFullYear(currentCalendarYear + 1)).getFullYear();
//                 }
//                 break;
//         }

//         daysDisplayer.innerHTML = ""
//         renderCalendar();

//     })
// })

// renderCalendar();
