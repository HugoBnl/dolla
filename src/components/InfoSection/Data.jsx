import world from '../../images/connected_world_1.svg';
import Growth from '../../images/investing_1.svg';
import ChartBoard from '../../images/finance_1.svg'; //Obligé de faire un import de cette manière.

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: Growth,
    alt: 'Growth',
    primary: true,
    dark: true,
    darktext: false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: world,
    alt: 'world',
    primary: false,
    dark: false,
    darkText: true,
};


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headLine: 'Creating an account is extremely easy',
    description: "Get everything set up and ready under 10 minutes. All you need to do is add your information and you're ready to go. ",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: ChartBoard,
    alt: 'ChartBoard',
    primary: false,
    dark: false,
    darkText: true,
};