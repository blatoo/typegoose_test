import { getModelForClass, plugin, prop, Ref } from "@typegoose/typegoose"
import * as autopopulate from "mongoose-autopopulate"

export class Pet {
  @prop()
  name: string

  @prop()
  species: string
}

@plugin(autopopulate as any)
export class Owner {
  @prop()
  name: string

  @prop({ autopopulate: true, ref: () => Pet })
  pet: Ref<Pet>
}

export const PetModel = getModelForClass(Pet)
export const OwnerModel = getModelForClass(Owner)
