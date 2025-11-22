import React from 'react'
import Modal from './Modal'
import { BASE_URL } from '../form/URL'

export default function DeleteCrud({isOpen,onClose,editData}) {
    console.log("iafdfask", isOpen)

    const handleDelete = async () => {
        try{
            const response = await fetch (`${BASE_URL}/users/${editData.id}`,{
                method: "DELETE",
        });
           const result = response.json();
           console.log(result); 
            onClose();
            }catch(error){
                console.log(error);
            }
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
        <h3>DO you really want to delete this employee details</h3>
        <div className='flex justify-center gap-10 '>
        <button  className="p-2 m-2 border-1 w-20 rounded-xl bg-red-500 text-black cursor-pointer" onClick={handleDelete}>
            Delete
        </button>
        <button onClick={onClose}  className="p-2 m-2 border-1 w-20 rounded-xl cursor-pointer">
            Close
        </button>
        </div>
    </Modal>
  )
}
