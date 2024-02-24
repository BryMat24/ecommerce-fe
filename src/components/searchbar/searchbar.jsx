import { Input } from "@/components/ui/input"

export default function SearchBar(){
    return(
        <div className="h-14 w-full flex items-center">
            <div className="w-64 text-center font-bold">LOGO</div>
            <Input className="w-2/5 active:border-0" placeholder="Search for products"/>
        </div>
    )
}