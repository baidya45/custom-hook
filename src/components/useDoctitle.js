import { useEffect } from "react";

export default function useDoctitle(counter){

    useEffect(()=>{
        document.title = `Count ${counter}`
    },[counter])

}