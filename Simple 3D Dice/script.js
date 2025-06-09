function rollDice() {
    const dice = document.getElementById("dice");
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    let xRotation = 0, yRotation = 0;

    switch (randomNumber) {
        case 1: xRotation = 0; yRotation = 0; break;
        case 2: xRotation = 180; yRotation = 0; break;
        case 3: xRotation = 0; yRotation = 90; break;
        case 4: xRotation = 0; yRotation = -90; break;
        case 5: xRotation = -90; yRotation = 0; break;
        case 6: xRotation = 90; yRotation = 0; break;
    }

    dice.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
}

