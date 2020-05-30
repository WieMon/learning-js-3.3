let size = 10;
let orderElement = 1;


const init = () => {
  const btn = document.createElement('button');
  btn.textContent = 'Add 10 elements';
  document.body.appendChild(btn);

  const btnReset = document.createElement('button');
  btnReset.textContent = 'Remove';
  document.body.appendChild(btnReset);

  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  document.body.appendChild(ul);
    
  btn.addEventListener('click', createLiElements);
  btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
  console.log('jest ok')
  
  for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Element number ${orderElement++}`;
    li.style.fontSize = `${size++}px`
    document.querySelector('ul').appendChild(li);
  }
}

const cleanList = () => {
  document.querySelector('ul').textContent = '';
  size = 10;
  orderElement = 1;
}

init()