// import { createContext, useContext, useState, useEffect } from "react";
// import {
//   auth,
//   signInWithGoogle,
//   createUserProfileDocument,
//   getUserDetails,
//   updateUserDetails,
//   signOut,
// } from "../hooks/firebase";

// const AuthContext = createContext();

// export function AuthWrapper({ children }) {
//   const [appState, setAppState] = useState({
//     user: null,
//     isUserDetailsComplete: false,
//   });

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         getUserDetails(user).then((userDetails) => {
//           setAppState({
//             userAuth: user,
//             userDetails,
//           });
//         });
//       } else {
//         setAppState({
//           userAuth: null,
//           userDetails: null,
//         });
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         appState,
//         signInWithGoogle,
//         createUserProfileDocument,
//         updateUserDetails,
//         signOut,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuthContext() {
//   return useContext(AuthContext);
// }
