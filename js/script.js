
        document.addEventListener("DOMContentLoaded", function() {
            // --- Modal Activation Elements & Logic ---
            const modal = document.getElementById("hotline-modal");
            const trigger = document.getElementById("hotline-trigger");
            const closeBtn = document.getElementById("close-modal");

            trigger.addEventListener("click", function(e) {
                e.preventDefault();
                modal.style.display = "flex";
            });

            closeBtn.addEventListener("click", function() {
                modal.style.display = "none";
            });

            window.addEventListener("click", function(e) {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });

            // --- Dynamic Auto-Calendar Logic Engine ---
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth(); 
            const today = now.getDate();

            const monthNames = ["January", "February", "March", "April", "May", "June", 
                                "July", "August", "September", "October", "November", "December"];
            
            document.getElementById("calendar-month-year").textContent = `${monthNames[month]} ${year}`;

            const calendarBody = document.getElementById("calendar-body");
            calendarBody.innerHTML = ""; 

            const firstDayIndex = new Date(year, month, 1).getDay();
            const totalDays = new Date(year, month + 1, 0).getDate();

            let dateCounter = 1;
            
            for (let i = 0; i < 6; i++) {
                let row = document.createElement("tr");
                let hasCells = false;

                for (let j = 0; j < 7; j++) {
                    let cell = document.createElement("td");

                    if (i === 0 && j < firstDayIndex) {
                        cell.textContent = "";
                    } else if (dateCounter > totalDays) {
                        cell.textContent = "";
                    } else {
                        cell.textContent = dateCounter;
                        
                        if (dateCounter === today) {
                            cell.classList.add("today");
                        }
                        dateCounter++;
                        hasCells = true;
                    }
                    row.appendChild(cell);
                }

                if (hasCells || i === 0) {
                    calendarBody.appendChild(row);
                }
                if (dateCounter > totalDays) break;
            }
        });
    