addFireborn("Filmos")
<<<<<<< HEAD
  .activeAbility(1, function (event) {
    player = event.player
    enderpearl = utl.getPlayerEnderpearl(player)
    enderpearl.setPosition(player.x, player.y+player.eyeHeight, player.z)
    utl.addRotatedMotion(enderpearl, player, 2)
    enderpearl.spawn()
  })
  .takenDamageModifier(function(damage, event) {
    if(event.getSource().type == "inWall") return 0
    if(event.getSource().type == "fall") return damage-5
    return damage
  })
  .takenDamageModifier(function(damage, event) {
    if(damage <= 0) return damage
    
    optimizer.forNearbyPlayers(event.entity, event.world, (ent, dist) => {
      dist = Math.max(0, 1500/(dist+27)-20)
      if(dist>0) ent.attack(""+event.source.type, damage*dist/28)
    })
     
    return damage/2
  })
  .dealtDamageModifier(function(damage, event) {
    if(event.entity.type == "minecraft:wither") return 0
    if(event.entity.type == "minecraft:ender_dragon") return 0
    
    nbt = event.entity.getFullNBT()
    nbt["Fuse"] = 999999
    nbt["PowerPacified"] = 1
    nbt["PacifierUUID"] = event.source.getActual().id
    for(a in nbt["Attributes"]) {
      att = nbt["Attributes"][a]
      if(att["Name"] == "minecraft:generic.follow_range" || att["Name"] == "minecraft:generic.attack_damage") {
        if(!att["Modifiers"]) att["Modifiers"] = []
        att["Modifiers"].push({Amount: -1, Operation: 2, Name: "Remove on hit",UUID:[-746655106,-707967655,-1699421418,-1854560368]})
      }
    }
    event.entity.setFullNBT(nbt)
    
    return 0
  })
  .arrowDealtDamageModifier(function(damage, event) {
    arrow = event.source.getActual()
    nbt = arrow.fullNBT
    arrow.kill()
    
    if(!nbt["CustomPotionEffects"] && !nbt["Potion"]) return 0
    potion = event.world.createEntity("minecraft:area_effect_cloud")
    
    data = potion.getFullNBT()
    data["Owner"] = nbt["Owner"]
    if(nbt["Potion"]) data["Potion"] = nbt["Potion"]
    if(nbt["CustomPotionEffects"]) data["CustomPotionEffects"] = nbt["CustomPotionEffects"]
    data["ReapplicationDelay"] = 9
    data["Radius"] = 2
    data["Duration"] = 20
    data["WaitTime"] = 0
    potion.setFullNBT(data)
    
    potion.setPosition(event.entity.x,event.entity.y,event.entity.z)
    potion.spawn()
    
    return 0
  })
  .fireworkDealtDamageModifier(function(damage, event) {
    firework = event.source.getActual()
    
    return 0
  })
  .onTick(function(event) {
    optimizer.forNearbyPlayers(event.player, event.world, (ent, dist) => {
      if(dist>45) return
      ent.getPotionEffects().add("minecraft:regeneration", 6, 0, true, false)
      
      if((!lastHealTick[ent.name] || lastHealTick[ent.name]+dist*2<=event.world.getTime()) && ent.health+1 <= event.player.health) {
        ent.heal(1)
        lastHealTick[ent.name] = event.world.getTime()
      }
      if((!lastFeedTick[ent.name] || lastFeedTick[ent.name]+dist*4+30<=event.world.getTime()) && ent.getFoodLevel()+1 <= event.player.getFoodLevel()) {
        ent.setFoodLevel(ent.getFoodLevel()+1)
        lastFeedTick[ent.name] = event.world.getTime()
      }
      
    })
  })

lastHealTick = {}
lastFeedTick = {}
=======
  .activeAbility(1.2, function (event) {
    player = event.player
    entity = utils.getPlayerEnderpearl(player)
    entity.setPosition(player.x, player.y+1.5, player.z)
    utils.addRotatedMotion(entity, player, 2)
    entity.spawn()
  })
>>>>>>> bb06e3f285728598ac8e005d4af5c9b8b93888fb
