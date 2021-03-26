loot spawn ~ ~ ~ loot fireborn:powers/player_head


summon wolf ~ ~ ~ {Tags:["summoning_horde_wolf"],CollarColor:15,Silent:1}
data modify entity @e[tag=summoning_horde_wolf,sort=nearest,limit=1] Owner set from entity @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1] Item.tag.SkullOwner.Id
effect give @e[tag=summoning_horde_wolf,sort=nearest,limit=1] minecraft:wither 999999 0 true
tag @e[tag=summoning_horde_wolf] remove summoning_horde_wolf

summon wolf ~ ~ ~ {Tags:["summoning_horde_wolf"],CollarColor:15,Silent:1}
data modify entity @e[tag=summoning_horde_wolf,sort=nearest,limit=1] Owner set from entity @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1] Item.tag.SkullOwner.Id
effect give @e[tag=summoning_horde_wolf,sort=nearest,limit=1] minecraft:wither 999999 0 true
tag @e[tag=summoning_horde_wolf] remove summoning_horde_wolf

summon wolf ~ ~ ~ {Tags:["summoning_horde_wolf"],CollarColor:15,Silent:1}
data modify entity @e[tag=summoning_horde_wolf,sort=nearest,limit=1] Owner set from entity @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1] Item.tag.SkullOwner.Id
effect give @e[tag=summoning_horde_wolf,sort=nearest,limit=1] minecraft:wither 999999 0 true
tag @e[tag=summoning_horde_wolf] remove summoning_horde_wolf

summon wolf ~ ~ ~ {Tags:["summoning_horde_wolf"],CollarColor:15,Silent:1}
data modify entity @e[tag=summoning_horde_wolf,sort=nearest,limit=1] Owner set from entity @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1] Item.tag.SkullOwner.Id
effect give @e[tag=summoning_horde_wolf,sort=nearest,limit=1] minecraft:wither 999999 0 true
tag @e[tag=summoning_horde_wolf] remove summoning_horde_wolf


kill @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1]
