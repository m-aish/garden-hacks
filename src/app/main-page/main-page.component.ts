import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  selectedFruits='';
  selectedVegs='';
  selectedSpices='';
  recipes=[];
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  getGarden(){
    console.log(this.selectedFruits);
    console.log(this.selectedSpices);
    console.log(this.selectedVegs);
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients='+this.selectedFruits+","+this.selectedVegs+","+this.selectedSpices+"&number=10&apiKey=995cfee46718495bb04b36e88c48abd2")
    .then(response => response.json())
  .then(data => {console.log(data);this.recipes=data;});
  }
}
