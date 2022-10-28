function checkResult1() {
  let value = document.getElementById('t1').value;
  let value1 = document.getElementById('t2').value;

    for (let i=value;i<=value1;i++){
      let resElement = document.getElementById('r1');
      resElement.innerText = i;
        //let resElement = document.write(i);
        //document.write("<br \/>");
        console.log(i);
            }

  }
  
  function checkResult2()//четные
  {
    let value2 = document.getElementById('t1').value;
    let value3 = document.getElementById('t2').value;
    //if (value2%2==0) {
      for (let i=value2;i<=value3;i+2){
        let resElement = document.getElementById('r2');
        resElement.innerText = i;
          //let resElement = document.write(i);
          //let resElement = document.getElementById('r2');
          //resElement.innerText ='да';
          //document.write("<br \/>");
          console.log(i);
              } 
           // }
      //else {
       // for (let i=value2+1;i<=value3;i+2){
        //  let resElement = document.write(i);
        //  document.write("<br \/>");
        //  console.log(i);
        //      } 

      }
  
      function checkResult4() {
        let value4 = document.getElementById('t1').value;
        let value5 = document.getElementById('t2').value;
      
          for (let i=value5;i>=value4;i--){
            //let resElement = document.getElementById('r1');
            //resElement.innerText = i;
              //let resElement = document.write(i);
              //document.write("<br \/>");
              console.log(i);
                  }
  
  /*{
    /*let value = document.getElementById('t2').value;
    let resElement = document.getElementById('r2');
  
    if (value[0] === 'a' || value[0] === 'а') {
      resElement.innerText = 'Да'
    } else {
      resElement.innerText = 'Нет'
    }*/
  
  
  function checkResult3() {
    let value = document.getElementById('t3').value;
    let resElement = document.getElementById('r3');
  
    let valueStr = String(value);
    if (valueStr.length === 3) {
      resElement.innerText = +valueStr[0] + +valueStr[1] + +valueStr[2];
    } else {
      resElement.innerText = 'Нужно ввести 3 цифры'
    }
  
  }
  
  window.onload = function () {
  let codeBox1 = document.getElementById('code1');
  codeBox1.innerHTML = checkResult1.toString();
  
  let codeBox2 = document.getElementById('code2');
   codeBox2.innerHTML = checkResult2.toString();
  
  let codeBox3 = document.getElementById('code3');
  codeBox3.innerHTML = checkResult3.toString();

  let codeBox4 = document.getElementById('code4');
  codeBox4.innerHTML = checkResult4.toString();
  }
