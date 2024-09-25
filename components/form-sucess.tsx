import { FaRegCheckCircle } from "react-icons/fa";

interface FormSucessProps{
    message?:string
}


export default function Formsucess({message}:FormSucessProps) {


    if (!message){
        return null;
    }

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md  flex items-center gap-x-2 text-sm text-emerald-500 ">
     <FaRegCheckCircle className="h-4 w-4"/>
     <p>{message}</p>
    </div>
  )
}
