function calculateValue() {
    var aprox = {
	    "80000": 60,
        "60000": 60,
        "50000": 62,
        "40000": 65,
        "30000": 75,
        "20000": 80,
        "15000": 82,
        "10000": 85,
        "9000": 95,
        "8000": 100,
        "7000": 105,
        "6000": 110,
        "5000": 115,
        "4000": 125,
        "3000": 140,
        "2000": 150,
        "1000": 210,
        "900": 230
    }
    var aproxaxe = {
        "8000": 140,
        "7000": 140,
        "6000": 143,
        "5000": 155,
        "4000": 168,
        "3000": 180,
        "2000": 200,
        "1000": 240,
        "900": 260
    }
    var aproxspit = {
        "6000": 5500,
        "5000": 5800,
        "4000": 6000,
        "3000": 6200,
        "2000": 6500,
        "1000": 6900,
        "900": 7200 
    }
    var aproxpat = {
 	    "30000": 500,
        "27000": 500,
        "22000": 510,
        "20000": 515,
        "17000": 525,
        "13000": 530,
        "10000": 540,
        "9000": 560,
        "8000": 570,
        "7000": 580,
        "6000": 590,
        "5000": 610,
        "4000": 630,
        "3000": 670,
        "2000": 740,
        "1000": 865,
        "900": 950,
        "800": 1000 
 
    }
    let weaponValues = {
        "spitfire": 5500,
        "spit":5500,
        "paterson": 500,
        "pat": 500,
        "prototype": 60,
        "proto": 60,
        "lancaster": 60,
        "lan": 60,
        "kukri": 60,
        "axegonne": 140,
        "guycot carbine": 15,
        "guycot pistol": 8,
        "cursed volcanic pistol": 60,
        "cursed lantern": 12,
        "occult lantern": 35,
        "occult mule shotgun": 5,
        "occult sawed off": 3,
        "ceremonial dagger": 8,
        "frozen volcanic rifle": 35,
        "frozen rifle": 35,
        "frozen horn bow": 30,
        "frozen bow": 30,
        "frozen axe": 30,
        "ancient relic": 35,
        "candy cane": 0.5,
        "stolen present": 10,
        "christmas cookies": 1.2,
        "ticket to santa's workshop": 1,
	    "guitar": 10,
	    "accordion": 8,
	    "fiddle": 8,
    	"trumpet": 6,
	    "flute": 4,
    	"harmonica": 2,
    	"drum": 1.5
    }
    
    let resultado, resultado2, resultado3, resultado4, resultado5, resultado6;

    const weaponInput = document.getElementById("weapon-input").value.toLowerCase();
    const numberInput = document.getElementById("number-input").value;
    const weaponValue = weaponValues[weaponInput];

    if (numberInput === undefined || numberInput === null || numberInput === "") {
        resultado = weaponValue;
    } else if (weaponInput == "lancaster" || weaponInput == "kukri" || weaponInput == "prototype" || weaponInput == "proto" || weaponInput == "lan") {
        for (var key in aprox) {
            if (parseInt(numberInput) < parseInt(key)) {
                resultado = aprox[key];
                break;
            }
        }
    } else if (weaponInput == "axegonne") {
        for (var key in aproxaxe) {
            if (parseInt(numberInput) < parseInt(key)) {
                resultado = aproxaxe[key];
                break;
            }
        }
    } else if (weaponInput == "spitfire" || weaponInput == "spit") {
        for (var key in aproxspit) {
            if (parseInt(numberInput) < parseInt(key)) {
                resultado = aproxspit[key];
                break;
            }
        }
    } else if (weaponInput == "paterson" || weaponInput == "pat") {
        for (var key in aproxpat) {
            if (parseInt(numberInput) < parseInt(key)) {
                resultado = aproxpat[key];
                break;
            }
        }
    } else {
        resultado = (weaponValue ?? 0);
    }

    const weaponInput2 = document.getElementById("weapon-input2").value.toLowerCase();
    const numberInput2 = document.getElementById("number-input2").value;
    const weaponValue2 = weaponValues[weaponInput2];

    if (numberInput2 === undefined || numberInput2 === null || numberInput2 === "") {
        resultado2 = weaponValue2;
    } else if (weaponInput2 == "lancaster" || weaponInput2 == "kukri" || weaponInput2 == "prototype" || weaponInput2 == "proto" || weaponInput2 == "lan") {
        for (var key in aprox) {
            if (parseInt(numberInput2) < parseInt(key)) {
                resultado2 = aprox[key];
                break;
            }
        }
    } else if (weaponInput2 == "axegonne") {
        for (var key in aproxaxe) {
            if (parseInt(numberInput2) < parseInt(key)) {
                resultado2 = aproxaxe[key];
                break;
            }
        }
    } else if (weaponInput2 == "spitfire" || weaponInput2 == "spit") {
        for (var key in aproxspit) {
            if (parseInt(numberInput2) < parseInt(key)) {
                resultado2 = aproxspit[key];
                break;
            }
        }
    } else if (weaponInput2 == "paterson" || weaponInput2 == "pat") {
        for (var key in aproxpat) {
            if (parseInt(numberInput2) < parseInt(key)) {
                resultado2 = aproxpat[key];
                break;
            }
        }
    } else {
        resultado2 = (weaponValue2 ?? 0);
    }

    const weaponInput3 = document.getElementById("weapon-input3").value.toLowerCase();
    const numberInput3 = document.getElementById("number-input3").value;
    const weaponValue3 = weaponValues[weaponInput3];

    if (numberInput3 === undefined || numberInput3 === null || numberInput3 === "") {
        resultado3 = weaponValue3;
    } else if (weaponInput3 == "lancaster" || weaponInput3 == "kukri" || weaponInput3 == "prototype" || weaponInput3 == "proto" || weaponInput3 == "lan") {
        for (var key in aprox) {
            if (parseInt(numberInput3) < parseInt(key)) {
                resultado3 = aprox[key];
                break;
            }
        }
    } else if (weaponInput3 == "axegonne") {
        for (var key in aproxaxe) {
            if (parseInt(numberInput3) < parseInt(key)) {
                resultado3 = aproxaxe[key];
                break;
            }
        }
    } else if (weaponInput3 == "spitfire" || weaponInput3 == "spit") {
        for (var key in aproxspit) {
            if (parseInt(numberInput3) < parseInt(key)) {
                resultado3 = aproxspit[key];
                break;
            }
        }
    } else if (weaponInput3 == "paterson" || weaponInput3 == "pat") {
        for (var key in aproxpat) {
            if (parseInt(numberInput3) < parseInt(key)) {
                resultado3 = aproxpat[key];
                break;
            }
        }
    } else {
        resultado3 = (weaponValue3 ?? 0);
    }

    const weaponInput4 = document.getElementById("weapon-input4").value.toLowerCase();
    const numberInput4 = document.getElementById("number-input4").value;
    const weaponValue4 = weaponValues[weaponInput4];

    if (numberInput4 === undefined || numberInput4 === null || numberInput4 === "") {
        resultado4 = weaponValue4;
    } else if (weaponInput4 == "lancaster" || weaponInput4 == "kukri" || weaponInput4 == "prototype" || weaponInput4 == "proto" || weaponInput4 == "lan") {
        for (var key in aprox) {
            if (parseInt(numberInput4) < parseInt(key)) {
                resultado4 = aprox[key];
                break;
            }
        }
    } else if (weaponInput4 == "axegonne") {
        for (var key in aproxaxe) {
            if (parseInt(numberInput4) < parseInt(key)) {
                resultado4 = aproxaxe[key];
                break;
            }
        }
    } else if (weaponInput4 == "spitfire" || weaponInput4 == "spit") {
        for (var key in aproxspit) {
            if (parseInt(numberInput4) < parseInt(key)) {
                resultado4 = aproxspit[key];
                break;
            }
        }
    } else if (weaponInput4 == "paterson" || weaponInput4 == "pat") {
        for (var key in aproxpat) {
            if (parseInt(numberInput4) < parseInt(key)) {
                resultado4 = aproxpat[key];
                break;
            }
        }
    } else {
        resultado4 = (weaponValue4 ?? 0);
    }

    const weaponInput5 = document.getElementById("weapon-input5").value.toLowerCase();
    const numberInput5 = document.getElementById("number-input5").value;
    const weaponValue5 = weaponValues[weaponInput5];

    if (numberInput5 === undefined || numberInput5 === null || numberInput5 === "") {
        resultado5 = weaponValue5;
    } else if (weaponInput5 == "lancaster" || weaponInput5 == "kukri" || weaponInput5 == "prototype" || weaponInput5 == "proto" || weaponInput5 == "lan") {
        for (var key in aprox) {
            if (parseInt(numberInput5) < parseInt(key)) {
                resultado5 = aprox[key];
                break;
            }
        }
    } else if (weaponInput5 == "axegonne") {
        for (var key in aproxaxe) {
            if (parseInt(numberInput5) < parseInt(key)) {
                resultado5 = aproxaxe[key];
                break;
            }
        }
    } else if (weaponInput5 == "spitfire" || weaponInput5 == "spit") {
        for (var key in aproxspit) {
            if (parseInt(numberInput5) < parseInt(key)) {
                resultado5 = aproxspit[key];
                break;
            }
        }
    } else if (weaponInput5 == "paterson" || weaponInput5 == "pat") {
        for (var key in aproxpat) {
            if (parseInt(numberInput5) < parseInt(key)) {
                resultado5 = aproxpat[key];
                break;
            }
        }
    } else {
        resultado5 = (weaponValue5 ?? 0);
    }

    const weaponInput6 = document.getElementById("weapon-input6").value.toLowerCase();
    const numberInput6 = document.getElementById("number-input6").value;
    const weaponValue6 = weaponValues[weaponInput6];

    if (numberInput6 === undefined || numberInput6 === null || numberInput6 === "") {
        resultado6 = weaponValue6;
    } else if (weaponInput6 == "lancaster" || weaponInput6 == "kukri" || weaponInput6 == "prototype" || weaponInput6 == "proto" || weaponInput6 == "lan") {
        for (var key in aprox) {
            if (parseInt(numberInput6) < parseInt(key)) {
                resultado6 = aprox[key];
                break;
            }
        }
    } else if (weaponInput6 == "axegonne") {
        for (var key in aproxaxe) {
            if (parseInt(numberInput6) < parseInt(key)) {
                resultado6 = aproxaxe[key];
                break;
            }
        }
    } else if (weaponInput6 == "spitfire" || weaponInput6 == "spit") {
        for (var key in aproxspit) {
            if (parseInt(numberInput6) < parseInt(key)) {
                resultado6 = aproxspit[key];
                break;
            }
        }
    } else if (weaponInput6 == "paterson" || weaponInput6 == "pat") {
        for (var key in aproxpat) {
            if (parseInt(numberInput6) < parseInt(key)) {
                resultado6 = aproxpat[key];
                break;
            }
        }
    } else {
        resultado6 = (weaponValue6 ?? 0);
    }

    const result = (resultado ?? 0) + (resultado2 ?? 0) + (resultado3 ?? 0) + (resultado4 ?? 0) + (resultado5 ?? 0) + (resultado6 ?? 0);
if (
    (numberInput > 800 || numberInput == "") &&
    (numberInput2 > 800 || numberInput2 == "") &&
    (numberInput3 > 800 || numberInput3 == "") &&
    (numberInput4 > 800 || numberInput4 == "") &&
    (numberInput5 > 800 || numberInput5 == "") &&
    (numberInput6 > 800 || numberInput6 == "")
) {
    document.getElementById("result").textContent = `${result}` + "k Value";
    } else {
        document.getElementById("result").textContent = "This calculator only supports serials above 800."
    }
}
