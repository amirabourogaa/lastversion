import { USER_STATE_CHANGE, USERS_STATE } from '../constants/index'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            } else {
                dispatch({type: USER_STATE_CHANGE, currentUser: null})
            }
        })
    })
}

export const fetchVideos = () => {
    firebase.firestore()
        .collection("videos")
        .where('iduser', '==', "12")
        .get()
        .then((querySnapshot) => {
            if(!querySnapshot.exists){
                console.log('Total videos: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot.data());
                });
            }
        })
        .catch(err => console.log(err))
}

export const UpdateUser = (user) => {
    return ((dispatch) => {
        dispatch({ type: USER_STATE_CHANGE, currentUser: user })
    })
}

export const FetchUsers = () => {
    return ((dispatch) => {
        firebase.firestore()
        .collection("users")
        .get()
        .then((querySnapshot) => {
            const users = []
            querySnapshot.forEach(documentSnapshot => {
                users.push(documentSnapshot.data())
            })
            dispatch({type: USERS_STATE, users: users})
        })
        .catch(err => console.log(err))
    })
}

export const RemoveUser = ({email}) => {
    return ((dispatch) => {
        firebase.firestore()
        .collection("users")
        .where('email', '==', `${email}`)
        .delete()
        .then(() => {
            console.log('userDeleted !')
        })
        .catch(err => console.log(err))
    })
}