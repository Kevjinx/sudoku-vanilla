const box11 = document.getElementById('box11');
const box12 = document.getElementById('box12');
const box13 = document.getElementById('box13');
const box14 = document.getElementById('box14');
const box15 = document.getElementById('box15');
const box16 = document.getElementById('box16');
const box17 = document.getElementById('box17');
const box18 = document.getElementById('box18');
const box19 = document.getElementById('box19');

const box21 = document.getElementById('box21');
const box22 = document.getElementById('box22');
const box23 = document.getElementById('box23');
const box24 = document.getElementById('box24');
const box25 = document.getElementById('box25');
const box26 = document.getElementById('box26');
const box27 = document.getElementById('box27');
const box28 = document.getElementById('box28');
const box29 = document.getElementById('box29');

const box31 = document.getElementById('box31');
const box32 = document.getElementById('box32');
const box33 = document.getElementById('box33');
const box34 = document.getElementById('box34');
const box35 = document.getElementById('box35');
const box36 = document.getElementById('box36');
const box37 = document.getElementById('box37');
const box38 = document.getElementById('box38');
const box39 = document.getElementById('box39');

const box41 = document.getElementById('box41');
const box42 = document.getElementById('box42');
const box43 = document.getElementById('box43');
const box44 = document.getElementById('box44');
const box45 = document.getElementById('box45');
const box46 = document.getElementById('box46');
const box47 = document.getElementById('box47');
const box48 = document.getElementById('box48');
const box49 = document.getElementById('box49');

const box51 = document.getElementById('box51');
const box52 = document.getElementById('box52');
const box53 = document.getElementById('box53');
const box54 = document.getElementById('box54');
const box55 = document.getElementById('box55');
const box56 = document.getElementById('box56');
const box57 = document.getElementById('box57');
const box58 = document.getElementById('box58');
const box59 = document.getElementById('box59');

const box61 = document.getElementById('box61');
const box62 = document.getElementById('box62');
const box63 = document.getElementById('box63');
const box64 = document.getElementById('box64');
const box65 = document.getElementById('box65');
const box66 = document.getElementById('box66');
const box67 = document.getElementById('box67');
const box68 = document.getElementById('box68');
const box69 = document.getElementById('box69');

const box71 = document.getElementById('box71');
const box72 = document.getElementById('box72');
const box73 = document.getElementById('box73');
const box74 = document.getElementById('box74');
const box75 = document.getElementById('box75');
const box76 = document.getElementById('box76');
const box77 = document.getElementById('box77');
const box78 = document.getElementById('box78');
const box79 = document.getElementById('box79');

const box81 = document.getElementById('box81');
const box82 = document.getElementById('box82');
const box83 = document.getElementById('box83');
const box84 = document.getElementById('box84');
const box85 = document.getElementById('box85');
const box86 = document.getElementById('box86');
const box87 = document.getElementById('box87');
const box88 = document.getElementById('box88');
const box89 = document.getElementById('box89');

const box91 = document.getElementById('box91');
const box92 = document.getElementById('box92');
const box93 = document.getElementById('box93');
const box94 = document.getElementById('box94');
const box95 = document.getElementById('box95');
const box96 = document.getElementById('box96');
const box97 = document.getElementById('box97');
const box98 = document.getElementById('box98');
const box99 = document.getElementById('box99');

const finishBtn = document.getElementById('finish')

const arr1to9 = [1,2,3,4,5,6,7,8,9]


const checkFinish = () => {

  const boxArrValues = [box1.value,box2.value,box3.value,box4.value,box5.value,box6.value,box7.value,box8.value,box9.value]

  const boxArrNumSorted = boxArrValues.map(box => {
    return parseInt(box);
  }).sort();

  const checkArray = (arr1, arr2) => {
    arr1.forEach((arr1ele, i) => {
      if (arr1ele !== arr2[i]) {
        return false;
      }
    });
    return true;
  }

  if (checkArray(arr1to9, boxArrNumSorted)) {
    alert('you win');
  } else {
    alert('try again, you/re missing something')
  }
  //
}

finishBtn.onclick = checkFinish;
