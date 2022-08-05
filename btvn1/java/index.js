// setInterval(() => {
//     const d = new Date();
//     console.log
//     document.getElementById('time').innerHTML=d.toDateString();

// }, 1000)
// // const nam="adsad";
// window.localStorage.setItem('name',nam);

// const kt = window.localStorage.getItem('name');
// window.localStorage.setItem('name','saf');
// console.log(kt);

function name() { 
    document.getElementById('name').innerHTML = "Bạn muốn khám phá"
    const name = document.getElementById('name').value;
    window.localStorage.setItem('name',hovaten)
    window.localStorage.getItem('name')
    console.log(name)
    
}

function age() {
    const age = document.getElementById('age').value;
    window.localStorage.setItem('age',tuoi)
    window.localStorage.getItem('age')
    console.log(age)
}


