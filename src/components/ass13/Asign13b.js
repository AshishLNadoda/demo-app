import React from 'react'; 
class Zpp extends React.Component { 

state = { 
    company: 'Nadoda' 
}; 
componentDidMount() { 
    
    setTimeout(() => { 
    this.setState({ company: 'Ashish' }); 
    }, 1000); 
} 
componentDidUpdate() { 
    document.getElementById('warning').innerHTML = 
    'P.s: NADODA is also known as ' + this.state.company; 
} 
render() { 
    return ( 
    <div> 
        <h1 style={{ 
        margin: 'auto', 
        width: '50%', 
        padding: 20, 
        marginTop: '10%', 
        border: 'solid 1px black', 
        textAlign: 'center', 
        fontSize: 18, 
        }}> 
        MY NAME IS  : 
        {this.state.company} 
        <div id="warning"></div> 
        </h1> 
    </div> 
    ); 
} 
} 
export default Zpp;