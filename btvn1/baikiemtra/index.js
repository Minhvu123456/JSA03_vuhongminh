



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

function myFunction() {
    localStorage.setItem('name',document.getElementById('name').value);
    localStorage.setItem('age',document.getElementById('age').value);
    const isSuccess = confirm('Lưu thông tin thành công!, Quay về trang Home Page');
    if(isSuccess) {
        window.location.href = './index.html'
    }
    

}
function checkInfo() {
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')
    if(name && age) {
        alert('Name : ' + name + 'Age : ' + age)
    }else {
        alert('Khong co thong tin')
    }
}
function delInfo() {
    localStorage.clear()
    alert('Xoa thong tin thanh cong')
}
function myFunction1() {
    sessionStorage.setItem('name',document.getElementById('name').value);
    sessionStorage.setItem('age',document.getElementById('age').value);
    const isSuccess = confirm('Lưu thông tin thành công!, Quay về trang Home Page');
    if(isSuccess) {
        window.location.href = './index.html'
    }
    

}
function checkInfo1() {
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')
    if(name && age) {
        alert('Name : ' + name + 'Age : ' + age)
    }else {
        alert('Khong co thong tin')
    };
}
// sanpham = sanpham.nap(function(item)){
//     console.log('item',item);
//     return 'San pham'
// }}