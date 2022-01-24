import { CartItem } from "../interface";

export default function getItemIndex(state: CartItem[], idToFind: string): number {
    const ids = state.map(item => item.id);
    return ids.indexOf(idToFind);
}