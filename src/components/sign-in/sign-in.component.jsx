import { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
        event.preventdefault();
        this.setState({email:'',password:''})
    }

    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='Email' 
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='Password' 
                        required 
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;