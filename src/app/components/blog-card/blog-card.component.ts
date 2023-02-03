import { Component, OnInit } from '@angular/core'
import { BlogPostService } from 'src/app/servicesAndDirectives/blog-post.service'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  blogservice: any | undefined
  data: any | undefined
  search: any = ''
  gen: string = ''
  pageno: number = 1
  status: string = 'uncall'
  error: any | undefined
  total: Number | undefined
  constructor(blogPostService: BlogPostService) {
    this.blogservice = blogPostService
    this.getblogs()
  }
  getblogs() {
    this.blogservice.getBlogs(this.search, this.gen, this.pageno).subscribe(
      (d: any) => {
        this.data = d
        this.total = this.data.blogs.length
      },
      (e: any) => {
        this.status = 'error'
        this.error = e.message
      },
      () => {
        this.status = 'call'
      }
    )
  }
  getcat(cat: string) {
    if (cat == this.gen) {
      this.gen = ''
    } else {
      this.gen = cat
    }
  }
  ngOnInit(): void {}
}
