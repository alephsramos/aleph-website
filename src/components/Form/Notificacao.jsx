// import { database } from "../../firebaseConfig";
// import { ref, onChildAdded } from "firebase/database";
// import { useEffect } from "react";

// const useRealtimeNotifications = () => {
//     useEffect(() => {
//         const dbRef = ref(database, "formData");

//         onChildAdded(dbRef, (snapshot) => {
//             const newData = snapshot.val();
//             alert(`Novo formulário recebido: Nome: ${newData.name}, Email: ${newData.email}`);
//         });
//     }, []);
// };

// export default useRealtimeNotifications;
