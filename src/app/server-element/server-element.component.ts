import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {type:string, name:string, content: string};

  constructor(){
    console.log("constructor");
  }
  
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }


}
