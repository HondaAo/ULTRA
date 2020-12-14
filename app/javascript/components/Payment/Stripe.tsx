import Axios from 'axios';
import * as React from 'react' 
import { CardElement, injectStripe } from 'react-stripe-elements'
import { AuthContext } from '../auth/Context';
import * as H from 'history'
import { RouteComponentProps } from 'react-router-dom'

interface Stripe extends RouteComponentProps<{}> {
    history: H.History,
    title: string,
    charge: number
}
const createOptions = () => {
    return {
      style: {
        base: {
          fontSize: '18px',
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };
};

const Stripe: React.FC<Stripe> = (props:any, { history }) =>{
    const { userInfo, setUserInfo } = React.useContext(AuthContext);
    React.useEffect(() => {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null)
    },[])
    const submit = async (e) => {
      e.preventDefault();
      let { token } = await props.stripe.createToken({ name: "Name"}) 
      Axios.post(`/subscription`,{
          token: token.id,
          id: userInfo.id,
          plan: props.id,
          charge: props.charge,
          email: userInfo.email,
          product: props.name
      })
      .then(res => {
          console.log(res.data.payment)
          localStorage.setItem('userInfo',JSON.stringify(res.data.user))
          history.push('/dashboard')
      })
      .catch(err => console.log(err))
    }
    
        return (
            <div className="stripe">
                <form
                  className="stripe-form"
                  onSubmit={submit}
                >
                  <CardElement
                    {...createOptions()}
                    style={{ margin: '20px 0'}}
                  />
                  <button className="home-btn" style={{ width: '100%', marginTop: '30px'}}>Submit</button>
                </form>
            </div>
        );
}
export default injectStripe(Stripe)