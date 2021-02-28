import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  categories:Array<string> = [];
  cateFilter:Array<string> = [];
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  async getData(){
    const resp = await fetch(`https://api.publicapis.org/categories`)
    this.categories = await resp.json()
    this.cateFilter = this.categories;
  }
  filterData(val:any){
    // console.log(this.categories);
    let query = val.target.value;
    const data = this.categories.filter((item: any) => {
      const matchers: boolean[] = []
      query !== ''
        ? matchers.push(
          query
              .toLowerCase()
              .split(' ')
              .every((v: any) => item.toLowerCase().includes(v))
          )
        : matchers.push(true)
      
      return matchers.every((i) => i === true)
    })
    this.cateFilter = data
  }
}
