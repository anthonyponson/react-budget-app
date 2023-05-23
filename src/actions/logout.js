import { redirect } from "react-router-dom";

export async function logoutAction() {
    return redirect('/')
}
