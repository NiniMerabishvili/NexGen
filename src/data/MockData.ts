import member1 from '../assets/images/member1.png';
import member2 from '../assets/images/member2.png';
import member3 from '../assets/images/member3.png';
import member4 from '../assets/images/member4.png';
import member5 from '../assets/images/member5.png';
import member6 from '../assets/images/member6.png';
import member7 from '../assets/images/member7.png';
import member8 from '../assets/images/member8.png';
import member9 from '../assets/images/member9.png';
import member10 from '../assets/images/member10.png';
import member11 from '../assets/images/member11.png';
import member12 from '../assets/images/member12.png';
import member13 from '../assets/images/member13.png';
import member14 from '../assets/images/member14.png';
import work1 from '../assets/images/work1.png';
import work2 from '../assets/images/work2.png';

export const recordsData = [
  { id: 1, label: 'CLIENTS', value: '200+' },
  { id: 2, label: 'PROJECTS', value: '280+' },
  { id: 3, label: 'HAPPY CLIENTS', value: '100%' },
  { id: 4, label: 'FOLLOWER', value: '420K' },
  { id: 5, label: 'Years Of Experience', value: '10+' },
];

export const reasonsData = [
  {
    id: 1,
    title: 'EXPERTISE IN CUTTING-EDGE TECHNOLOGIES',
    description: 'NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.',
  },
  {
    id: 2,
    title: 'PROVEN TRACK RECORD OF SUCCESS',
    description: 'NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.',
  },
  {
    id: 3,
    title: 'CLIENT-CENTRIC APPROACH',
    description: 'At NexGen, we prioritize understanding our clients\' unique requirements, fostering transparent communication throughout the development process.',
  },
  {
    id: 4,
    title: 'DEDICATED TEAM OF PROFESSIONALS',
    description: 'Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.',
  },
];

export const servicesData = [
  {
    id: 1,
    title: 'WEB DESIGN',
    description: 'Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.',
    price: '$1,500',
    iconPath: 'M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z',
  },
  {
    id: 2,
    title: 'MOBILE APP DEVELOPMENT',
    description: 'With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.',
    price: '$2,500',
    iconPath: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-5-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm2.5-12h-5c-.28 0-.5.22-.5.5v.5h6v-.5c0-.28-.22-.5-.5-.5zm-2.5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z',
  },
  {
    id: 3,
    title: 'WEB DEVELOPMENT',
    description: 'Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.',
    price: '$1,800',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
  },
  {
    id: 4,
    title: 'DIGITAL MARKETING',
    description: 'In the digital age, marketing is a critical aspect of your business\'s success. Our Digital Marketing service employs data-driven strategies to enhance your brand\'s visibility.',
    price: '$1,200',
    iconPath: 'M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z',
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'ZENITH FITNESS APP',
    category: 'Mobile App Development',
    timeTaken: '6 months',
    description: 'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.',
    iconPath: 'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z',
  },
  {
    id: 2,
    title: 'A-AURA ECOMMERCE',
    category: 'Web Design & Development',
    timeTaken: '3 months',
    description: 'A complete overhaul of a corporate website to enhance its brand identity and user experience.',
    iconPath: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
  },
];

export const technologiesData = [
  ['React Native', 'Firebase', 'Redux', 'REST API', 'MongoDB'],
  ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
];

export const teamMembersData = [
  [
    { id: 1, photoUrl: member1, name: 'John Smith' },
    { id: 2, photoUrl: member2, name: 'Sarah Johnson' },
    { id: 3, photoUrl: member3, name: 'Michael Brown' },
    { id: 4, photoUrl: member4, name: 'Emily Davis' },
    { id: 5, photoUrl: member5, name: 'David Wilson' },
  ],
  [
    { id: 6, photoUrl: member6, name: 'Jessica Taylor' },
    { id: 7, photoUrl: member7, name: 'Robert Anderson' },
    { id: 8, photoUrl: member8, name: 'Amanda Martinez' },
    { id: 9, photoUrl: member9, name: 'Christopher Lee' },
    { id: 10, photoUrl: member10, name: 'Michelle White' },
  ],
];

