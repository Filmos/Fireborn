// priority: 0

let skilltreeLayers = ["skilltree:haste","skilltree:offense","skilltree:defense","skilltree:agility","skilltree:nightvision","skilltree:strength","skilltree:vitality","skilltree:stamina"]

onEvent('player.logged_in', event => {
  let server = event.getServer()
  for(let layer of skilltreeLayers)
    server.runCommandSilent('execute as '+event.player.name+' if data entity @s ForgeCaps.origins:origin_component.OriginLayers[{Layer: "'+layer+'", Origin:"origins:empty"}].Origin run origin set @s '+layer+' skilltree:blank')
})
