// priority: 4

utils = {}
utils.getPlayerEnderpearl = function(player) {
  entity = player.world.createEntity("minecraft:ender_pearl")
  
  data = entity.getFullNBT()
  data["Owner"] = player.getFullNBT()["UUID"]
  entity.setFullNBT(data)
  
  return entity
}
utils.addRotatedMotion = function(entity, rotation, entitySpeed) {
  horizontalSpeed = Math.cos(rotation.pitch/180*Math.PI)*entitySpeed
  entity.setMotion(-Math.sin(rotation.yaw/180*Math.PI)*horizontalSpeed, -Math.sin(rotation.pitch/180*Math.PI)*entitySpeed, Math.cos(rotation.yaw/180*Math.PI)*horizontalSpeed)
}