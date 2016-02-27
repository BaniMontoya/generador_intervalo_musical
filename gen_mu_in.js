function escala_cromatica(num, num2){

var res = [];

switch(num) {
    case 0:
        res = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
        break;
    case 1:
        res = ["Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"];
        break;
    case 2:
        res = ["D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db"];
        break;
    case 3:
        res = ["Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D"];
        break;
    case 4:
        res = ["E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb"];
        break;
    case 5:
        res = ["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"];
        break;
    case 6:
        res = ["Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F"];
        break;
    case 7:
        res = ["G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb"];
        break;
    case 8:
        res = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
        break;
    case 9:
        res = ["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];
        break;
    case 10:
        res = ["Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A"];
        break;
    case 11:
        res = ["B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb"];
        break;

}
return res[num2];

} 



function que_intervalo(origen, destino, dir){
      intervalo = destino-origen;  

      var res = 0;  
if (dir =="desc"){intervalo = 12-intervalo;}

if(intervalo > 12){intervalo=intervalo-12};
if(intervalo < 0){intervalo=intervalo+12};

switch(intervalo) {
    case 0:
        res = "unisono";
        dir = "";
        break;
     case 1:
        res = "2m";
        break;
    case 2:
        res = "2";
        break;
    case 3:
        res = "3m";
        break;
    case 4:
        res = "3";
        break;
    case 5:
        res = "4";
        break;
    case 6:
        res = "5m";
        break;
    case 7:
        res = "5";
        break;
    case 8:
        res = "6m";
        break;
    case 9:
        res = "6";
        break;
    case 10:
        res = "7m";
        break;
    case 11:
        res = "7";
        break;
    case 12:
        res = "8";
        break;

}

	return res+ " "+ dir;

}

function intervalos_random(origen, destino, dir){

nota1 = escala_cromatica(origen, 0);
nota2 = escala_cromatica(destino, 0);

var intervalo = que_intervalo(origen,destino, dir);

return  i = [nota1, nota2, intervalo]
}

		function random1(){
			var ran=Math.floor((Math.random() * 11)+1);
			if (ran === undefined){ran = 0};
			return ran;

		}		

		function random2(){
			return (Math.floor(Math.random() * 9) % 2);
			return ran;

		}

		var uno = random1();
		var dos = random1();
		var dir = random2();

    if (dir == 0){dir ="desc"}else{dir = "asc"}
