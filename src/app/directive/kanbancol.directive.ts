import { Directive, Input, HostListener } from '@angular/core';

import { KanbanService } from '../services/kanban.service';

@Directive({
  selector: '[kanbancol]'
})
export class KanbancolDirective {
	@Input()
	kanbancol:any;

  	constructor(private kanbanservice:KanbanService) { 
	  console.log("no of col");
	}

//save it on the services for later used
	@HostListener('dragend')
	OnDragEnd(){
		// console.log("dragg end column");
		this.kanbanservice.change_kanban_value();
	}
//this simbolize that when someone on it
	@HostListener('dragenter',['$event'])
	onDragEnter(){
		//console.log("drag enter");
		this.kanbanservice.drag_save("col",this.kanbancol);
	}

	@HostListener('dragstart')
	OnDragStart(){
		// console.log("dragg start column",this.kanbancol);
		this.kanbanservice.drag("col",this.kanbancol);
	}

}
