// priority: 0
let bags = ["basic", "good", "greater", "epic", "legendary"]
let delay = []

onEvent('item.right_click', event => {
  for(let b of bags)
    if(event.item.getId()== "hardcorequesting:"+b+'_bag')
      delay.push('clear '+event.player.name+' hardcorequesting:'+b+'_bag 1')
})

onEvent('server.tick', event => {
  for(let com of delay)
    event.getServer().runCommandSilent(com)
  delay = []
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