import { Component } from '@angular/core';
import { PostsService } from './post.service';
import { Jsonp } from '@angular/http';

@Component({
    selector: 'my-app',
    template: `<h1>Get Details App</h1>
  <label>ID </label> <input type="id" name="idSel" id="id" ><br><br>
  <label>Name </label><input type="name" name="nameSel" id="name"><br><br>
  <button id="getButton" type="submit" (click)="getDetails()">getDetails</button>
  <button (click)="postDetails()"> Add Details</button>
  <button (click)="deleteDetails()"> Delete Details</button>
  <button (click)="showAllData()"> Show Data</button>
  <h2>Output
  <div >
    <table>
      <tr>
        <th> Employee ID</th>
        <th> Employee Name </th>
      </tr>
      <tr *ngFor = "let post of posts ">
        <td>{{post.id}}</td>
        <td>{{post.name}} </td>
      </tr>
      <tr >
        <td>{{getidPost.id}}</td>
        <td>{{getidPost.name}} </td>
      </tr>

    </table>

  </div> </h2><br>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
}
th {
  text-align: left;
}
</style>
  `,
    providers: [PostsService]

})
export class AppComponent {
    name = 'Angular App';
    postss = 'string';
    posts: Post[];
    getidPost: Post;

    constructor(private httpser: PostsService) {

    }

    getDetails() {

        var inputElement = <HTMLInputElement>document.getElementById('id');

        //document.getElementById('name').setAttribute("readonly", "true");
        alert(inputElement.value);
        this.httpser.getDetails(inputElement.value).subscribe(posts => {
            this.getidPost = posts;
        })
    }

    postDetails() {
        //document.getElementById('name').setAttribute("readonly", "false");
        var idVal = <HTMLInputElement>document.getElementById('id');
        var nameVal = <HTMLInputElement>document.getElementById('name');
        this.httpser.postDetails(idVal.value, nameVal.value).subscribe();
    }

    deleteDetails() {
        var inputElement = <HTMLInputElement>document.getElementById('id');
        this.httpser.deleteDetails(inputElement.value).subscribe();
    }

    showAllData() {
        this.httpser.getAllDetails().subscribe(posts => {
            this.posts = posts;
        });
    }

}


interface Post {
    id: number;
    name: string;
}
