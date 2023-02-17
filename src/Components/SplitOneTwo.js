import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SlpitOne = () => {
    return (
            <div className="rn-splite-style">
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src="./images/split/split-01.jpg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title">Εκπαίδευση Διαμεσολαβητών</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p className="description">Εδώ και μία δεκαετία, έχω εκπαιδεύσει εκατοντάδες Διαμεσολαβητές στην Ελλάδα και την Κύπρο. Εκπαιδεύτηκε (Train the Trainer CEDR Program) και πιστοποιήθηκα ως Εκπαιδεύτρια Διαμεσολαβητών με βάση τα διεθνή πρότυπα από τον διεθνώς αναγνωρισμένο βρετανικό Φορέα Centre of Effective Dispute Resolution (CEDR Trainer 2013) και σήμερα διαθέτω πολυετή διδακτική εμπειρία  στην εκπαίδευση και μετεκπαίδευση Διαμεσολαβητών. Από το 2013 συνεργάζομαι με το Ινστιτούτο Κατάρτισης Διαμεσολαβητών Λάρισας και, παράλληλα, από το 2019 με το Ινστιτούτο Κατάρτισης Διαμεσολαβητών Καβάλας.  Επίσης, επί σειρά ετών συνεργάζομαι ως Εκπαιδεύτρια Διαμεσολαβητών και στα πιστοποιημένα προγράμματα του Πανεπιστήμιου Frederick για την κατάρτιση Διαμεσολαβητών στη Λευκωσία και τη Λεμεσό. Σχεδιάζω, επιμελούμαι και υλοποιώ ως Εκπαιδεύτρια προγράμματα Βασικής Κατάρτισης Διαμεσολαβητών (ν4640/2019), Μετεκπαίδευσης Διαμεσολαβητών προχωρημένου επιπέδου (Advanced Mediation) καθώς και προγράμματα Εξειδίκευσης σε ειδικότερους τομείς της Διαμεσολάβησης όπως: Διαμεσολάβηση στις Οικογενειακές Διαφορές (Family Mediation),  Διαμεσολάβηση στις Εργασιακές Διαφορές (Workplace Mediation), Εκπαίδευση Νομικών Παραστατών στη Διαμεσολάβηση (Mediation Advocacy), Διαπραγματεύσεις, Διαχείριση Συγκρούσεων κ.α. Είχα την τιμή να συνεργαστώ με διεθνούς και εγνωσμένου κύρους Διαμεσολαβητές και Εκπαιδευτές Διαμεσολαβητών (DDrPatricia Velikay, DrAndy Grossman, James South, Susanne Shuller κ.α.) και έχω συμμετάσχει ως Κριτής σε διεθνείς διαγωνισμούς Διαμεσολάβησης. 

</p>
                                    </ScrollAnimation>


                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SlpitOne
