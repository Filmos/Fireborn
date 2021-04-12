scoreboard objectives add BrewSelector dummy
scoreboard players set @s BrewSelector 1
summon minecraft:item ^0 ^1 ^1 {PickupDelay:15, Item: {id:"minecraft:potion", Count:1b, tag:{DwarvenPotion:2b}}}
schedule function fireborn:brew 2t