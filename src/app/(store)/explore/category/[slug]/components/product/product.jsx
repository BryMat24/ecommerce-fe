import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import Link from 'next/link';

const getProductCard = (product) => {
    return (
        <Link href={`/product/${product.id}`} className='mx-4 mb-8 border-none'>
            <Card className="w-[20rem] h-[32rem] border-none shadow-2xl">
                <CardHeader className="p-0">
                    <div className='w-[20rem] h-[20rem] bg-primary rounded-md'>

                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <div className='font-bold text-red-500'>Best Seller</div>
                    <div className='font-bold'>{product.name}</div>
                    <div className='font-light'>{product.description}</div>
                    <div className='mt-4 font-semibold'>SGD ${product.price}</div>
                </CardContent>
            </Card>
        </Link>
    )
}
export default function CategoryProduct({products}){
    return(
        <div className="w-full flex flex-wrap mt-8 ml-4">
            {products.map(product => getProductCard(product))}
        </div>
    )
}