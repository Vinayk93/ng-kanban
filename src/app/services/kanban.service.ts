import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class KanbanService {

  dragstart={
  	row:-1,
  	col:-1
  };

  dragon={
  	row:-1,
  	col:-1
  };

  kanban_json=[{
			column:[{
				"name":"somedata"
			},{
				"name":"d2"
			}]
		},{
			column:[{
				"name":"ok"
			},{
				"name":"somethin"
			}]
		}];
	//temporary varaible 
	temporary={row:-2,col:-2};

	//call component from here 
	private kanbanMethodCallSource = new Subject<any>();
  // Observable string streams
  kanban_reverse_call$ = this.kanbanMethodCallSource.asObservable();

  callcomponentdrag(sendpoint) {
     this.kanbanMethodCallSource.next(sendpoint);
  }

  constructor() { }

	getjson(){
		return this.kanban_json;
	}

	changejson(new_json){
		try{
			this.kanban_json=new_json;

		}catch(e){
			return e;
		}
	}

	drag_save(here,value){

		if(this.temporary[here]==value  ){
			//then it is repeated
		}else{
			
			this.dragon[here]=value;
			this.temporary[here]=value;
			this.switching_kanban_value();
		}
		// console.log(this.dragon);
	}

	drag(here,value){
		this.dragstart[here]=value;
		//when both of them are not -1 then take them as they are dragging
		if(this.remove_minus_one(this.dragstart.row,this.dragstart.col) ){
			console.log("these are dragging",this.dragstart);
		}
	}

	//a b are the old value and x,y is the new value when drop
	change_kanban_value(){
		console.log("we need to change some value here",this.dragon,"from",this.dragstart);
		//apply changes
		/*
		remove this.dragstart and put in this.dragon
		*/
		var a =this.kanban_json[this.dragstart.row].column[this.dragstart.col];
		if( this.remove_minus_one(this.dragon.row,this.dragon.col) ){
			this.kanban_json[this.dragstart.row].column.splice(this.dragstart.col,1);
			//delete it
			this.kanban_json[this.dragon.row].column.splice(this.dragon.col,0,a);
		}

		this.dragstart.row=-1;
		this.dragstart.col=-1;
		this.dragon.row=-1;
		this.dragon.col=-1;
		this.temporary={row:-2,col:-2};
		this.callcomponentdrag(this.dragon);
	}

	//generate a template over there to form a blank just for understanding
	switching_kanban_value(){
		//only take non -1 value
		if( this.remove_minus_one(this.dragon.row,this.dragon.col) ){
			this.callcomponentdrag(this.dragon);
		}
	}

	remove_minus_one(x,y){
		if(x==-1 || y ==-1){
			return false;
			}else{ return true;
		}
	}

}
