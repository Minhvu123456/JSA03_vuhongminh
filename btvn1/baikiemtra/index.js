



setInterval(() => {
    let boDate = new Date();
    let boDay = boDate.getDate();
    let boMonth = boDate.getMonth() + 1;
    let boYear = boDate.getFullYear();
    let hour = boDate.getHours();
    let min = boDate.getMinutes();
    let second = boDate.getSeconds();

    if(document.getElementById('day')){
        document.getElementById('day').innerHTML = boDay;
    }
    if(document.getElementById('month')){
        document.getElementById('month').innerHTML = boMonth;
    }
    if(document.getElementById('year')){
        document.getElementById('year').innerHTML = boYear;
    }
    if(document.getElementById('hours')){
        document.getElementById('hours').innerHTML = hour;
    }
    if(document.getElementById('minus')){
        document.getElementById('minus').innerHTML = min;
    }
    if(document.getElementById('second')){
        document.getElementById('second').innerHTML = second;
    }

}, 1000)
    

    

