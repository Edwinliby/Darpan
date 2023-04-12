// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// //import firestore to store user data {name, email, phoneNo, College or School, year of study, branch, city, state, country, uid, isUserDetailsComplete}}
// import {
//   getFirestore,
//   collection,
//   doc,
//   setDoc,
//   updateDoc,
//   getDoc,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCLF48sJlUTSsKzZTAPgMopATDD4mubKzk",
//   authDomain: "darpan-d0cc2.firebaseapp.com",
//   projectId: "darpan-d0cc2",
//   storageBucket: "darpan-d0cc2.appspot.com",
//   messagingSenderId: "426620127734",
//   appId: "1:426620127734:web:f050a8c7b93b6371275fd7",
//   measurementId: "G-XX3W80GSFJ",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const userC = collection(db, "users");
// const provider = new GoogleAuthProvider();

// const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

//       console.log("token", token);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const createUserProfileDocument = async (
//   userAuth,
//   {
//     name,
//     phoneNo,
//     collegeOrSchool,
//     CollegeOrSchoolName,
//     yearOfStudy,
//     branch,
//     city,
//     state,
//   }
// ) => {
//   if (!userAuth) return;

//   const userRef = doc(userC, userAuth.uid);
//   const snapShot = await getDoc(userRef);

//   if (!snapShot.exists()) {
//     const { email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userRef, {
//         name,
//         email,
//         phoneNo,
//         collegeOrSchool,
//         CollegeOrSchoolName,
//         yearOfStudy,
//         branch,
//         city,
//         state,
//         createdAt,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }

//     try {
//       await updateDoc(userRef, {
//         isUserDetailsComplete: true,
//       });
//     } catch (error) {
//       console.log("error updating user", error.message);
//     }
//   }
//   return userRef;
// };

// const getUserDetails = async (userAuth) => {
//   if (!userAuth) return;

//   const userRef = doc(userC, userAuth.uid);
//   const snapShot = await getDoc(userRef);

//   if (snapShot.exists()) {
//     return snapShot.data();
//   } else {
//     return {
//       name: "",
//       phoneNo: "",
//       collegeOrSchool: "",
//       CollegeOrSchoolName: "",
//       yearOfStudy: "",
//       branch: "",
//       city: "",
//       state: "",
//       isUserDetailsComplete: false,
//     };
//   }
// };

// const updateUserDetails = async (
//   userAuth,
//   {
//     name,
//     phoneNo,
//     collegeOrSchool,
//     CollegeOrSchoolName,
//     yearOfStudy,
//     branch,
//     city,
//     state,
//   }
// ) => {
//   if (!userAuth) return;

//   const userRef = doc(userC, userAuth.uid);
//   const snapShot = await getDoc(userRef);

//   if (snapShot.exists()) {
//     try {
//       await updateDoc(userRef, {
//         name,
//         phoneNo,
//         collegeOrSchool,
//         CollegeOrSchoolName,
//         yearOfStudy,
//         branch,
//         city,
//         state,
//       });
//     } catch (error) {
//       console.log("error updating user", error.message);
//     }

//     try {
//       await updateDoc(userRef, {
//         isUserDetailsComplete: true,
//       });
//     } catch (error) {
//       console.log("error updating user", error.message);
//     }
//   } else {
//     throw new Error("User not found");
//   }

//   return userRef;
// };

// const signOut = () => {
//   auth.signOut();
// };

// export {
//   auth,
//   signInWithGoogle,
//   createUserProfileDocument,
//   getUserDetails,
//   updateUserDetails,
//   signOut,
// };
