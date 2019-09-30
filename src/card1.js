import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';      
    const Card1    = ({image}) =>{         
        return( 
        
                <Card className='col-6 card1'>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={3} 
                    value={image.rating}
                />
                    <CardImg top height="100px" src={image} alt="Card image " />
                    <CardBody>
                    <CardTitle>{image.title} </CardTitle>
                    </CardBody> 
                </Card>
                
            
        );
    }
    export default Card1 ;

