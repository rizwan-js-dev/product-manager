'use client'

import { useDispatch, useSelector } from "react-redux";
import {deleteProduct, updateProduct} from '../../../../lib/redux/feature/product/productSlice'
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const UpdateProduct =({ params }: { params: Promise<{ id: string }> })=>{
    // const router = useRouter()
    const { id } = use(params); 

    const products = useSelector((state:any) => state?.product?.items);

    const product = products.find((product:any)=> product.id === id);

    const [name , setName] = useState(product?.name);
    const [price , setPrice] = useState(product?.price);
    const [category, setCategory] = useState(product?.category);


    const dispatch = useDispatch();

    const handlUpdateProduct = (e:any) => {
        e.preventDefault();
        dispatch(updateProduct({ id, name,price,category}));

        // router.push('/');
    };

    const handleDelete = (id:any)=> {
             dispatch(deleteProduct(id))
    }

    

    return (<>
        <div className="container m-5">
        <nav className="bg-gray-100 p-4">
        <ul className="flex justify-around">
            <li><Link href={'/products/new'} className="hover:text-blue-500">Add New Product</Link></li>
            <li><Link href={'/products/'}className="hover:text-blue-500">Products</Link></li>
        </ul>
        </nav>
        <form onSubmit={handlUpdateProduct}>
        <h1 className="text-2xl">Product Update:</h1>
         Name: <input  name="name" type="text" value={name} onChange={(e:any)=> setName(e.target.value)} className="border-[1px] border-gray-200 p-2 rounded-sm" />

         Price : <input name="price" type="text" value={price} onChange={(e:any)=> setPrice(e.target.value)} className="border-[1px] border-gray-200 p-2 rounded-sm"/>

         Category : <input name="name" type="text" value={category} onChange={(e:any)=> setCategory(e.target.value)} className="border-[1px] border-gray-200 p-2 rounded-sm"/>
        
         
         <div className='w-full py-2'>
          <button type="submit" className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Update</button>
        </div>

        </form>

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

export default UpdateProduct