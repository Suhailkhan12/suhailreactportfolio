import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0GJg6XhDLoiVYJ1me-yGvnXYjNdo2DMk",
  authDomain: "crwn-db-ff875.firebaseapp.com",
  projectId: "crwn-db-ff875",
  storageBucket: "crwn-db-ff875.appspot.com",
  messagingSenderId: "577566107357",
  appId: "1:577566107357:web:4cde35eef44ee6d1795d34",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

//Add data from data js to fire base
// export const addDataAndDocuments = async (dataKey, objectsToAdd) => {
//   const dataRef = collection(db, dataKey);
//   const batch = writeBatch(db);

//   const docRef = doc(dataRef, "ResumeData");
//   batch.set(docRef, objectsToAdd);

//   await batch.commit();
//   console.log("done");
// };

// fetch data from firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const getDataAndDocuments = async () => {
  const collectionRef = collection(db, "Resume");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const DataMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { about, footercontent, header, intro, projectdata, whatidoref } =
      docSnapshot.data();

    acc["resume"] = {
      about,
      footercontent,
      header,
      intro,
      projectdata,
      whatidoref,
    };
    return acc;
  }, {});

  return DataMap;
};
