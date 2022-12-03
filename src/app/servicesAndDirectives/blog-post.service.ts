import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {
  }
  getBlogs(){
    return this.http.get('http://localhost:4040/blogs')
  }
}
