'use client'

import { deleteProduct } from "@/lib/redux/feature/product/productSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";


const Products =()=>{
    const dispatch = useDispatch();
    const products = useSelector((state:any) => state?.product?.items);
    
    const handleDelete = (id:any)=> {
     dispatch(deleteProduct(id))
    }
    // 
    return (<>
       <div className="container m-5">
       <nav className="bg-gray-100 p-4">
        <ul className="flex justify-around">
            <li><Link href={'/products/new'} className="hover:text-blue-500">Add New Product</Link></li>
            <li><Link href={'/products/'}className="hover:text-blue-500">Products</Link></li>
        </ul>
        </nav>

       <h1 className="text-2xl">Product List:</h1>
        <table className="w-full border-collapse border border-slate-400">
        <thead><tr>
         <th className="border border-slate-300">Id</th> 
         <th className="border border-slate-300">Name</th> 
         <th className="border border-slate-300">Price</th> 
         <th className="border border-slate-300">Category</th>  
         <th className="border border-slate-300">Action</th>
         </tr>
         </thead>      
         <tbody>
            {products && products?.map((product:any)=> (
            <tr key={product.id}> 
            <td className="text-center border border-slate-300"><span >{product.id}</span></td>
            <td className="text-center border border-slate-300"><span >{product.name}</span></td>
            <td className="text-center border border-slate-300"><span >{product.price}</span></td>
            <td className="text-center border border-slate-300"><span >{product.category}</span></td>
            <td className="text-center border border-slate-300"><button onClick={()=>handleDelete(product.id)} className="m-2">Delete</button>
                <Link href={'/products/edit/'+product.id}>Edit</Link>
            </td>
             
            </tr>
            ))}
        </tbody>
        </table>
        </div>
    </>)
}

export default Products