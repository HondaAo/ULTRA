import * as React from 'react' 
import { Cource } from './Home/Cource';
import { Intro } from './Home/Intro';
import { Membership } from './Home/Membership';
import { Signup } from './Home/Signup';
import { Top } from './Home/Top';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

export const Home: React.FC = ({}) =>{
        return (
           <>
           <Header />
           <Top />
           <Intro />
           <Cource />
           <Signup />
           <Membership />
           <Footer />
           </>
        );
}