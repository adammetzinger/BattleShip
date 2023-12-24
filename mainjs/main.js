const ships = document.querySelectorAll('#boat5');


ships.forEach(ship => {
    ship.addEventListener('dragstart', () => {
        ship.classList.add('dragging')
    })

    ship.addEventListener('dragend', () => {
        ship.classList.remove('dragging')
    })
})