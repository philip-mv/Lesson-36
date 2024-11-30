function showdate() {
    const now = new Date();

    // Get day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];

    // Get day, month, and year
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    // Format the date string
    const formattedDate = `${dayOfWeek}, ${day}/${month}/${year}`;

    // Display the formatted date in the HTML element
    document.getElementById("MyDayTracker").textContent = formattedDate;
}

showdate();