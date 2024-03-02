import CheckoutForm from "@/components/checkout-form/checkout-form"

export default function ExportPage(){
    return(
        <div className="p-12 w-full h-full">
            <h1 className="font-bold text-3xl">Checkout</h1>
            <CheckoutForm />
        </div>
    )
}