const ships = document.querySelectorAll('#boat5');
const board = document.querySelectorAll('#playerboard > div');

ships.forEach(ship => {
    ship.addEventListener('dragstart', () => {
        ship.classList.add('dragging')
    })

    ship.addEventListener('dragend', () => {
        ship.classList.remove('dragging')
    })
})

board.forEach(div  => {
   div.addEventListener('dragover', () => {
    const draggable = document.querySelector('.dragging')
    div.appendChild(draggable)
   })
})