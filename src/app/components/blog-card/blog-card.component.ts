import { Component, OnInit } from '@angular/core'
import { BlogPostService } from 'src/app/servicesAndDirectives/blog-post.service'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  data: any
  blogPostService: any
  search: any
  gen: string = ''
  c: any = { style: { background: 'var(--lightest-navy)' } }
  constructor(blogPostService: BlogPostService) {
    this.blogPostService = blogPostService
    this.search = { value: '' }
    this.getblogs(this.search, this.gen)
  }
  getblogs(search: any, gen: string) {
    this.blogPostService.getBlogs(search.value, gen).subscribe((d: any) => {
      this.data = d
    })
  }
  back(){
    this.c.style.background="var(--lightest-navy)"
  }
  click(c: any,search:any,gen:string) {
    if (this.c == c) {
      if(c.style.background=="var(--dark-navy)"){
        c.style.background="var(--lightest-navy)"
        gen=''
        this.getblogs(search,gen)
      }
      else{
       c.style.background="var(--dark-navy)"
        this.getblogs(search,gen)
      }
    } else {
      if (this.c.style.background == c.style.background) {
        c.style.background = 'var(--dark-navy)'
        this.getblogs(search,gen)
        this.c = c
      } else {
        c.style.background = 'var(--dark-navy)'
        this.c.style.background = 'var(--lightest-navy)'
        this.getblogs(search,gen)
        this.c = c
      }
    }
  }

  ngOnInit(): void {}
}
