import React from 'react';
import './index.scss';
import Button from "../Button";
import { useHistory } from 'react-router-dom';
import Header from "../Header";

const Home = () => {
    const history = useHistory();

    return (
        <div className="home-block">
            <div>
                <Header />
                <div className="home-block__content">
                    <p>
                        "We’re looking forward to a fresh start in 2021! To celebrate the end of the year and start the new
                        one in sustainable style, we are unveiling a different surprise from our NYE Capsule Collection
                        every day in the lead up to Christmas. Simply spin our digital Christmas tree calendar to find the
                        days highlighted and start creating!

                        P.S. There's also a lucky draw present under out tree... enter for your chance to receive a unique
                        digital garment as a special Christmas present from us!"
                    </p>
                </div>
            </div>
            <div className="home-block__button">
                <Button text="Enter" action={() => history.push('/signUp')} />
            </div>
        </div>
    );
};

export default Home;
