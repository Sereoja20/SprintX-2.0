function OnclickButton(){
    let i = 0
    let prom_2 = "SprintX2.02024";
    let prom_3 = "PUL0PKU5J3A4";
    let prom_4 = "TAYAV7QXJEBB7ID6CL31M2BZLTL4OP";
    let prom_5 = "G6ZVF53RU8RG3";
    let prom_6 = "T48V3C0UKYLYI";
    let prom_7 = "LGRG0ANI7G6N6";
    let prom_8 = "J52PT7XZAAOZKKK45XO2";
    let nom = [prom_2, prom_3, prom_4, prom_5, prom_6, prom_7, prom_8]
    while(i == 0){
        let prom = prompt("Пожалуйста введите промокод:")
        if(prom == prom_2 || prom == prom_3 || prom == prom_4 || prom == prom_5 || prom == prom_6 || prom == prom_7 || prom == prom_8){
            alert("ПРОМОКОД СРАБОТАЛ У ВАС СКИДКА В 15%")
            i++
        }else{
            alert("ПРОМОКОД НЕ СРАБОТАЛ")
        }
        if(i>0){
            let prom = prompt("Пожалуйста введите промокод:")
            if(prom == prom_2 || prom == prom_3 || prom == prom_4 || prom == prom_5 || prom == prom_6 || prom == prom_7|| prom == prom_8){
                alert("Вы уже ввели такой промокод")
            }else{
                alert("ПРОМОКОД НЕ СРАБОТАЛ")
            }
            break;
        }
        break;
    }
}
