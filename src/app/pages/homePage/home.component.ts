import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Services/list.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  title: string = '';

  constructor(private apiService: PostService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost() {
    const newPost: Post = {
      id: '',
      title: this.title,
      active: false,
      CreatedDate: '',
      ModifiedDate: '',
      userId: ''
    };

    this.apiService.createPost(newPost).subscribe(() => {
      alert('Post created successfully!');
      this.title = '';
      this.getPosts();
    });
  }

  deletePost(post: Post) {
    this.apiService.deletePost(post.id).subscribe(() => {
      alert('Post deleted successfully!');
      this.getPosts();
    });
  }

  editPost(post: Post) {
    // Code to navigate to the edit page and pass the post ID
    this.router.navigate(['/edit-post', post.id]);
  }
}
