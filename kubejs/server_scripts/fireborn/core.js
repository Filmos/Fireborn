// priority: 5

allAbilities = {}

function addFireborn(name) {
  allAbilities[name] = {}
  return {
    activeAbility: function(cooldown, func) {
      var present_date = new Date();
      
      if(!allAbilities[name].primaryActive) {allAbilities[name].primaryActive = {func: func, cooldown: cooldown, lastUse: present_date.getTime()-cooldown}; return}
      if(!allAbilities[name].secondaryActive) {allAbilities[name].secondaryActive = {func: func, cooldown: cooldown, lastUse: present_date.getTime()-cooldown}; return}
    }
  }
}

events.listen('player.data_from_client.fireborn_keybind_primary', function (event) {
  ability = allAbilities[event.player.name].primaryActive
  if(ability) {
    var present_date = new Date();
    if((present_date.getTime() - ability.lastUse)/1000 < ability.cooldown) return
    ability.lastUse = present_date.getTime()
    ability.func(event)
  }
})