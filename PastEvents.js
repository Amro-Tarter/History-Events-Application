document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date_input");
    const specificDateBtn = document.getElementById("specific_day");
    const resultDiv = document.getElementById("secondary_div");
    const clearBtn = document.getElementById("clear");

    // Regular expression to match "dd/mm" format
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;

    function isValidDate(dateStr) {
        if (!dateRegex.test(dateStr)) return false;

        const [day, month] = dateStr.split("/").map(Number);
        const dateObj = new Date(2025, month - 1, day); // Year 2025 (arbitrary, since we're not checking year)

        return dateObj.getDate() === day && dateObj.getMonth() === month - 1;
    }

    // Generate a random date
    function getRandomDate() {
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 31) + 1;
        return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}`;
    }

    // Validate input when clicking the button
    specificDateBtn.addEventListener("click", () => {
        let inputValue = dateInput.value.trim();
        if (!inputValue) {
            inputValue = getRandomDate();
            dateInput.value = inputValue; // Display the generated date in the input field
        }

        if (isValidDate(inputValue)) {
            const [dd, mm] = inputValue.split("/");
            make_request(mm, dd);
        } else {
            resultDiv.textContent = "❌ Please enter a valid date in the format dd/mm";
            resultDiv.style.color = "red";
        }
    });

    // Prevent invalid characters from being typed
    dateInput.addEventListener("input", (event) => {
        dateInput.value = dateInput.value.replace(/[^0-9/]/g, ""); // Allow only numbers and "/"
    });

    // Use current date to make a request
    const todayBtn = document.getElementById("today_in_the_past");
    todayBtn.addEventListener("click", () => {
        let mm = new Date().getMonth() + 1; // Get current month (1-12)
        let dd = new Date().getDate(); // Get current day (1-31)
        make_request(mm, dd);
    });

    function make_request(mm, dd) {
        fetch(`https://history.muffinlabs.com/date/${mm}/${dd}`)
            .then(response => response.json())
            .then(data => {
                const events = data.data.Events;
                if (events.length > 0) {
                    const randomEvent = events[Math.floor(Math.random() * events.length)];
                    resultDiv.innerHTML = `<h3> 📜 Historical Event:</h3> 📅 ${randomEvent.year}: ${randomEvent.text}`;
                } else {
                    resultDiv.innerHTML = "⚠️ No historical events found for this date.";
                }

                // If secondary_div has content, add class to enlarge main_div
                if (resultDiv.innerHTML.trim() !== "") {
                    document.getElementById("main_div").classList.add("enlarged");
                }
            })
            .catch(error => {
                resultDiv.textContent = "⚠️ Failed to fetch data. Please try again later.";
                resultDiv.style.color = "red";
                console.error("Error fetching data:", error);
            });
    }

    clearBtn.addEventListener("click", () => {
        resultDiv.textContent = '';
        dateInput.value = '';
    });
});