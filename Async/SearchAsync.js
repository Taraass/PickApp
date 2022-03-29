import { db } from '../firebaseStorage'
import { collection, query, where, getDocs } from "firebase/firestore";


export default Search = async() => {
    try {
        let data = [];
        const q = query(collection(db, "Trip"), where("arrive", "==", "Kyiv"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const k = {
                docId: doc.id,
                ...doc.data()
            }
            data.push(k);
            return data;
        });
    } catch (e) {
        alert("Error adding document: ", e.message);
    }
}
