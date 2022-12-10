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
    this.getblogs(this.search, this.gen, {})
  }
  getblogs(search: any, gen: string, h2: any) {
    this.blogPostService.getBlogs(search.value, gen).subscribe((d: any) => {
      this.data = d
      if (d.total == 0) {
        h2.style.display = 'block'
      } else {
        h2.style.display = 'none'
      }
    })
  }
  back() {
    this.c.style.background = 'var(--lightest-navy)'
  }
  click(c: any, search: any, gen: string, h2: any) {
    if (this.c == c) {
      if (c.style.background == 'var(--dark-navy)') {
        c.style.background = 'var(--lightest-navy)'
        gen = ''
        this.getblogs(search, gen, h2)
      } else {
        c.style.background = 'var(--dark-navy)'
        this.getblogs(search, gen, h2)
      }
    } else {
      if (this.c.style.background == c.style.background) {
        c.style.background = 'var(--dark-navy)'
        this.getblogs(search, gen, h2)
        this.c = c
      } else {
        c.style.background = 'var(--dark-navy)'
        this.c.style.background = 'var(--lightest-navy)'
        this.getblogs(search, gen, h2)
        this.c = c
      }
    }
  }

  ngOnInit(): void {}
}
