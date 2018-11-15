import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post{
    title: string;
    content: string;
    id?: any;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    user;
    pass;
    postsCollection: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;

    constructor(private db: AngularFirestore) {}

    ngOnInit(): void {
        this.postsCollection = this.db.collection('posts', res => {
            // this.posts = res;
            // console.log(this.posts, 'hi');
            console.log(res);
            return res;
        });
        this.posts = this.postsCollection.valueChanges()
        // console.log(this.posts, 'asd');
        
    }

}