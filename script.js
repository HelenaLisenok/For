function checkResult1() {
  let value = document.getElementById('t1').value;
  let value1 = document.getElementById('t2').value;
  value = Number(value);
  value1 = Number(value1);
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
    value2 = Number(value2);
    value3 = Number(value3);
    let arr1 = [];
         for (let j=value2;j<=value3;j++){
         if (j%2 == 0) {
         let total = arr1.push(j);}
      }
      let out_arr1 = document.getElementById('out_arr1');
      out_arr1.innerHTML = arr1;
      console.log(arr1);
    }
  
    function checkResult3() {
      let value4 = document.getElementById('t5').value;
      let value5 = document.getElementById('t6').value;
      value4 = Number(value4);
      value5 = Number(value5);
      let arr2 = [];
           for (let j=value4;j<=value5;j++){
           if (j%2 !== 0) {
           let total1 = arr2.push(j);}
        }
        let out_arr2 = document.getElementById('out_arr2');
        out_arr2.innerHTML = arr2;
        console.log(arr2);
      }
      function checkResult4() {
        let arr3 = ['a','b','c','d','e'];
             for (let elem of arr3){
             console.log(arr3);
          }
          let out_arr3 = document.getElementById('out_arr3');
          out_arr3.innerHTML = arr3;
          
        }
        //ключи объекта
        function checkResult5() {
          let obj = {x: 1, y: 2, z: 3};
          let key;
          let key1=[];
          let elements=[];
          for (key in obj) {
            console.log(obj[key]);// выведет 1,2,3
            console.log(key); // выведет 'x', 'y', 'z'
            let total2 = key1.push(key);
            let length_of_elements = elements.push(obj[key]);
          }
              
            let out_arr4 = document.getElementById('out_arr4');
            out_arr4.innerHTML = key1;
            let out_arr5 = document.getElementById('out_arr5');
            out_arr5.innerHTML = elements;
            
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
  let codeBox5 = document.getElementById('code5');
  codeBox5.innerHTML = checkResult5.toString();
  }
 