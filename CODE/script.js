var form = document.getElementById('sheetdb-form');
        var modal = document.getElementById('submissionModal');
        var closeBtn = document.querySelector('.close-btn');
        var submissionMessage = document.getElementById('submissionMessage');

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            }).then(response => response.json())
                .then(html => {
                    submissionMessage.textContent = '😊 Thank you, for Dropping a Message ! ' + document.getElementById('CName').value;
                    modal.style.display = "flex";
                });
        });

        // Close the modal when clicking the close button
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
            window.location.href = '';  // Optional: reload the page
            location.reload();
        });

        // Close the modal when clicking anywhere outside the modal content
        window.addEventListener("click", function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                window.location.href = '';  // Optional: reload the page
                location.reload();
            }
        });
