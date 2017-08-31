import { Component, Input } from '@angular/core';


@Component({
  selector: 'thing',
  template: `
  <div class="container">
  <h2>Dynamicly Rendered Component</h2>
  <pre>{{things|| json}}</pre>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>First Input</th>
        <th>Second Input</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{things.glass.name}}</td>
        <td>{{otherThings}}</td>
      </tr>
    </tbody>
  </table>
</div>`
})
export class RowContentComponent {
  @Input() things:any = {};
  @Input() otherThings: any = {};
  constructor() { }

}