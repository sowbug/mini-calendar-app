var monthNames = [ "January", "February", "March", "April",
  "May", "June", "July", "August", "September", "October",
  "November", "December" ];

function generateCalendar(today) {
  var year = today.getYear() + 1900;
  var firstDayOfMonth = new Date(year, today.getMonth(), 1);
  var lastDayOfMonth = new Date(year, today.getMonth() + 1, 0);

  var calendarElement = document.querySelector("#calendar");
  var row = document.createElement("tr");
  var dayOfWeek = firstDayOfMonth.getDay();
  for (var i = 0; i < dayOfWeek; ++i) {
    var box = document.createElement("td");
    row.appendChild(box);
  }
  for (var i = 1; i <= lastDayOfMonth.getDate(); ++i) {
    var box = document.createElement("td");
    box.innerText = i + "";
    if (i == today.getDate()) {
      box.classList.add("today");
    }
    row.appendChild(box);
    if (++dayOfWeek == 7) {
      dayOfWeek = 0;
      calendarElement.appendChild(row);
      row = document.createElement("tr");
    }
  }
  if (dayOfWeek != 0) {
    calendarElement.appendChild(row);
  }

  document.querySelector("#month").innerText = monthNames[today.getMonth()];
  document.querySelector("#year").innerText = year;
}

onload = function() {
  var today = new Date();
  generateCalendar(today);

  document.querySelector(".close").addEventListener("click",
    function() { window.close(); }
  );

  document.querySelector("#calendar").classList.remove("fosc");
};
