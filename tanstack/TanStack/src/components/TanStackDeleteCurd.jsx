import React from 'react'
import Modal from './Modal'
import { BASE_URL } from "../form/url";
import axios from 'axios';

export default function TanStackDeleteCrud({isOpen,onClose,editData, setLoading, loading}) {
    const handleDelete = async () => {
        setLoading(true);
        try{
            const response = await axios.delete(`${BASE_URL}/users/${editData.id}`,{
        });
           console.log(response); 
            onClose();
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
        <h3>Do you really want to delete this employee details?</h3>
        <div className='flex justify-center gap-10 '>
        <button  className="p-2 m-2 border w-20 rounded-xl font-semibold bg-purple-950 text-white hover:bg-purple-900 cursor-pointer" onClick={handleDelete} disabled={loading}>
            Delete
        </button>
        <button onClick={onClose}  className="p-2 m-2 border w-20 rounded-xl cursor-pointer">
            Close
        </button>
        </div>
    </Modal>
  )
}
