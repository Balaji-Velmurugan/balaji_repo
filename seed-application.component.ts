import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-seed-application',
  templateUrl: './seed-application.component.html',
  styleUrls: ['./seed-application.component.css']
})
export class SeedApplicationComponent implements OnInit {

filesToUpload: Array<File> = [];
  url="http://127.0.0.1:8887/Seed.html";
  constructor(private sanitizer: DomSanitizer, private http : HttpClient) { }

  ngOnInit() {
  }

upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
    this.http.post('http://localhost:3000/predict', formData)
        //.map(files => files.json())
        .subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}
}
