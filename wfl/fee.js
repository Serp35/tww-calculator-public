function fee(){
    var fees = {
        "lancaster": 588,
        "prototype": 588,
        "kukri": 784,
        "paterson": 784,
        "axegonne": 980,
        "spitfire": 1176,
        "cursed pistol": 24,
        "cursed volcanic pistol": 24,
        "frozen rifle": 17,
        "frozen bow": 17
    }
    const weaponInput = document.getElementById("weapon-input").value.toLowerCase(); 
    const weaponFee = fees[weaponInput]
    const weaponInput2 = document.getElementById("weapon-input2").value.toLowerCase(); 
    const weaponFee2 = fees[weaponInput2]
    const weaponInput3 = document.getElementById("weapon-input3").value.toLowerCase(); 
    const weaponFee3 = fees[weaponInput3]
    const weaponInput4 = document.getElementById("weapon-input4").value.toLowerCase(); 
    const weaponFee4 = fees[weaponInput4]
    const weaponInput5 = document.getElementById("weapon-input5").value.toLowerCase(); 
    const weaponFee5 = fees[weaponInput5]
    const weaponInput6 = document.getElementById("weapon-input6").value.toLowerCase(); 
    const weaponFee6 = fees[weaponInput6]

    const totalFee = (weaponFee ?? 0) + (weaponFee2 ?? 0) + (weaponFee3 ?? 0) + (weaponFee4 ?? 0) + (weaponFee5 ?? 0) + (weaponFee6 ?? 0) + 150

    document.getElementById("result").textContent = document.getElementById("result").textContent + " - " + totalFee + "$ Fee"





}


