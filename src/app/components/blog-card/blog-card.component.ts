import { Component, OnInit } from '@angular/core'
import { BlogPostService } from 'src/app/servicesAndDirectives/blog-post.service'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  data: any
  blogPostService:any
  search:any
  gen:string="";
  constructor(blogPostService: BlogPostService) {
    this.blogPostService=blogPostService
    this.search={value:""}
    this.getblogs(this.search)
  }
  getblogs(search:any){
    this.blogPostService.getBlogs(search.value).subscribe((d:any) => {
      this.data = d
    })
  }

  ngOnInit(): void {}
}
