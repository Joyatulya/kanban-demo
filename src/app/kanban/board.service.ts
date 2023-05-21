import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Board, Task } from './board';
import firebase from 'firebase/compat/app';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}
  collection_name = 'boards';

  // Create new board
  async createBoard(data: Board) {
    const user = await this.auth.currentUser;
    return this.db.collection(this.collection_name).add({
      ...data,
      uid: user?.uid,
      tasks: [{ description: 'Hello!', label: 'yellow' }],
    });
  }

  async deleteBoard(boardId: string) {
    return this.db.collection(this.collection_name).doc(boardId).delete();
  }

  async updateTasks(boardId: string, tasks: Task[]) {
    return this.db
      .collection(this.collection_name)
      .doc(boardId)
      .update({ tasks });
  }

  async removeTask(boardId: string, task: Task) {
    return this.db
      .collection(this.collection_name)
      .doc(boardId)
      .update({ tasks: firebase.firestore.FieldValue.arrayRemove(task) });
  }

  async getUserBoards() {
    return this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db.collection<Board>(this.collection_name, (ref) =>
            ref.where('uid', '==', user.uid).orderBy('priority')
          ).valueChanges({idField : 'id'})
        } else {
          return []
        }
      })
    );
  }

  

}
