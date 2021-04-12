isDown = false
events.listen('client.tick', function (event) {
  if(!isDown && client.isKeyDown(75)) 
    event.player.sendData('fireborn_keybind_primary', {})
  isDown = client.isKeyDown(75)
})