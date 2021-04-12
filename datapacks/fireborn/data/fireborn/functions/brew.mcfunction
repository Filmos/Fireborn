data modify entity @e[type=minecraft:item,nbt={Item:{tag:{DwarvenPotion:2b}}},sort=nearest,limit=1] Item merge from entity @a[scores={BrewSelector=1},limit=1] SelectedItem
data modify entity @e[type=minecraft:item,nbt={Item:{tag:{DwarvenPotion:2b}}},sort=nearest,limit=1] Item.tag.CustomPotionEffects append value {Id:10,Duration:900}
data modify entity @e[type=minecraft:item,nbt={Item:{tag:{DwarvenPotion:2b}}},sort=nearest,limit=1] Item.tag.CustomPotionEffects append value {Id:9,Duration:400}
data modify entity @e[type=minecraft:item,nbt={Item:{tag:{DwarvenPotion:2b}}},sort=nearest,limit=1] Item.tag.DwarvenPotion set value 1b
replaceitem entity @a[scores={BrewSelector=1},limit=1] weapon.mainhand air
scoreboard players set @a[scores={BrewSelector=1},limit=1] BrewSelector 0