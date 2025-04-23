document.getElementById("completed")
    .addEventListener("click", function (event) {
        event.preventDefault();
        alert("board updated successfully");
        const taskNum = document.getElementById("task").innerText;
        const taskNum2 = parseInt(taskNum);
        const displayNum = taskNum2 - 1;
        document.getElementById("task").innerText = displayNum;

        const nav1 = document.getElementById("checkNum").innerText;
        const nav2 = parseInt(nav1);
        const displayNav = nav2 + 1;
        document.getElementById("checkNum").innerText = displayNav;

        // const side = document.getElementById("update").innerText;
        const d = Date();
        const cardHead = document.getElementById("cardInfo").innerText;
        document.getElementById("update").innerText = "You have completed the task " + cardHead + " on " + d;
        document.getElementById("completed").style.display = "none";
        document.getElementById("new").style.display = "block";
    })

document.getElementById("new").style.display = "none";