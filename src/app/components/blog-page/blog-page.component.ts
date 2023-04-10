import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from 'src/app/servicesAndDirectives/blog-post.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
 id:string=''
  data:any=[{title:''}]
  constructor(router:ActivatedRoute ,blogservice:BlogPostService) { 
    router.params.subscribe(p=>{
       this.id= p['id']
    })
    blogservice.getBlog(this.id).subscribe(d=>{
      this.data=d
    },e=>{
    
    })
  }

  ngOnInit(): void {
  }

}
