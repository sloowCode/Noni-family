import React,{Component} from 'react';
import Navbar from '../components/navigation/navbar';
import LandingContent from '../components/contents/landingcontent';
import Footer from '../components/navigation/footer';

class Landing extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <LandingContent/>
                <Footer/> 
                
            
            </div>
            
        );
    }
}





export default Landing;