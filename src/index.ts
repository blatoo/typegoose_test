import { PetModel, OwnerModel } from "./models"
import { run } from "./run"

const createData = async () => {
    await OwnerModel.create([
        {
            name: "Conny",
            pet: await new PetModel({ name: "Fifi", species: "Dog" }).save(),
        },
        { name: "Tommy", pet: await new PetModel({ name: "MiMi", species: "Cat" }).save() },
    ])
}

const fn = async () => {
    // create data
    // await createData()

    // retrieve the Owner and auto pupoluate the "pet" field.
    const res = await OwnerModel.find({}).exec()
    console.log(res)
}

run(fn)
