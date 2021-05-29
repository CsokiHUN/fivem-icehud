const localPed = PlayerPedId()
const localId = PlayerId()
let hunger = thrist = 100

setInterval(() => {
    SendNuiMessage(JSON.stringify({
        health: GetEntityHealth(localPed) - 100,
        armour: GetPedArmour(localPed),
        hunger,
        thrist,
        stamina: 100 - GetPlayerSprintStaminaRemaining(localId)
    }))
}, 100)

setInterval(() => {
    emit('esx_status:getStatus', 'hunger', (value) => {
        hunger = value.getPercent()
    })
    emit('esx_status:getStatus', 'thirst', (value) => {
        thrist = value.getPercent()
    })
}, 1000)
