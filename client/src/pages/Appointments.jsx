import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Appointment = () => {
    return (
        <div>
            <Header />
            <iframe src="https://app.squarespacescheduling.com/schedule.php?owner=27904854" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
            <Footer />
        </div>
    )
}

export default Appointment;