addFireborn("Filmos")
  .activeAbility(1.2, function (event) {
    player = event.player
    entity = utils.getPlayerEnderpearl(player)
    entity.setPosition(player.x, player.y+1.5, player.z)
    utils.addRotatedMotion(entity, player, 2)
    entity.spawn()
  })