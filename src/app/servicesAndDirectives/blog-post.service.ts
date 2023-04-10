import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {
  }
  getBlogs(search:string,genre:string,page:number){
    return this.http.get('http://localhost:4040/blogs?search=' + search + '&&genre=' + genre + '&&page=' + page)
  }
  getBlog(id:string){
   return this.http.get('http://localhost:4040/blog/' + id)
  }
}
