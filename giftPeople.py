# Tu funcion debe recibir un array de strings  // ["Luis", "Carlos", "Gustavo", "Fernando", "Victor", "Javier"]

# Y regresar un listado de emisores y receptores:
# Victor= -> Fernando 
# Javier -> Gustavo 
# Luis -> Carlos
# Gustavo -> Luis, 
# Fernando -> Javier
# Carlos -> Victor

# Reglas:
# No recibir mas de un regalo por persona
# No relaciones ciclicas entre emisor y receptor (Si Carlos le da un regalo a Javier, Javier ya no puede regalarle a Carlos)
# Resultado diferente cada vez que se llama la función
import random
people = ["Luis", "Carlos", "Gustavo", "Fernando", "Victor", "Javier"]
togift = []
gifted = []

def gifTo():
    persontoGift = (random.randint(0, len(people)-1))
    persontoRecieve = (random.randint(0, len(people)-1))
    persontoGift = people[persontoGift]
    persontoRecieve = people[persontoRecieve]
    if len(togift) == len(people) or len(togift) == len(people):
        print("Se regaló todo")
        return False
    if persontoRecieve not in gifted and persontoGift not in togift and persontoRecieve != persontoGift:
        gifted.append(persontoRecieve)
        togift.append(persontoGift)
        print(gifted, togift)
        print(persontoGift + " le regaló a " + persontoRecieve)
        return True
    else: 
        gifTo()
    
gifTo()
gifTo()
gifTo()
gifTo()
gifTo()
gifTo()
gifTo()
gifTo()
gifTo()