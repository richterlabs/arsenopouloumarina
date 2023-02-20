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

                            <h4 className="title">Εκπαίδευση Διαμεσολαβητών</h4>
                            <p className="description">Εδώ και μία δεκαετία, έχω εκπαιδεύσει εκατοντάδες Διαμεσολαβητές στην Ελλάδα και την Κύπρο. Εκπαιδεύτηκε (Train the Trainer CEDR Program) και πιστοποιήθηκα ως Εκπαιδεύτρια Διαμεσολαβητών με βάση τα διεθνή πρότυπα από τον διεθνώς αναγνωρισμένο βρετανικό Φορέα Centre of Effective Dispute Resolution (CEDR Trainer 2013) και σήμερα διαθέτω πολυετή διδακτική εμπειρία  στην εκπαίδευση και μετεκπαίδευση Διαμεσολαβητών. Από το 2013 συνεργάζομαι με το Ινστιτούτο Κατάρτισης Διαμεσολαβητών Λάρισας και, παράλληλα, από το 2019 με το Ινστιτούτο Κατάρτισης Διαμεσολαβητών Καβάλας.  Επίσης, επί σειρά ετών συνεργάζομαι ως Εκπαιδεύτρια Διαμεσολαβητών και στα πιστοποιημένα προγράμματα του Πανεπιστήμιου Frederick για την κατάρτιση Διαμεσολαβητών στη Λευκωσία και τη Λεμεσό. Σχεδιάζω, επιμελούμαι και υλοποιώ ως Εκπαιδεύτρια προγράμματα Βασικής Κατάρτισης Διαμεσολαβητών (ν4640/2019), Μετεκπαίδευσης Διαμεσολαβητών προχωρημένου επιπέδου (Advanced Mediation) καθώς και προγράμματα Εξειδίκευσης σε ειδικότερους τομείς της Διαμεσολάβησης όπως: Διαμεσολάβηση στις Οικογενειακές Διαφορές (Family Mediation),  Διαμεσολάβηση στις Εργασιακές Διαφορές (Workplace Mediation), Εκπαίδευση Νομικών Παραστατών στη Διαμεσολάβηση (Mediation Advocacy), Διαπραγματεύσεις, Διαχείριση Συγκρούσεων κ.α. Είχα την τιμή να συνεργαστώ με διεθνούς και εγνωσμένου κύρους Διαμεσολαβητές και Εκπαιδευτές Διαμεσολαβητών (DDrPatricia Velikay, DrAndy Grossman, James South, Susanne Shuller κ.α.) και έχω συμμετάσχει ως Κριτής σε διεθνείς διαγωνισμούς Διαμεσολάβησης. </p>


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
                            <img src="./images/compressed/why-us.JPG" alt="split Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipFour;