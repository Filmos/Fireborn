optimizer = {}

optimizer.forNearbyEntities = function(startPos, world, func) {
  for(e in world.entities) {
    ent = world.entities[e]
    dist = Math.sqrt((startPos.x-ent.x)*(startPos.x-ent.x)+(startPos.y-ent.y)*(startPos.y-ent.y)+(startPos.z-ent.z)*(startPos.z-ent.z))
    func(ent, dist)
  }
}
optimizer.forNearbyPlayers = function(player, world, func) {
  for(e in world.entities) {
    ent = world.entities[e]
    if(ent.type!="minecraft:player" || ent.id == player.id) continue
    
    dist = Math.sqrt((player.x-ent.x)*(player.x-ent.x)+(player.y-ent.y)*(player.y-ent.y)+(player.z-ent.z)*(player.z-ent.z))
    func(ent, dist)
  }
}
