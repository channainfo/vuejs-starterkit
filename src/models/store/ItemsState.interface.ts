import { ItemInterface } from "@/models/items/Item.interface";

export default interface ItemsStateInterface {
  loading: boolean,
  items: ItemInterface[]
}