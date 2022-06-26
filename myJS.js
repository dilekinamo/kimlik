function isNumber(number){
    let result=false;
    for(let i=0;i<10;i++){
        if(number==i){
            return true;
        }
    }
    return result;
}

function firstNoNull(number){
    let result=false;
    for(let i=0;i<10;i++){
        if(number==i){
            return true;
        } else{
        }
    }
    return result;
}

function temizle(){
    document.getElementById("err1").style.display="none";
    document.getElementById("err2").style.display="none";
    document.getElementById("err3").style.display="none";
    document.getElementById("err4").style.display="none";
    document.getElementById("err5").style.display="none";
    document.getElementById("err6").style.display="none";
}

function kontrolEt(){
    temizle();
    let kontrol1,kontrol2,kontrol3,kontrol4,kontrol5 = false;

    let inputNumber = document.getElementById("inputID").value;
    

    // 1. kontrol - 11 karakter?
    if(inputNumber.toString().length == 11){
        kontrol1=true;
    }
        //document.getElementById("err1").style.display="none";

    // 2. kontrol - Her hane rakam?
    for(let i=0; i<inputNumber.length;i++){
        if(isNumber(inputNumber[i])==true){
            kontrol2=true;
        }else{
            kontrol2=false;
            break;
        }
    }

    // 3. kontrol - ilk hane 0 ?
    if(inputNumber[0]!=0){
        kontrol3=true;
    }

    // 4. kontrol - 10. basamak
    if(kontrol1&&kontrol2){
        let check1,check2,onuncuBasamak;
        check1=parseInt(inputNumber[0])+parseInt(inputNumber[2])+parseInt(inputNumber[4])+parseInt(inputNumber[6])+parseInt(inputNumber[8]);
        check2=parseInt(inputNumber[1])+parseInt(inputNumber[3])+parseInt(inputNumber[5])+parseInt(inputNumber[7]);
        onuncuBasamak=((check1*7)-check2)%10;
        if(onuncuBasamak==inputNumber[9]){
            kontrol4=true;
        }
    }

    // 5. kontrol - 11. basamak ?
let onToplam=0;
let onbirinciBasamak;
    if (kontrol4){
        for(let i=0;i<10;i++){
            onToplam+=parseInt(inputNumber[i]);
        }
        onbirinciBasamak=onToplam%10;
        if(onbirinciBasamak==parseInt(inputNumber[10])){
            kontrol5=true;
        }
    }

    // background color for result section
    if(kontrol1&&kontrol2&&kontrol3&&kontrol4&&kontrol5){
        //document.getElementById("resultSection").style.backgroundColor="green";
        //document.getElementById("resultSection").style(backgroundColor="green";display:);
        let onay="TC Kimlik dogru";
        document.getElementById("err6").style.display="block";
        document.getElementById("resultSection").style.display="block";
        document.getElementById("resultSection").style.backgroundColor="green";
        document.getElementById("err6").innerHTML=onay;
        console.log("son if")
    }else{
        document.getElementById("resultSection").style.backgroundColor="red";
        document.getElementById("resultSection").style.display="block";       
    }

    if(!kontrol1){
        document.getElementById("err1").style.display="block";
        document.getElementById("resultSection").innerHTML=errorText1;
    }

    if(!kontrol2){
        document.getElementById("err2").style.display="block";
         document.getElementById("resultSection").innerHTML=errorText2;
    }

     if(!kontrol3){
        document.getElementById("err3").style.display="block";
        document.getElementById("resultSection").innerHTML=errorText3;
    }
    
    if(!kontrol4){
        document.getElementById("err4").style.display="block";
        document.getElementById("resultSection").innerHTML=errorText4;
    }

    if(!kontrol5){
        document.getElementById("err5").style.display="block";
        document.getElementById("resultSection").innerHTML=errorText5;
    }

}

//document.getElementById("myElement").style.cssText = "display: block; position: absolute";