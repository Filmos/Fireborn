onEvent('recipes', event => {
  event.remove({output: 'calemiutils:book_stand'})
  event.remove({output: 'calemiutils:link_book_location'})
})