import { db, auth } from '../../Database/firebaseConnection'
import {
    doc,
    setDoc,
    collection,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    onSnapshot,
    deleteDoc,
    snapshotEqual,
    limitToLast
  } from 'firebase/firestore'
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth'

type Todo = {
    id: number
    titulo: string
    descricao: string
};
export default class FirebaseProvider{
    private static lastId;
    async getTodos()
    {
        let list: Todo[] = []; 
        const dados = onSnapshot(collection(db,"todos"),(snapshot)=>{
            snapshot.forEach((doc)=>{
                list.push({
                    id: parseInt(doc.data().id),
                    titulo: doc.data().titulo,
                    descricao: doc.data().descricao
                })
            })
        })
        return list;
    }
    async postTodos(todo: Todo)
    {
        await addDoc(collection(db,"posts"),{
            id: await this.getLastId()+1,
            titulo: todo.titulo,
            autor: todo.descricao
        }).then(()=>{ 
            return true 
        }).catch(()=>{
            return false;
        })
    }
    async deleteTodo(id: number)
    {
        
    }
    async updateTodo(id,todo: Todo)
    {

    }
    async login(usuario, senha)
    {

    }
    async logout()
    {

    }
    async cadastro()
    {

    }
    async getLastId()
    {
        if(FirebaseProvider.lastId === undefined)
            return (await this.getTodos()).length;
        return FirebaseProvider.lastId;
    }
}