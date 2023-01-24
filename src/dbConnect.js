import { cert, initializeApp , cert, getApps} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
//TODO: need to import the service Account from secret file


export default function dbConnect (){
    //check if NOT connected
    if(!getApps().length){
        //connect
        initializeApp({
        credential: cert(service_account)
    })
       
    }

    //return the db connection
    return getFirestore()
}