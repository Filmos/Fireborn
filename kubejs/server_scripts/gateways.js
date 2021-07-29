// priority: 0

let sizes = ["tiny", "small", "normal", "large", "giant", "maximum"]
onEvent('block.right_click', event => {
	if(event.item.getId() != 'rftoolsbase:infused_enderpearl') return
	
  for(let s of sizes)
    if(event.block.getId()== "compactmachines:machine_"+s) {
			if(event.block.entity.machineId == -1) {
				event.server.runCommandSilent('/tellraw '+event.player.name+' {"text":"You need to enter the machine at least once before making a gateway.","color":"red"}')
				return
			}
			
			if(event.item.count == 1) event.server.runCommandSilent('/replaceitem entity '+event.player.name+' weapon.mainhand minecraft:air')
			else event.server.runCommandSilent('/replaceitem entity '+event.player.name+' weapon.mainhand rftoolsbase:infused_enderpearl '+(event.item.count-1))
			
			event.server.runCommandSilent('/give '+event.player.name+' compactmachines:machine_'+s+'{cm:{coords:'+event.block.entity.machineId+'},display:{Name:\'[{"text":"Compact Gateway ('+s[0].toUpperCase()+s.slice(1)+')","italic":false}]\'}}')
		}
	
})