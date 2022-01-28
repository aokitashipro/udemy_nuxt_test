import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function({
  $firebase,
  store,
  route,
  redirect
}){
 const auth = getAuth($firebase)
 if(!store.getters['auth/getLoggedIn']){
   onAuthStateChanged(auth, user =>{
     if(user){
       store.dispatch('auth/addUserInfo', user)
     } else if(!route.path.match(/\/auth\//)){
      redirect('/auth/login')    
     }
   })
 }

//  const isAuthenticated = store.getters['auth/getLoggedIn']
//  if(!isAuthenticated && !route.path.match(/\/auth\//)){
//    redirect('/auth/login')
//  } 
}