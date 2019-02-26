
<script>
function calculateSleep () {
    var now = new Date()
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    //no var because it is already initialized-->
     dayOfMonth = 25;
     month = 11;
    if (dayOfWeek != 0 || dayOfWeek != 6 || (month == 6 && dayOfMonth ==4) ||
    (month == 0 && dayOfMonth == 1) || (month == 11 && dayOfMonth == 25)) 
    {
        message = "sleep in!";
    }
    document.getElementById("output").innerHTML = message;
}
</script>