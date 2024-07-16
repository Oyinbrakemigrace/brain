import React from 'react'
import SubHeading from '../SubHeading'
import BrandIdentityCard from '../BrandIdentityCard'
import BrandIdentityData from '../../data/BrandIdentityData'

function BrandIdentityProject() {
    return (
        <div>
            <SubHeading title='Brand identity design' />
            <div className='grid lg:grid-cols-[repeat(auto-fit,450px)] gap-10 justify-center mt-10'>
                {
                    BrandIdentityData.map((data) => {
                        return (
                            <BrandIdentityCard data={data} key={data.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BrandIdentityProject