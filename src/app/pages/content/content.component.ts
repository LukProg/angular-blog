import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = "https://static.valorantzone.gg/news/2022/09/06145009/VCT23_Masters.jpg"
  contentTitle: string = ""
  contentDescription: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure provident debitis libero aspernatur sint unde, sit aperiam in incidunt, odio qui exercitationem. Impedit nam ipsam optio. Dolorem hic obcaecati distinctio."
  private id: string | null = "0"

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
