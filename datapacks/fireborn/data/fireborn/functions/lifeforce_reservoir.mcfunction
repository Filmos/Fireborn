scoreboard objectives add LifeforceSteal dummy
scoreboard players set @s LifeforceSteal 0
execute at @e[distance=0.001..16,type=!player,nbt={ActiveEffects:[{Id:20b}]}] run scoreboard players add @s LifeforceSteal 1
execute if entity @a[distance=0,scores={LifeforceSteal=3..7}] run replaceitem entity @s weapon.mainhand minecraft:potion{CustomPotionEffects:[{Id:1,Duration:300},{Id:8,Duration:300}],CustomPotionColor:16121864,display:{Name:'[{"text":"Lifeforce Reservoir","italic":false,"color":"red"}]'}}
execute if entity @a[distance=0,scores={LifeforceSteal=8..17}] run replaceitem entity @s weapon.mainhand minecraft:potion{CustomPotionEffects:[{Id:1,Duration:600},{Id:8,Duration:600},{Id:11,Duration:600}],CustomPotionColor:16121864,display:{Name:'[{"text":"Lifeforce Reservoir","italic":false,"color":"red"}]'}}
execute if entity @a[distance=0,scores={LifeforceSteal=18..}] run replaceitem entity @s weapon.mainhand minecraft:potion{CustomPotionEffects:[{Id:1,Amplifier:1,Duration:900},{Id:8,Duration:900},{Id:11,Duration:900},{Id:22,Amplifier:1,Duration:1200}],CustomPotionColor:16121864,display:{Name:'[{"text":"Lifeforce Reservoir","italic":false,"color":"red"}]'}}
