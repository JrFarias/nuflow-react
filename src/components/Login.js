import React, {Component} from 'react';
// import {Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button} from 'react-mdl';
import {Grid, Cell, Textfield, Button, FABButton} from 'react-mdl';
import {Link} from 'react-router';
// import service from '../services/service';
import axios from 'axios';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        };
        this.login = this.login.bind(this);
    }

    inputChange(nome, e){
        this.setState({[nome]: e.target.value});
    }

    login(e){
        e.preventDefault();
    
         var user = {
            login: this.state.email,
            password: this.state.password
        };
        axios.post('https://nuflow.herokuapp.com/user/singIn', user).then((result)=>{
            localStorage.setItem('token',result.data.token);
            this.context.router.push('/Feed');
           
        }).catch((err)=>{
              alert(err);
        });
    }

	render(){
		return(
            <Grid className="section--center">
                <Cell  offsetDesktop={3} col={6} offsetTablet={1} tablet={6} phone={5} >
                    <div className="mdl-shadow--2dp formLogin ">
                        <form  onSubmit={this.login} method="post" style={{paddingTop:"30px"}}>
                            <Grid >
                                <Cell offsetDesktop={3} col={6}  offsetTablet={1} tablet={7} phone={6}>
                                <Textfield type="email"
                                        onChange={this
                                        .inputChange
                                        .bind(this, 'email')}
                                        label="exemplo@exemplo.com"
                                      
                                    />
                                <Textfield type="password"
                                         onChange={this
                                        .inputChange
                                        .bind(this, 'password')}
                                        label="Password"
                                    />
                                </Cell>
                            </Grid>
                            <Grid>
                                <Cell offsetDesktop={4} col={7}   offsetTablet={3} tablet={7} offsetPhone={1} phone={5}>
                                    <Button raised colored type="submit">entrar</Button>
                                   <FABButton onClick={this.login} >
                                        
                                    </FABButton>
                                    <Link to="/register">Register</Link>
                                </Cell>
                            </Grid>
                        </form>
                    </div>
                </Cell>
            </Grid>
		);
	}


}
    Login.contextTypes ={
        router: React.PropTypes.object.isRequired
    }