scoreboard objectives add EternalWolfId dummy

loot spawn ~ ~ ~ loot fireborn:powers/player_head
summon wolf ~ ~ ~ {CustomName:"\"Eternal Companion\"",Invulnerable:1,CollarColor:11,Tags:["eternal_wolf","summoning_eternal_wolf"]}
data modify entity @e[tag=summoning_eternal_wolf,sort=nearest,limit=1] Owner set from entity @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1] Item.tag.SkullOwner.Id
kill @e[type=item,nbt={Item:{id:"minecraft:player_head"}},sort=nearest,limit=1]

effect give @e[tag=summoning_eternal_wolf,sort=nearest,limit=1] minecraft:strength 999999 1 true
scale set pehkui:base 1.3 @e[tag=summoning_eternal_wolf,sort=nearest,limit=1]

execute unless score @s EternalWolfId matches 0.. run scoreboard players add ___ EternalWolfId 1
execute unless score @s EternalWolfId matches 0.. run scoreboard players operation @s EternalWolfId = ___ EternalWolfId
scoreboard players operation @e[tag=summoning_eternal_wolf,sort=nearest,limit=1] EternalWolfId = @s EternalWolfId

tag @e[tag=summoning_eternal_wolf] remove summoning_eternal_wolf
