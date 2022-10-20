import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServiceElements'

import Btc from '../../images/img-2.svg';
import PiggyBank from '../../images/img-3.svg';
import ChartBoard from '../../images/img-4.svg';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Btc} />
                    <ServicesH2>Reduces expenses</ServicesH2>
                    <ServicesP> We help reduces your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={PiggyBank} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP> You can access our platform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ChartBoard} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that return</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services