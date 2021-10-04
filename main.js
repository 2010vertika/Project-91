function addUser() {
    player1_name = document.getElementById("player_1").value;
    player2_name = document.getElementById("player_2").value;

    localStorage.setItem("player_1name",player1_name);
    localStorage.setItem("player_2name",player2_name);

   window.location="quiz_page.html";
}