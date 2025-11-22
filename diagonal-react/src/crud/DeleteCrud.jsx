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
        <h3>Do you really want to delete this employee details?</h3>
        <div className='flex justify-center gap-10 '>
        <button  className="p-2 m-2 border w-20 rounded-xl font-semibold bg-purple-950 text-white hover:bg-purple-900 cursor-pointer" onClick={handleDelete}>
            Delete
        </button>
        <button onClick={onClose}  className="p-2 m-2 border w-20 rounded-xl cursor-pointer">
            Close
        </button>
        </div>
    </Modal>
  )
}
