isDown = false
events.listen('client.tick', function (event) {
<<<<<<< HEAD
  if(client.getCurrentGui() != null) return
  if(!isDown && client.isKeyDown(75)) {
    event.player.sendData('fireborn_keybind_primary', {})
  }
=======
  if(!isDown && client.isKeyDown(75)) 
    event.player.sendData('fireborn_keybind_primary', {})
>>>>>>> bb06e3f285728598ac8e005d4af5c9b8b93888fb
  isDown = client.isKeyDown(75)
})