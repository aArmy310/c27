class Bob {
	constructor (x,y){
		
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
            
        
		}
        display () 
        {
			var pos =this.body.position;
            ellipse(pos.x, pos.y, this.width, this.height);
            fill(255);
		}
	}
}

