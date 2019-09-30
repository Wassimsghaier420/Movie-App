import React from 'react' ;
const Movies =({value,onChange=()=>{}})=> {
    return ( 
         
            <div className="Card-1">
                <center > 
                <input type="text"   
                   onChange={(event)=>onChange(event.target.value)}
                   id="Card-1-text" 
                   value={value}/>
                <button type="button" id="header-search" value="Search">Search</button>   <h5 className='title'>Minimum Movies Rating 
                </h5>
        </center>
        </div>
                  
    
     )
}


export default Movies;