import { Component } from '@angular/core';

import {KanbanService} from './services/kanban.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	data=[];
	    krow=-1;
      kcol=-1;

	constructor(private kanbanservice: KanbanService) { 		
      this.data= kanbanservice.getjson();
      
       this.kanbanservice.kanban_reverse_call$.subscribe(
        data => {
          this.krow=data.row;
          this.kcol=data.col;
        }
      );
      //   this.kanbanservice.kanban_reverse_drop$.subscribe(
      //   data => {
      //     console.log("drag and drop here",data);
      //   }
      // );


    }
    //define a method which is goona return these 
  
     // this.kanbanservice.componentMethodCalled$.subscribe(
     //    () => {
     //      alert('(Component2) Method called!');
          

     //    }
     //  );

	}
