import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html' 
})
export class PostCreateComponent{

    post: '';
    posts = [];

    submitPost(){
        console.log(this.post);
        this.posts.push(this.post);
        this.post = '';
    }
}