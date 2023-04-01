import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    templateUrl:'./Property-Card.Component.html',
    styleUrls:['./Property-card.Component.css']
})
export class PropertyComponent{
Property:any={
    Id:1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000

}
}