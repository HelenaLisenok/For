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
          function checkResult6() {
            let value6 = document.getElementById('t7').value;
            let value7 = document.getElementById('t8').value;
            value6 = Number(value6);
            value7 = Number(value7);
            let arr4 = [];
            let i1=value6;
            while (i1<=value7){
            let total3 = arr4.push(i1);
            i1++;
            }
            let out_arr6 = document.getElementById('out_arr6');
            out_arr6.innerHTML = arr4;
            console.log(arr4);
  }

            function checkResult7() {
            let value8 = document.getElementById('t9').value;
            value8 = Number(value8);
            let mult = value8;
            let iter_ammount = 0;
            while (mult < 1000) { 
            mult = mult*3;
            iter_ammount = iter_ammount+1;
        }
          console.log(mult);
          console.log(iter_ammount);
} 
         
        function checkResult8() {
        let char_arr = ['a', 'b', 'c', 'd', 'e'];
        for (let i2 = 0; i2 <= char_arr.length - 1; i2++) {
          console.log(char_arr[i2]);
          }
        }
        function checkResult9() {
          let char_arr1 = ['a', 'b', 'c', 'd', 'e'];
          for (let i3 = char_arr1.length - 1; i3 > 0; i3--) {
            console.log(char_arr1[i3]);
            }
          } 
          function checkResult10() {
            let char_arr2 = ['a', 'b', 'c', 'd', 'e'];
            for (let i4 = 1; i4 <= char_arr2.length - 2; i4++) {
              console.log(char_arr2[i4]);
              }
            } 
            function checkResult11() {
               let char_arr3 = ['a', 'b', 'c', 'd', 'e'];
               for (let i5 = 0; i5 >= char_arr3.length-1; i5++) {
                console.log(char_arr3[i5]);
              }
              } 
              function checkResult12() {
                let char_arr4 = [2, 5, 9, 15, 1, 4];
                for (let elem1 of char_arr4) {
                  if (elem1>3 && elem1<10)
                 console.log(elem1);
               }
               } 
               function checkResult13() {
                let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
                 for (var elem2 in obj1) {
                  if (obj1[elem2] % 2 !== 0)
                 console.log(obj1[elem2]);
               }
               } 
               function checkResult14() {
                let sum = 0;
                for (let i = 2; i <= 100; i++) {
                  if (i%2 ==0)
                  sum = sum + i;
                  }
                  console.log(sum);
                } 
                function checkResult15() {
                  let sum = 0;
                  for (let i = 1; i <= 99; i++) {
                    if (i%2 !==0)
                    sum = sum + i;
                    }
                    console.log(sum);
                  } 
                  function checkResult16() {
                    let mult = 1;
                    for (let i = 1; i <= 20; i++) {
                      mult = mult*i;
                      }
                      console.log(mult);
                    } 
                    function checkResult17() {
                      let sum1 = 0;
                      let arr5 = [2, 5, 9, 3, 1, 4];
                      for (let elem3 of arr5) {
                        sum1 += elem3;
                      }
                      
                      console.log(sum1); // искомая сумма
                      } 
                    function checkResult18() {
                      let sum2 = 0;
                      let arr6 = [2, 5, 9, 3, 1, 4];
                      for (let elem4 of arr6) {
                        if (elem4%2 == 0)
                        sum2 += elem4;
                      }
                      console.log(sum2); // искомая сумма
                        } 

                  function checkResult19() {
                    let sum3 = 0;
                    let arr7 = [2, 5, 9, 3, 1, 4];
                    for (let elem5 of arr7) {
                        sum3 += elem5*elem5;
                       }
                    console.log(sum3); 
                        } 
                  function checkResult20() {
                      let mult1 = 1;
                      let arr8 = [2, 5, 9, 3, 1, 4];
                      for (let elem6 of arr8) {
                      mult1 = mult1*elem6;
                            }
                      console.log(mult1); 
                              } 
                  function checkResult21() {
                    let str = '';
                    for (let i = 1; i <= 5; i++) {
                      str += '-';
                    }
                    console.log(str);
                    
                        }       
                function checkResult22() {
                  let arr9 = [];

                  for (let i = 0; i <= 10; i=i+2) {
                    arr9[i] = '-';
                    i1 = String(i);
                    arr9.push(i1);
                    console.log(arr9[i]);
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
  let codeBox5 = document.getElementById('code5');
  codeBox5.innerHTML = checkResult5.toString();
  let codeBox6 = document.getElementById('code6');
  codeBox6.innerHTML = checkResult6.toString();
  }
 