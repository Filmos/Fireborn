scoreboard objectives add LifeforceSteal dummy
scoreboard players set @s LifeforceSteal 0
execute at @e[distance=0.001..16,type=!player,nbt={ActiveEffects:[{Id:20b}]}] run scoreboard players add @s LifeforceSteal 1
execute if entity @a[distance=0,scores={LifeforceSteal=3..7}] run effect give @s minecraft:saturation 1
execute if entity @a[distance=0,scores={LifeforceSteal=8..}] run effect give @s minecraft:saturation 3
execute if entity @a[distance=0,scores={LifeforceSteal=18..}] run effect give @s minecraft:regeneration 2
