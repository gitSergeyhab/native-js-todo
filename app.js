const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: 5,
    completed: false,
    body:
      'Aliquip datat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat temponulla reprehenderit ipsum .... <script>alert("AAAA!!!!")</script> ////',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum .... <script>alert("AAAA!!!!")</script> ////',
  }
];

// (function(arrOfTasks) {
//   const objOfTasks = arrOfTasks.reduce((accum, elem) => {
//     accum[elem._id] = elem;
//     // delete accum[elem._id]._id;
//     return accum;
//   })
//   console.log(objOfTasks);
// })(tasks);

//render

const ul = document.querySelector('.list-group');

const createLi = ({title, body, _id}) => `
  <li class="list-group-item d-flex align-items-center flex-wrap mt-2">
    <span>${title}</span>
    <button data-del=${_id} class="btn btn-danger ml-auto delete-btn">Delete</button>
    <p class="mt-2 w-100">
      ${body}
    </p>
  </li>`

const renderAllPosts = (data) => {
  const lis = data.reduce((acc, el) => acc + createLi(el), '');
  ul.innerHTML = lis;
}
renderAllPosts(tasks);

let id = 0;

const form = document.querySelector('[name="addTask"]');
const inputTitle = form.querySelector('input[name="title"]');
const inputBody = form.querySelector('input[name="body"]');

// --- создание нового оюъекта в массиве
const createNewTask = (body, title) => ({_id: ++id, completed: false, body, title})

//--- добавление поста при нажатии на кнопку отправки формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const body = inputBody.value;
  const title = inputTitle.value;
  if (body.trim() && title.trim()) {
    const newTask = createNewTask(body, title)
    tasks.unshift(newTask);
    renderAllPosts(tasks);
    // inputTitle.value = '';
    // inputBody.value = '';
    form.reset();
  }
})

//--- удаление элемента по айди
const deleteFromData = (data, id) => {
  const numberElement = data.findIndex(el => el._id == id);
  if (numberElement !== -1) {
    data.splice(numberElement, 1)
  }
  return data;
}

//--- удаление поста при нажатии на дел
ul.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('delete-btn')) {
    const delId = evt.target.getAttribute('data-del');
    const delIndex = deleteFromData(tasks, delId)
    deleteFromData(tasks, delIndex)
    renderAllPosts(tasks);
  }
})
