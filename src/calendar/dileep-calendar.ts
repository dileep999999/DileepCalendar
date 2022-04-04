import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'dileep-calendar',
    templateUrl: './dileep-calendar.html',
})

export class DileepCalendar implements OnInit{
    public minDate: Date = new Date ("01/01/1970");
    public maxDate: Date = new Date ("12/31/2040");
    public value: Date = new Date();
    showEvent: boolean = false;
    events=  [];
    eventData: any;
    eventValue: string = '';
    hideBtn:boolean = true;
    getData = [];
    customEvent: string = ''
    showDiv: boolean = true;
    constructor(private datePipe: DatePipe){}
    ngOnInit(){
    }
    addStyle(event:any){
      let span = document.createElement('sup');
      span.innerHTML = '*';
      let style = this.datePipe.transform(event.date,'dd-MM-yyyy');
      if(sessionStorage.getItem('events')){
        this.getData = JSON.parse(sessionStorage.getItem('events'));
        this.getData.map(x=>{
          let data = x.key.split('-');
          let styleData = style.split('-');
          if(data[1] == styleData[1] && styleData[0] == data[0]){
            event.element.appendChild(span);
            event.element.setAttribute("style","");
          }
        });
      }
    }
    showEventDetails(event: any){
      console.log(this.value);
      this.showEvent = false;
      this.eventData = event;
      if(sessionStorage.getItem('events')){
        this.getData = JSON.parse(sessionStorage.getItem('events'));
        this.customEvent = '';
        this.getData.map(x=>{
          if(x.key === this.datePipe.transform(event.value,'dd-MM-yyyy')){
            this.customEvent = this.customEvent + x.value + '</br>';
          }
        });
        if(this.customEvent!=''){
          this.showDiv = false;
        }
      }
    }
    dataEntered(){
      if(this.eventValue!='')
        this.hideBtn = false;
      else
        this.hideBtn = true;
    }
    Save(){
      this.events.push({key : this.datePipe.transform(this.eventData.value,'dd-MM-yyyy'),value : this.eventValue})
      if(sessionStorage.getItem('events')){
        let data = JSON.parse(sessionStorage.getItem('events'));
        data.map(x=>{
          this.events.push({key: x.key,value: x.value});
        });
        sessionStorage.clear();
      }
      sessionStorage.setItem('events',JSON.stringify(this.events));
      this.customEvent = this.customEvent + this.eventValue + '</br>';
      this.showDiv = false;
      this.eventValue = '';
      this.hideBtn = true;
      window.location.href = '/';
    }
  }
  