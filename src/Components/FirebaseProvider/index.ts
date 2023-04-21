import { db, auth } from '../../Database/firebaseConnection.js'
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
    async getTodos() : Promise<Todo[]>
    {
        let list: Todo[] = []; 
        async function loadTodo(){
            await onSnapshot(collection(db,"todos"),(snapshot)=>{
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
        return loadTodo();
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
        await deleteDoc(doc(db,"todos",id.toString()))
        .then(()=>{
            return true;
        }).catch(()=>{
            return false;
        });
    }
    async updateTodo(id,todo: Todo)
    {
        await updateDoc(doc(db,"todos",id.toString()),{
            titulo: todo.titulo,
            descricao: todo.descricao
        }).then(()=>{
            return true;
        }
        ).catch(()=>{
            return false;
        });
    }
    async login(usuario, senha)
    {
        await signInWithEmailAndPassword(auth,usuario,senha)
    .then((userCredential)=>{
        alert("Logado com sucesso!");
    }).catch((error)=>{
      if(error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found')
        alert("Dados de login incorreta!");
      else
        throw error;
    })
    }
    async logout()
    {
        await signOut(auth).then(()=>{
            alert("Deslogado com sucesso!");
        }).catch((error)=>{
            throw error;
        });
    }
    async cadastro(email, senha)
    {
        await createUserWithEmailAndPassword(auth,email,senha)
            .then((user)=>{
            console.log("Usuário criado com sucesso!");
                return true
            }).catch((error)=>{
            if(error.code === 'auth/weak-password'){
                alert("Senha fraca!");
                return false;
            }    
            else if(error.code === 'auth/email-already-in-use'){
                alert("Email já cadastrado!");
                return false;
            }
            else
                throw error;
            });
    }
    async getLastId()
    {
        if(FirebaseProvider.lastId === undefined)
        {
            await this.getTodos().then((data)=>{
                FirebaseProvider.lastId = data.at(-1)?.id;
            })
        }   
        return FirebaseProvider.lastId;
    }
}