import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>

            <div className='container'>
                <div className='section is-centered'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard
                                title='Alexa'
                                handle='@alexa99'
                                image={AlexaImage}
                                content="Alexa was created by Amazon and helps you buy things." />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard
                                title='Cortana'
                                handle='@cortana32'
                                image={CortanaImage}
                                content="Cortana was made by Microsoft. Who knows what it does?" />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard
                                title='Siri'
                                handle='@siri01'
                                image={SiriImage}
                                content="Siri was made by Apple and what??" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;