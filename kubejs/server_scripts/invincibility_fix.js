// priority: 0

let skilltreeLayers = ["skilltree:haste","skilltree:offense","skilltree:defense","skilltree:agility"]

onEvent('player.logged_in', event => {
  for(let layer of skilltreeLayers)
    event.player.runCommandSilent('execute if data entity @s ForgeCaps.origins:origin_component.OriginLayers[{Layer: "'+layer+'", Origin:"origins:empty"}].Origin run origin set @s '+layer+' skilltree:blank')
})
