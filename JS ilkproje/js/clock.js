let yourName = prompt("Adınız ne?")
document.querySelector("#myName").innerHTML = yourName.toUpperCase()



function showTime() {
    let date = new Date(); 
    let sa = date.getHours();
    let dk = date.getMinutes();
    let sn = date.getSeconds();
    let gün = date.getDate();
    let ay =  date.getMonth();
    let yıl = date.getFullYear();

     var günler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
     var günİsimleri = günler[date.getDay()];
    let time = sa + ":" + dk + ":" + sn + " " + gün + "/" + ay + "/" + yıl + " | " + günİsimleri;

    
    document.getElementById("myClock").innerText = time; 
    let t = setTimeout(function(){ showTime() }, 1000);
  }
  showTime();