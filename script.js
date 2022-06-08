function RomanNumeralReduction(str) { 

    let Arr1=str.split('');
    
    let total1=0;
    let counter=0;
    
    for (i=0; i<str.length; i++ ){
    
      switch(Arr1[i]){
        case "I":
        total1= total1 + 1;
        break;
    
        case "V":
        total1= total1 + 5;
        break;
    
        case "X":
        total1= total1 + 10;
        break;
    
        case "L":
        total1= total1 + 50;
        break;
    
        case "C":
        total1= total1 + 100;
        break;
    
        case "D":
        total1= total1 + 500;
        break;
    
        case "M":
        total1= total1 + 1000;
        break;
      }
    }
    
    
    let finalArray=[];
    
      if (total1>=1000){
    
    let counter1=Math.floor(total1/1000);
      total1 = total1%1000;
    
      for(let k=0; k<counter1; k++){
    
        finalArray.push("M");
      }
      }
    
       if (total1>=500){
    
    let counter1=Math.floor(total1/500);
      total1 = total1%500;
    
      for(let k=0; k<counter1; k++){
    
        finalArray.push("D");
      }
      }
    
        if (total1>=100){
    
    let counter1=Math.floor(total1/100);
      total1 = total1%100;
    
      for(let k=0; k<counter1; k++){
    
        finalArray.push("C");
      }
      }
        if (total1>=50){
    
    let counter1=Math.floor(total1/50);
      total1 = total1%50;
    
      for(let k=0; k<counter1; k++){
    
        finalArray.push("L");
      }
      }
    
        if (total1>=10){
    
    let counter1=Math.floor(total1/10);
      total1 = total1%10;
    
      for(let k=0; k<counter1; k++){
    
        finalArray.push("X");
      }
      }
    
        if (total1>=5){
    
    let counter1=Math.floor(total1/5);
      total1 = total1%5;
    
      for(let k=0; k<counter1; k++){
    
        finalArray.push("V");
      }
      }
    
        if (total1>=1){
    
    let counter1=Math.floor(total1/1);
      total1 = total1%1;
    
      for(let k=0; k<counter1; k++){
    
        finalArray.push("I");
      }
      }
    
    
    
      
    let result=finalArray.join('');
    
    
    
      
    
    
    
      // code goes here  
      return result; 
    
    }
       
    // keep this function call here 
    console.log(RomanNumeralReduction(readline()));