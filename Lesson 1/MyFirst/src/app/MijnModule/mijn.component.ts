import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector:"mein",
    templateUrl:"./mijn.component.html"
})
export class MijnComonent implements OnInit, OnDestroy
{
    private name: string;

    constructor()
    {
        this.name = "Hallo";
    }
    ngOnDestroy(): void {
  
    }
    ngOnInit(): void {

    }

}