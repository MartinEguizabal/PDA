@creatures = ['cat', 'dog', 'bird', 'fish', 'insect', 'tree']
@collection = []

def add_to_collection(creature)
  @creatures.delete(creature)
  @collection << creature

  p @creatures
  p @collection
end

add_to_collection('cat')







