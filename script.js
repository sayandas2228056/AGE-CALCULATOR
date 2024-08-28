document.getElementById("date").max = new Date().toISOString().split("T")[0];

function agecal() {
    let userinput = document.getElementById("date").value;
    if (!userinput) {
        document.getElementById("result").innerHTML = "Please select a date.";
        return;
    }

    let birthdate = new Date(userinput);
    let today = new Date();

    if (birthdate > today) {
        document.getElementById("result").innerHTML = "The selected date is in the future.";
        return;
    }

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth();
    let y1 = birthdate.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d, m, y;
    y = y2 - y1;
    m = m2 - m1;
    d = d2 - d1;

    if (d < 0) {
        m--;
        d += getDaysInMonth(m1, y1);  // Use birth month and year
    }

    if (m < 0) {
        y--;
        m += 12;
    }

    document.getElementById("result").innerHTML = `You are <span>${y}</span> years, <span>${m}</span> months, and <span>${d}</span> days old.`;

    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
}
