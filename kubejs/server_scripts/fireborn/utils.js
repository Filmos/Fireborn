// priority: 4

<<<<<<< HEAD
utl = {}
utl.getPlayerEnderpearl = function(player) {
=======
utils = {}
utils.getPlayerEnderpearl = function(player) {
>>>>>>> bb06e3f285728598ac8e005d4af5c9b8b93888fb
  entity = player.world.createEntity("minecraft:ender_pearl")
  
  data = entity.getFullNBT()
  data["Owner"] = player.getFullNBT()["UUID"]
  entity.setFullNBT(data)
  
  return entity
}
<<<<<<< HEAD
utl.addRotatedMotion = function(entity, rotation, entitySpeed) {
  horizontalSpeed = Math.cos(rotation.pitch/180*Math.PI)*entitySpeed
  entity.setMotion(-Math.sin(rotation.yaw/180*Math.PI)*horizontalSpeed+rotation.motionX, -Math.sin(rotation.pitch/180*Math.PI)*entitySpeed+rotation.motionY, Math.cos(rotation.yaw/180*Math.PI)*horizontalSpeed+rotation.motionZ)
}
utl.deepSearch = function(object, lookingFor, maxLevel, prefix) {
  if(maxLevel == 0) return
  for(key in object) {
    newPrefix = prefix+"."+key
    if(!key || !object[key]) continue
    if((key + " ][ " + object[key]).toLowerCase().indexOf(lookingFor.toLowerCase())!=-1) console.info((newPrefix + " ][ " + object[key]).replace(/\n/g, " "))
    try {this.deepSearch(object[key], lookingFor, maxLevel-1, newPrefix)} catch(error) {continue}
  }
}
utl.debug = function(message) {
  console.info(""+message)
  // for(play in server.players) {
  //   if(play.name == "Filmos") {
  //     play.tell(message)
  //     break
  //   }
  // }
}
utl.stripNamespace = function(input) {
	var lastDot = input.lastIndexOf('.')
	if (lastDot < 0) {
		return input
	}
	return input.substring(lastDot+1)
}

utl.inspect = function(obj) {
	if (typeof obj !== 'undefined') {
		var resultArray = []
		resultArray.push('Inspecting: ' + obj)
		
		var propertiesArray = []
		var functionsArray = []
		Object.keys(obj).forEach(key => {
      try {
			var keyType = typeof obj[key]
			if (keyType === 'string' || keyType === 'number' || keyType === 'object') {
				propertiesArray.push('  ' + key + ': ' + obj[key])
			} else if (keyType === 'function' && !key.startsWith('func_')) {
				var rawString = obj[key].toString().match(/\/\*\n(.*) .*\((.*)\)/)
				var returnType = utl.stripNamespace(rawString[1])
				var rawParameters = []
				if (rawString[2] !== 'undefined') {
					rawParameters = rawString[2].split(',')
				}
				var parameterTypes = []
				var i
				for (i = 0; i < rawParameters.length; i++) {
					parameterTypes.push(utl.stripNamespace(rawParameters[i]))
				}
				
				functionsArray.push('  ' + key + '(' + parameterTypes.join(', ') + ') : ' + returnType)
			} else if (keyType === 'undefined') {
				propertiesArray.push('  ' + key + ': undefined')
			}} catch(e) {}
		})
		
		propertiesArray.sort();
		propertiesArray.unshift('=== Properties ===')
		functionsArray.sort()
		functionsArray.unshift('=== functions ===')
		
		resultArray.push(propertiesArray.join('\n'))
		resultArray.push(functionsArray.join('\n'))
		console.info(resultArray.join('\n'))
	} else {
		console.info('inspected object is undefined')
	}
}

utl.uuidFromIntegers = function(UUID) {
  max = Math.pow(2, 32)
  ret = (max+UUID[0]).toString(16).slice(-8)
  
  el2 = (max+UUID[1]).toString(16)
  ret += "-"+el2.slice(-8,-4)+"-"+el2.slice(-4)
  
  el3 = (max+UUID[2]).toString(16)
  ret += "-"+el3.slice(-8,-4)+"-"+el3.slice(-4)
  
  ret += (max+UUID[3]).toString(16).slice(-8)
  return ret
=======
utils.addRotatedMotion = function(entity, rotation, entitySpeed) {
  horizontalSpeed = Math.cos(rotation.pitch/180*Math.PI)*entitySpeed
  entity.setMotion(-Math.sin(rotation.yaw/180*Math.PI)*horizontalSpeed, -Math.sin(rotation.pitch/180*Math.PI)*entitySpeed, Math.cos(rotation.yaw/180*Math.PI)*horizontalSpeed)
>>>>>>> bb06e3f285728598ac8e005d4af5c9b8b93888fb
}