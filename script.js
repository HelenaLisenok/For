function checkResult1() {
  let value = document.getElementById('t1').value;
  let value1 = document.getElementById('t2').value;
  let arr = [];
  
    for (let i=value;i<=value1;i++){
       let total = arr.push(i);
    }
    let out_arr = document.getElementById('out_arr');
    out_arr.innerHTML = arr;
    console.log(arr);
  }

  function checkResult2() {
    let value2 = document.getElementById('t3').value;
    let value3 = document.getElementById('t4').value;
    let arr1 = [];
         for (let j=value2;j<=value3;j=j+2){
         let total = arr1.push(j);
      }
      let out_arr1 = document.getElementById('out_arr1');
      out_arr1.innerHTML = arr1;
      console.log(arr1);
    }
  
 
  
  window.onload = function () {
  let codeBox1 = document.getElementById('code1');
  codeBox1.innerHTML = checkResult1.toString();
  let codeBox2 = document.getElementById('code2');
  codeBox2.innerHTML = checkResult2.toString();

  }
 