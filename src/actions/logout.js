import { redirect } from "react-router-dom";
import { deleteItem } from "../helper";
import { toast } from "react-toastify";


export async function logoutAction() {
    deleteItem({
        key: 'userName'
    })
    deleteItem({
        key: 'budget'
    })
    deleteItem({
        key: 'expense'
    })
    toast.success('Logged out successfully')
    return redirect('/')
}
