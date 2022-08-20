var minh = {
    ten: "Vu Hong Minh",
    tuoi: 15,
    tenTruong: "THPT Kim Dong",
    timeline: ['1C','2C','3C','4C','5C','6A','7A','8A','9A']
  }
  // function profile(ten,tuoi,tenTruong,timeline){
   
   
  // var result = ten + " " + tuoi + " " + tenTruong
   
  // if(tuoi >=15){
  //     result + " - " + "Du tuoi"
  // }else{
  //   result + " - " + "Chua du tuoi"
  // }
      
   
  // if(timeline.lenght >=5){
  //   result = result + " - " + "Du tuoi" + " - " + "Du truong"
  // }else{
  //   result = result + " - " + "Du tuoi" + " - " + "Chua du truong"
  // }
  
  // return result;
  // }
  // console.log(profile(minh.ten, minh.tuoi, minh.tenTruong, minh.timeline) )
  
  function formatTimeLine(timeline){
  //   var result = [];
    
  //   for (var i = 0; i < timeline.length; i++){
      
  //     var newFormat = 'Lop' + timeline[i];
      
  //     result.push(newFormat)
  //   }
  //   return result;
    function format(item){
      return 'Lop ' + item
    }
    var result = timeline.map(format)
    return result
  }
  
  console.log( formatTimeLine(minh.timeline))

  
  
  
  
  
  
  