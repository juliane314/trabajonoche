const input = document.querySelector('#text');
const button = document.querySelector('#add');
const tasks = document.querySelector('#tasks');

button.addEventListener('click', () => {
    console.log(input);
    const template =
    `<p>${input.value}</p>`;

    tasks.insertAdjacentHTML('beforeend', template);

    
     });
