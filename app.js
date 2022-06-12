var iz = 20;
var monschet = 0;
var dobav = 1;
let damage = 1;
var lvl = 1;
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 20;
var foto = document.getElementById("fotoGus");
var disp = document.getElementById("displayText");
var tebos = document.getElementById("textBoss");
var mon = document.getElementById("money");
var sh = document.getElementById("shop");


function kulackFunction() {
        sh.src = 'img/kulack.png';
        damage = 1;
        };

function bitaFunction() {
        sh.src = 'img/bita.png';
        damage = 2;
        };
function lomFunction() {
        sh.src = 'img/lom.png';
        damage = 3;
        };

function nojFunction() {
        sh.src = 'img/noj.png';
        damage = 4;
        };
function ganFunction() {
        sh.src = 'img/gan.png';
        damage = 5;
        };


foto.onclick = function () {
    count = count - damage;
    disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
    monschet = monschet + damage;
    mon.innerHTML ='Денег: ' + monschet;
    

    if(count > 0 && lvl == 1){
        iz = 20;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        lvl = arr[2];
} else if(count <= 0 && lvl == 2){
        foto.src = 'img/dub.png';
        count = 50;
        iz = 50;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 20;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[3];
} else if(count <= 0 && lvl == 3){
        foto.src = 'img/ananas.png';
        count = 100;
        iz = 100;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 30;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[4];
} else if(count <= 0 && lvl == 4){
        foto.src = 'img/burat.png';
        count = 250;
        iz = 250;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 40;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[5];
} else if(count <= 0 && lvl == 5){
        foto.src = 'img/boss.png';
        tebos.innerHTML = 'БОСС!!';
        count = 500;
        iz = 500;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;;
        monschet = monschet + 50;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[6];
} else if(count <= 0 && lvl == 6){
        disp.innerHTML = 'Здоровье 0 из 500';
        monschet = monschet + 100;
        mon.innerHTML ='Денег: ' + monschet;
        alert("ПОБЕДА!!!")

};
}

function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
    
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
}
}
};



