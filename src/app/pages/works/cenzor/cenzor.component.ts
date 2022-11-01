import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  public newWords = '';
  public allWords = 'java, tottenham';
  public arrWords = this.allWords.split(', ');
  public isWords = true; 

  public wordPlaceholder = 'word here...';
  public textPlaceholder = 'text here...';

  public myText = '';
  public arrText!: Array<string>;
  public isText = true; 
  constructor() { }

  ngOnInit(): void {
  }
  addWords(): void{
    if (this.newWords == ''){
      this.wordPlaceholder = `Please write a word!`;
      this.isWords = false;
    }
    else{
      this.arrWords.push(this.newWords);
      this.allWords = this.arrWords.join(', ');
      this.newWords = '';
      this.wordPlaceholder = 'word here...';
      this.isWords = true;
    }
  }

  resertWords(): void {
    this.allWords = '';
    this.arrWords = this.allWords.split('');
    this.myText = '';
    this.arrText = this.myText.split('');
    this.isWords = true;
    this.isText = true;
  }
  
  cenzorText(): void {
    if (this.myText == ''){
      this.textPlaceholder = `Please write a text!`;
      this.isText = false;
    }
    else{
      this.arrText = this.myText.split(' ');
      for (let i=0; i<this.arrText.length; i++){
        for (let j=0; j<this.arrWords.length; j++){
          if (this.arrText[i] == this.arrWords[j]){
            let l = this.arrText[i].length;
            this.arrText[i] = '*'.repeat(l);
          }
        }
      }
      this.myText = this.arrText.join(' ');
      this.textPlaceholder = 'text here...';
      this.isText = true;
    }
  }
}
