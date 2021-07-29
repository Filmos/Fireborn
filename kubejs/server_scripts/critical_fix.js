// priority: 0

let disabledItems = ["minecolonies:pharaoscepter"]
onEvent('item.right_click', event => {
	let id = ""+event.item.getId()
	if(disabledItems.indexOf(id) != -1) {
		event.cancel()
		event.server.runCommandSilent('/tellraw '+event.player.name+' {"text":"This item is disabled because it causes critical issues.","color":"red"}')
		return
	}
	
	
})


let machineBlocks = ["tiny", "small", "normal", "large", "giant", "maximum"].map(s => "compactmachines:machine_"+s)
onEvent('block.place', event => {
	if(event.world.dimension!="compactmachines:compact_world") return
	if(machineBlocks.indexOf(""+event.block.getId()) == -1) return
	
	event.cancel()
	event.server.runCommandSilent('/tellraw '+event.entity.name+' {"text":"This action is disabled because it causes critical issues.","color":"red"}')
	
})
deepSearch = function(object, lookingFor, maxLevel, prefix) {
  if(maxLevel == 0) return
  for(key in object) {
    newPrefix = prefix+"."+key
    if(!key || !object[key]) continue
    if((key + " ][ " + object[key]).toLowerCase().indexOf(lookingFor.toLowerCase())!=-1) console.info((newPrefix + " ][ " + object[key]).replace(/\n/g, " "))
    try {deepSearch(object[key], lookingFor, maxLevel-1, newPrefix)} catch(error) {continue}
  }
}