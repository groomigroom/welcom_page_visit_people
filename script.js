var visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

document.getElementById("visit_count").textContent =
    "방문 횟수 " + visits;

//localStorag로 수정했음.