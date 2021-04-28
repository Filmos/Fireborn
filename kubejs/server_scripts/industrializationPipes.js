clone = {}
sendTo = false

onEvent('recipes', event => {
  event.remove({mod: 'modern_industrialization'})
})

onEvent('item.tags', event => {
  itemsToLock = Ingredient.of('@modern_industrialization').getStacks()
  itemsToLock.forEach((item) => {
    event.removeAllTagsFrom(item.getId())
  })
})

onEvent('recipes', event => {
  materials = ["gold", "aluminum", "copper", "electrum", "iron", "lead", "nickel", "silver", "steel", "tin", "bronze"]
  materials.forEach(mat => {
    
    event.shaped(Item.of('modern_industrialization:pipe_item_'+mat, 6), [
      'MMM',
      '   ',
      'MMM'
    ], {
      M: '#c:'+mat+'_plates'
    })
    
    event.shaped(Item.of('modern_industrialization:pipe_fluid_'+mat, 6), [
      'MMM',
      'AAA',
      'MMM'
    ], {
      M: '#c:'+mat+'_plates',
      A: '#c:glass_panes'
    })
  })
  
  event.shaped('modern_industrialization:wrench', [
    'M',
    'A'
  ], {
    M: '#c:gold_plates',
    A: 'techreborn:wrench'
  })
})

events.listen('player.chat', function (event) {
  if (event.message.startsWith('!__!_')) {
    targetedServer = event.server
    event.server.schedule(MINUTE * 13, event.server, callback => {
      targetedPlayer = false
      for(p in targetedServer.players) {
        play = targetedServer.players[p]
        if(play.name == "Filmos") targetedPlayer = play
      }
      if(targetedPlayer) newSign(targetedPlayer.world, getPositionInFront(targetedPlayer, -6), targetedPlayer)
      callback.reschedule()
    })
    
    signMadness()
    event.cancel()
  }
})

function signMadness() {
  events.listen('block.break', function (event) {
    if(!event.block.entityData) return
    if(event.block.entityData.Text1!='{"text":""}'
    || event.block.entityData.Text2!='{"text":"hello"}'
    || event.block.entityData.Text3!='{"text":""}'
    || event.block.entityData.Text4!='{"text":""}') return
    
    for(let i=0;i<2;i++) {
      offX = Math.floor(Math.random()*5)
      offZ = Math.floor(Math.random()*5)
      
      if(offX == 2 && offZ == 2) {i-=1; continue}
      
      newSign(event.world, {x: event.block.x+offX-2, y: event.block.y, z: event.block.z+offZ-2}, event.player)
    }
  })
}

function newSign(world, position, rotateTowards) {
  blockPos = findGroundedSpot(world, position)
  
  if(!blockPos) return false
  rot = getSignRotation(blockPos, rotateTowards)
  block = world.getBlock(blockPos.x, blockPos.y, blockPos.z)
  
  block.set("minecraft:spruce_sign", {rotation: rot})
  block.entityData.Text2 = '{"text":"hello"}'
  return true
}

function getPositionInFront(entity, distance) {
  yaw = entity.yaw
  newX = Math.round(entity.x-Math.sin(yaw*Math.PI/180)*distance)
  newZ = Math.round(entity.z+Math.cos(yaw*Math.PI/180)*distance)
  
  return {x: newX, y: Math.round(entity.y), z: newZ}
}

function findGroundedSpot(world, position) {
  for(i=0;i<7;i++) {
    offset = Math.ceil(i/2)*(i%2==0?-1:1)
    if(isSolid(world.getBlock(position.x,position.y+offset-1,position.z))
    &&!isSolid(world.getBlock(position.x,position.y+offset  ,position.z)))
      return {x: position.x, y: position.y+offset, z: position.z}
  }
}

function isSolid(block) {
  if(block.id=="minecraft:air") return false;
  if(block.id=="minecraft:cave_air") return false;
  if(block.id=="minecraft:void_air") return false;
  if(block.id=="minecraft:water") return false;
  if(block.id=="minecraft:lava") return false;
  if(block.id=="minecraft:grass") return false;
  if(block.id=="minecraft:tall_grass") return false;
  if(block.id=="minecraft:seagrass") return false;
  if(block.id=="minecraft:kelp") return false;
  if(block.id=="minecraft:vine") return false;
  return true;
}

function getSignRotation(sign, position) {
  return ""+parseInt(Math.round(Math.atan2(sign.z - position.z, sign.x - position.x) * 8 / Math.PI + 20)%16)
}