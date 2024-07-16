/* eslint-disable jsx-a11y/anchor-is-valid */

import { Step3tStyles } from "./Step3Styles";
import { BestMatchTable } from "../../bestMatchTable/BestMatchTable";


export const Step3 = () => {


    return (
        <Step3tStyles>
            <div className="wrapper">
                <h2>Meet your new favorite coffee.</h2>
                <p>Here's what we recommend for your busy days, quiet moments, and upcoming adventures.</p>
                <div className="btn-cta">
                    <a href="#">
                        Email my result
                    </a>

                    <a href="#">
                        Retake the quiz
                    </a>
                </div>
                <BestMatchTable />
                


            </div>
        </Step3tStyles>
    )
}