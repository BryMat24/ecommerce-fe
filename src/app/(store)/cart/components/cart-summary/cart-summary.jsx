import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";

const getCartItem = (item) => {
    return(
        <div className="w-[calc(100%-4rem)] flex flex-row">
            <div className="w-48 h-48 bg-foreground text-primary-foreground flex items-center justify-center">Image</div>
            <div className="flex flex-col px-4 w-[calc(100%-12rem)]">
                <div className="text-xl font-bold my-1">{item.product.name}</div>
                <div className="text-sm text-muted-foreground mb-1">Category: {item.product.category}</div>
                <div className="text-sm text-muted-foreground mb-1">Details: {item.product.description}</div>
                <div className="text-sm text-muted-foreground mb-1">Quantity: {item.quantity}</div>
                <div className="text-xl text-right flex justify-between mt-8">
                    <Button variant="ghost" className="h-12 w-12">
                        <FaRegTrashAlt className="text-xl"/>
                    </Button>
                    <div className="font-bold">
                        S${item.product.price * item.quantity}  
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}
export default function CartSummary({cart}){
    return(
        <div className="w-full h-full">
            {cart.map(item => getCartItem(item))}
        </div>
    )
}