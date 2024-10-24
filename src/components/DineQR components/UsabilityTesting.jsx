import React from 'react'
import DqrHeading from './DqrHeading'
import Subheading from './Subheading'

function UsabilityTesting() {
    return (
        <div>
            <DqrHeading title="Usability Testing" />
            <div className='lg:px-14 px-7 space-y-10 text-gray-200 mt-6'>
                <div>
                    <Subheading text="Methodology" />
                    <p>
                        The purpose of this usability test was to evaluate the usability of Dine QR,
                        focusing on comprehension, relatability, and accessibility. Participants included
                        a diverse group of diners and restaurant owners who were representative of the platform&apos;s
                        target audience. The test aimed to assess their experience with various features of the
                        Dine QR platform.
                    </p>
                </div>
                <div>
                    <Subheading text="Conclusion" />
                    <p>
                        Based on the results of the usability test, the final design of Dine QR was selected as
                        65 percent of participants voted for its reliability and accessibility. Participants
                        were able to complete the onboarding process in an average of 2 minutes, which is 10%
                        faster than other options tested. <br /><br />
                        Several restaurant owners questioned the necessity of certain features, such as extensive
                        account management tools, preferring to focus on streamlining menu browsing and payment
                        processes. As a result, we decided to prioritize these key features and deprioritized less
                        critical ones for future updates. This approach ensures that Dine QR addresses the immediate
                        needs of both diners and restaurant owners, enhancing their overall experience.
                    </p>
                </div>
                <div>
                    <Subheading text="Recommendation" />
                    <p>
                        Recommendations for further improvements have been shared with the team, focusing on
                        enhancing user experience and adding value to the platform. This part of the case study
                        will be updated after those recommendations have been implemented to reflect the continuous
                        evolution and refinement of Dine QR. Key recommendations include:<br /><br />
                        <li>
                            Enhancing Menu Customization : Allowing restaurants to easily update and customize their
                            digital menus to reflect daily specials or seasonal changes.
                        </li>
                        <li>
                            Improving Order Tracking : Providing real-time updates to customers on their
                            order status to enhance transparency and reduce wait times.
                        </li>
                        <li>
                            Expanding Payment Options : Integrating additional payment methods to cater to a wider range of user preferences.
                        </li>
                        <li>
                            Optimizing User Interface : Continuously refining the UI based on user feedback to ensure it remains intuitive and user-friendly.
                        </li>
                        <li>
                            Incorporating Customer Feedback : Establishing a robust feedback system for customers to share their dining experience, helping restaurants improve their service.
                        </li>
                        <br />
                        These recommendations aim to further enhance the functionality and user satisfaction of Dine QR, ensuring it remains a leading solution in the contactless dining market
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UsabilityTesting