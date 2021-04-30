window.addEventListener('DOMContentLoaded', () => {
  const row1List = document.querySelectorAll('.row1')
  const row2List = document.querySelectorAll('.row2')
  const row3List = document.querySelectorAll('.row3')
  const row4List = document.querySelectorAll('.row4')
  const row5List = document.querySelectorAll('.row5')
  const row6List = document.querySelectorAll('.row6')
  const row7List = document.querySelectorAll('.row7')
  const row8List = document.querySelectorAll('.row8')
  const row9List = document.querySelectorAll('.row9')
  const col1List = document.querySelectorAll('.col1')
  const col2List = document.querySelectorAll('.col2')
  const col3List = document.querySelectorAll('.col3')
  const col4List = document.querySelectorAll('.col4')
  const col5List = document.querySelectorAll('.col5')
  const col6List = document.querySelectorAll('.col6')
  const col7List = document.querySelectorAll('.col7')
  const col8List = document.querySelectorAll('.col8')
  const col9List = document.querySelectorAll('.col9')
  const box1List = document.querySelectorAll('.box1')
  const box2List = document.querySelectorAll('.box2')
  const box3List = document.querySelectorAll('.box3')
  const box4List = document.querySelectorAll('.box4')
  const box5List = document.querySelectorAll('.box5')
  const box6List = document.querySelectorAll('.box6')
  const box7List = document.querySelectorAll('.box7')
  const box8List = document.querySelectorAll('.box8')
  const box9List = document.querySelectorAll('.box9')

  const allColNodes = [col1List,col2List,col3List,col4List,col5List,col6List,col7List,col8List,col9List]

  const allRowNodes = [row1List,row2List,row3List,row4List,row5List,row6List,row7List,row8List,row9List]

  const allBoxNodes = [box1List,box2List,box3List,box4List,box5List,box6List,box7List,box8List,box9List]

  const allNodeArr = [allColNodes, allRowNodes, allBoxNodes]

  //possible optimization: set value of list to complete if list is completed
  //this way, winCon can skip the completed list


  let notFinishSubmit = false;
  const winCon = () => {
    for (let i = 0; i < 3; i++) {
      if (notFinishSubmit) {return}
      const nodeListArr = allNodeArr[i];

      for (let j = 0; j < 9; j++) {
        if (notFinishSubmit) {return}
        const nodeList = nodeListArr[j];
        let nodeListValue = []
        //create sorted nodelistvalue
        //and then compare to sort 1to9

        for (let k = 0; k < 9; k++) {
          if (notFinishSubmit) {return}
          const node = nodeList[k];
          nodeListValue.push( parseInt(node.value))
        }

        nodeListValue.sort();

        for (let l = 1; l < 10; l++) {
          if (nodeListValue[l-1] !== l) {
            notFinishSubmit = true;
            alert('not complete yet')
            return;
          }
        }
      }
    }
    alert('you win!')
    notFinishSubmit = false;
  }

  const submitBtn = document.getElementById('finish')
  submitBtn.addEventListener('click', e => {
    notFinishSubmit = false;
    winCon();
  })



})