"use client";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const orders = [
    {},
    {}
]

const getOrderCard = (order) => {
    return(
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="w-full" value="item-1">
                <AccordionTrigger className="w-full hover:no-underline">
                    <Card className="w-2/3 h-24 mt-4 border-0 shadow-none">
                        <CardContent className=" w-full h-full flex items-center p-2">
                            <div className="h-16 w-16 border-2">
                                {/* <Image src={MainImg} alt="Photo by Drew Beamer" fill className="object-cover" /> */}
                            </div>
                            <div className="h-16 m-4 flex flex-col justify-center text-left">
                                <div>Item Name</div>
                                <div>Order Status: Sending</div>
                            </div>
                        </CardContent>
                    </Card>
                </AccordionTrigger>
                <AccordionContent className="w-full pl-2">
                    <div className="font-bold underline"> Order Details </div>
                    <div>Item Name: </div>
                    <div>Quantity: </div>
                    <div>Total: </div>
                    <div>Contact: </div>
                    <div>Address: </div>
                    <div>Invoice No: </div>
                    <div>Last Order Status: </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default function OrderPage(){
    return(
        <div className="py-12 mr-28 w-full">
            {orders.length === 0? <h1 className="font-bold text-3xl">No Orders</h1> : 
                (
                    <div className="">
                        <h1 className="font-bold text-3xl">Orders</h1>
                        {orders.map((order, index) => getOrderCard(order))}
                    </div>
                )
            }
        </div>
    )
}