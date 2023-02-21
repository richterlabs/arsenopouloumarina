import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
    {
        countNum : 10,
        countTitle: 'έτη εμπειρίας σε διαμεσολαβήσεις',
    },
    {
        countNum : 25,
        countTitle: 'έτη άσκησης δικηγορίας',
    },
    {
        countNum : 2000,
        countTitle: 'ώρες εμπειρίας στην εκπαίδευση Διαμεσολαβητών',
    },
    {
        countNum : 20,
        countTitle: 'πιστοποιήσεις από αναγνωρισμένους Φορείς',
    },
];
const SlipFour = () => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">
                    <div className="order-2 order-lg-1 col-lg-12 col-xl-6 col-12">
                        <div className="split-inner">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h4 className="title">Γιατί Εμάς</h4>
                            </ScrollAnimation>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">H συνεχής ενασχόλησή μας με τη διαμεσολάβηση στην πράξη μας δίνει τη δυνατότητα να χειριζόμαστε αποτελεσματικά δύσκολες υποθέσεις. Η εκτενής δικηγορική εμπειρία μας, διασφαλίζει την κατανόηση των ζητημάτων σε βάθος. Η ενασχόλησή μας με την εκπαίδευση διαμεσολαβητών αναβαθμίζει συνεχώς τις γνώσεις μας και διευρύνει την εμπειρία μας. Διαθέτουμε δυνατότητα πολύπλευρης προσέγγισης των ζητημάτων και άριστες δεξιότητες επικοινωνίας και διαπραγμάτευσης. Η διαμεσολάβηση αποτελεί για μας στάση ζωής που κάνουμε πράξη κάθε μέρα!</p>
                            </ScrollAnimation>

           

                            <div className="row">
                                {Data.map((data, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="count-box counter-style-4 text-start">
                                            <TrackVisibility once>
                                                {({ isVisible }) => isVisible && 
                                                    <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                                            </TrackVisibility>
                                            <h5 className="counter-title">{data.countTitle}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail">
                            <img src="./images/compressed/why-us.JPG" alt="Why us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipFour;