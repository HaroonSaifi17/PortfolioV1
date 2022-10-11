import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
interface Posts{
  id: number;
  title:string;
}
interface Blog {
  posts:Posts;
}
export class BlogPostService {
  blog1: Blog = {
    posts:{
      id : 2,
      title: "hlo"
    }
  }

  constructor() { }
}
