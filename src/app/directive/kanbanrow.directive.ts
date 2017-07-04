import { Directive, Input , HostListener} from '@angular/core';

import { KanbanService } from '../services/kanban.service';

@Directive({
  selector: '[kanbanrow]'
})

export class KanbanrowDirective {
	@Input()
	kanbanrow:any;

  	constructor(private kanbanservice:KanbanService) { 
	  console.log("no of row");
	}
  	
  	@HostListener('dragenter',['$event'])
	onDragEnter(){
		this.kanbanservice.drag_save('row',this.kanbanrow);		
	}

	@HostListener('dragstart')
	OnDragStart(){
		this.kanbanservice.drag("row",this.kanbanrow);
	}
	
	@HostListener('focusout')
	@HostListener('drag')
	OnDragLeave(){
			
			console.log("drag row leave");
		
	}
}