export const workImagesData = [work1, work2];

export const testimonialsData = [
  {
    id: 1,
    title: 'NEXGEN TURNED OUR BUSINESS AROUND!',
    text: 'Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!',
    author: {
      name: 'Sarah Thompson',
      role: 'CEO of BlueBloom',
      image: member11,
    },
  },
  {
    id: 2,
    title: 'NEXGEN TURNED OUR BUSINESS AROUND!',
    text: 'Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!',
    author: {
      name: 'Wade Warren',
      role: 'Art Director',
      image: member12,
    },
  },
  {
    id: 3,
    title: 'WORKING WITH NEXGEN WAS A PLEASURE.',
    text: 'Their web design team created a stunning website that perfectly captured our brand\'s essence. The feedback from our customers has been overwhelmingly positive.',
    author: {
      name: 'Lisa Williams',
      role: 'CEO Of HealthTech',
      image: member13,
    },
  },
  {
    id: 4,
    title: 'NEXGEN\'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.',
    text: 'Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.',
    author: {
      name: 'Jennifer Lee',
      role: 'COO of Foodie Haven',
      image: member14,
    },
  },
];

export const faqData = [
  {
    id: 1,
    question: 'How long does it take to complete a web development project?',
    answer: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.',
  },
  {
    id: 2,
    question: 'Can you handle large-scale mobile app development projects?',
    answer: 'Yes, we have extensive experience in developing large-scale mobile applications. Our team is equipped to handle projects of any size and complexity.',
  },
  {
    id: 3,
    question: 'Can you integrate third-party APIs into our mobile app?',
    answer: 'Absolutely! We specialize in integrating various third-party APIs and services to enhance your mobile app\'s functionality and user experience.',
  },
  {
    id: 4,
    question: 'How do you ensure cross-platform compatibility for mobile apps?',
    answer: 'We use modern cross-platform frameworks and follow best practices to ensure your mobile app works seamlessly across iOS, Android, and other platforms.',
  },
  {
    id: 5,
    question: 'What is your approach to user experience (UX) design?',
    answer: 'Our UX design approach focuses on understanding user needs, creating intuitive interfaces, and conducting thorough testing to ensure optimal user satisfaction.',
  },
];

export const footerCtaData = {
  title: 'READY TO TRANSFORM YOUR DIGITAL PRESENCE?',
  text: 'Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.',
  buttonText: 'GET IN TOUCH',
};

export const socialsData = [
  {
    id: 1,
    name: 'Instagram',
    title: 'INSTAGRAM',
    description: 'Share visually appealing snippets of our latest web projects.',
    href: '#instagram',
    iconType: 'instagram',
  },
  {
    id: 2,
    name: 'Twitter',
    title: 'TWITTER',
    description: 'Tweet about interesting coding challenges you\'ve overcome.',
    href: '#twitter',
    iconType: 'twitter',
  },
  {
    id: 3,
    name: 'Dribbble',
    title: 'DRIBBBLE',
    description: 'Showcase design elements of our web projects.',
    href: '#dribbble',
    iconType: 'dribbble',
  },
  {
    id: 4,
    name: 'Behance',
    title: 'BEHANCE',
    description: 'Create detailed presentations for our projects.',
    href: '#behance',
    iconType: 'behance',
  },
];

export const footerLinksData = {
  Home: ['Why Us', 'About Us', 'Testimonials', 'FAQ\'s'],
  Services: ['Web Development', 'App Development', 'Web Design', 'Digital Marketing'],
  Projects: ['Klothink', 'Zenith', 'Novus', 'Apex'],
  Blogs: [
    { name: 'Business', soon: false },
    { name: 'Design', soon: true },
    { name: 'Development', soon: true },
  ],
};
