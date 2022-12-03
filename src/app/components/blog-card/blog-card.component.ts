import { Component, OnInit } from '@angular/core'
import { BlogPostService } from 'src/app/servicesAndDirectives/blog-post.service'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  data: any
  constructor(blogPostService: BlogPostService) {
    blogPostService.getBlogs().subscribe((d) => {
      this.data = d
    })
  }

  ngOnInit(): void {}
}
