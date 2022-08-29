const data = [
    {
        price: 200,
        name: 'Bản ủi',
        address: 'Tôn Thất Tùng, TPHCM'
    },
    {
        price: 3000,
        name: 'Máy giặt',
        address: 'Hai Bà Trưng, Quận Phú Nhuận, TPHCM'
    },
    {
        price: 600,
        name: 'Bàn làm việc',
        address: 'Nam Kỳ Khởi Nghĩa, Quận 3, TPHCM'
    },
    {
        price: 1000,
        name: 'Ghế làm việc',
        address: 'Đống đa, Quận 3, Hà Nội'
    },
    {
        price: 25000,
        name: 'Máy tính',
        address: 'Cái bè, Huyện Cái Bè, Hà Nội'
    },
    {
        price: 9000,
        name: 'Màn hình tivi',
        address: 'Châu Đốc, Kiên Giang'
    },
    {
        price: 30000,
        name: 'Iphone 13',
        address: 'American'
    },
    {
        price: 28000,
        name: 'Samsum s22',
        address: 'Korea'


    }, ]






const newItem = data.find(
    function oo(item){
        if(item.price == 30000) return true;
        return false
    }
)
console.log(newItem)

// data.map(
//     function aa(item){
//         console.log(item.name, item.price, item.address)
//     }
// )
// const newData = data.filter(
//     function bb(item){
//         if(item.price >= 25000) return true;
//         return false
//     }
// )

// const item = data.find(
//     function cd(item){
//         if(item.price == 200) return true;
//         return false
//     }
// )
// console.log('item')


// function sanpham(name,price,address) {
//     console.log( "San pham" + name +  "Gia" + price + "Dia chi giao hang" + address )
    
// }



