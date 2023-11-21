interface AddItemRequest {
    isClub: number,
    items: Item,
    meta: any,
    store: number,
    supplyAt : string
}

interface Item{
    386565 : number 
}

 const setAddItemRequest = (quantity: number): AddItemRequest =>{
    return{
        isClub : 0,
        items: { 386565: quantity },
        meta: null,
        store: 331,
        supplyAt: `${new Date().toISOString()}`
    }
 }

 export {setAddItemRequest,AddItemRequest,Item}
