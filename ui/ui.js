window.addEventListener('message', (event) => {
    const { data } = event

    if (data.health) {
        const value = 216 / 100 * data.health
        document.getElementById("hpbar").style.width = value + "px"
    }

    if (data.armour) {
        const value = 216 / 100 * data.armour
        document.getElementById("armorbar").style.width = value + "px"
    }

    if (data.hunger) {
        const value = 216 / 100 * data.hunger
        document.getElementById("hungerbar").style.width = value + "px"
    }

    if (data.thrist) {
        const value = 216 / 100 * data.thrist
        document.getElementById("drinkbar").style.width = value + "px"
    }

    if (data.stamina) {
        const value = 216 / 100 * data.stamina
        document.getElementById("staminabar").style.width = value + "px"
    }
})