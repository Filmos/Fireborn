// priority: 5

allAbilities = {}

function addFireborn(name) {
  allAbilities[name] = {}
  return {
    activeAbility: function(cooldown, func) {
      var present_date = new Date();

      if(!allAbilities[name].primaryActive) {allAbilities[name].primaryActive = {func: func, cooldown: cooldown, lastUse: present_date.getTime()-cooldown}; return this}
      if(!allAbilities[name].secondaryActive) {allAbilities[name].secondaryActive = {func: func, cooldown: cooldown, lastUse: present_date.getTime()-cooldown}; return this}
      return this
    },

    takenDamageModifier: function(func) {
      if(!allAbilities[name].takenDamageModifiers) allAbilities[name].takenDamageModifiers = []
      allAbilities[name].takenDamageModifiers.push(func)
      return this
    },

    dealtDamageModifier: function(func) {
      if(!allAbilities[name].dealtDamageModifiers) allAbilities[name].dealtDamageModifiers = []
      allAbilities[name].dealtDamageModifiers.push(func)
      return this
    },

    arrowDealtDamageModifier: function(func) {
      if(!allAbilities[name].arrowDealtDamageModifiers) allAbilities[name].arrowDealtDamageModifiers = []
      allAbilities[name].arrowDealtDamageModifiers.push(func)
      return this
    },

    fireworkDealtDamageModifier: function(func) {
      if(!allAbilities[name].fireworkDealtDamageModifiers) allAbilities[name].fireworkDealtDamageModifiers = []
      allAbilities[name].fireworkDealtDamageModifiers.push(func)
      return this
    },

    onTick: function(func) {
      if(!allAbilities[name].onTick) allAbilities[name].onTick = []
      allAbilities[name].onTick.push(func)
      return this
    }
  }
}

events.listen('player.data_from_client.fireborn_keybind_primary', function (event) {
  if(!allAbilities[event.player.name]) return
  ability = allAbilities[event.player.name].primaryActive
  if(!ability) return

  var present_date = new Date();
  if((present_date.getTime() - ability.lastUse)/1000 < ability.cooldown) return
  ability.lastUse = present_date.getTime()
  ability.func(event)
})

ignoreEvent = false
events.listen('entity.attack', function (event) {
  if(ignoreEvent) return


  damage = event.damage

  try {
    if(event.source.type == "player" 
    && event.source.getActual() 
    && event.source.getActual().type == "minecraft:player" 
    && allAbilities[event.source.getActual().name]) 
      damage = damageHandler(event, allAbilities[event.source.getActual().name].dealtDamageModifiers, damage)
  } catch(e) {}
  
  try {
    if(event.source.getActual() && event.source.getActual().type == "minecraft:arrow" && event.source.getActual().fullNBT["Owner"]) {
      uuid = utl.uuidFromIntegers(event.source.getActual().fullNBT["Owner"])
      owner = event.server.getPlayer(uuid)
      if(owner && allAbilities[owner.name]) damage = damageHandler(event, allAbilities[owner.name].arrowDealtDamageModifiers, damage)
    }
  } catch(e) {}

  try {
    if(event.source.getActual() && event.source.getActual().type == "minecraft:firework_rocket" && event.source.getActual().fullNBT["Owner"]) {
      uuid = utl.uuidFromIntegers(event.source.getActual().fullNBT["Owner"])
      owner = event.server.getPlayer(uuid)
      if(owner && allAbilities[owner.name]) damage = damageHandler(event, allAbilities[owner.name].fireworkDealtDamageModifiers, damage)
    }
  } catch(e) {}


  try {
    if(event.entity.type == "minecraft:player" && allAbilities[event.entity.name]) 
      damage = damageHandler(event, allAbilities[event.entity.name].takenDamageModifiers, damage)
  } catch(e) {}
  
  try {
    damage = universalDamageHandler(event, damage)
  } catch(e) {}


  console.info(damage)
  console.info(event.damage)
  if(damage == event.damage) return
  console.info("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArm")
  event.cancel()
  if(damage <= 0) return

  ignoreEvent = true
  event.entity.attack(""+event.source.type, damage)
  ignoreEvent = false
})

function damageHandler(event, modifiers, currentDamage) {
  if(!modifiers) return currentDamage
  for(modifier of modifiers) currentDamage = modifier(currentDamage, event)
  return currentDamage
}

function universalDamageHandler(event, currentDamage) {
  // if(damage > 0) {
  //   nbt = event.entity.getFullNBT()
  //   for(a in nbt["Attributes"]) {
  //     att = nbt["Attributes"][a]["Modifiers"]
  //     if(!att) continue
  // 
  //     for(i=att.length-1; i>=0; i--) {
  //       console.info(att[i]["Name"])
  //       if(att[i]["Name"]=="Remove on hit")
  //         att.splice(i, 1)
  //     }
  //     console.info(nbt["Attributes"][a])
  //   }
  //   event.entity.setFullNBT(nbt)
  // }

  return currentDamage
}

tickCount = 0
events.listen('player.tick', function (event) {
  tickCount += 1
  if(tickCount < 5) return
  tickCount = 0

  if(!allAbilities[event.player.name]) return
  abilities = allAbilities[event.player.name].onTick
  if(!abilities) return

  for(a in abilities) abilities[a](event)
})

// events.listen('item.right_click', function (event) {
//   event.cancel()
// })