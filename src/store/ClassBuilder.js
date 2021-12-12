export class Recipe {
    id
    title
    image
    components = []
    directions
    servings
    meatType
    
    constructor(title, image) {
        this.id = Math.random()
        this.title = title
        this.image = image
    }

    setComponents(...args) {
        this.components = args
    }
}

export class Ingredient {
    name
    carbs
    fats
    protein

    constructor(name, carbs, fats, protein) {
        this.name = name
        this.carbs = carbs
        this.fats = fats
        this.protein = protein
    }
}

export class Component {
    ingredient
    amount
    units

    constructor(ingredient, amount, units) {
        this.ingredient = ingredient
        this.amount = amount
        this.units = units
    }
}
