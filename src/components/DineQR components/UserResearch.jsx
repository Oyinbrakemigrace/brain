import React from 'react'
import DqrHeading from './DqrHeading'
import Subheading from './Subheading'
import DqrUserPersona from './DqrUserPersona'
import DqrEmpathyMap from './DqrEmpathyMap'

function UserResearch() {
  return (
    <div>
<DqrHeading title="User Research"/>
          <div className='lg:px-14 px-7 text-gray-200'>
    <p>
        In Nigeria&apos;s vibrant dining scene, there are several challenges that both diners
        and restaurant owners face. One prevalent issue is the inconsistency in payment methods
        and the inconvenience of handling physical cash. This can lead to delays in settling bills
        and dissatisfaction among diners. <br /><br />
        Another significant concern is the complexity of menu browsing and ordering processes,
        which can be cumbersome during peak hours or in establishments with extensive menus.
        This complexity often results in longer wait times and can detract from the overall
        dining experience. <br /><br />
        To address these issues, Dine QR has explored existing solutions and gathered insights
        from target users, including diners and restaurant owners. By leveraging QR code technology,
        Dine QR aims to streamline the dining experience by offering a seamless payment solution and
        simplifying the menu browsing and ordering process. This approach not only enhances convenience
        for diners but also improves operational efficiency for restaurant owners, ultimately transforming
        the way people dine out in Nigeria.
    </p>
    <div className='mt-16'>
    <Subheading text="User persona" />
    <DqrUserPersona />
    </div>
    <div className='mt-16'>
    <Subheading text="Empathy Map" />
    <DqrEmpathyMap />
    </div>
</div>
    </div>
)
}

export default UserResearch