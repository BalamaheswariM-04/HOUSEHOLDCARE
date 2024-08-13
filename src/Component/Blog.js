import React from 'react';
import './Blog.css';
import WhyChooseUs from './WhyChooseUs';
import Navbar from './CustomerNavbar';
import Footer from './Footer';
const WhyChoose = () => {
  const features = [
    {
      icon: '📅', // Replace with an actual icon or image
      title: 'Easy Booking',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    },
    {
      icon: '💰', // Replace with an actual icon or image
      title: 'Value for Money',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    },
    {
      icon: '❤', // Replace with an actual icon or image
      title: 'Passionate Travel',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    },
    {
      icon: '🌍', // Replace with an actual icon or image
      title: 'Awesome Places',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    },
    {
      icon: '✈', // Replace with an actual icon or image
      title: 'Diverse Destinations',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    },
    {
      icon: '📞', // Replace with an actual icon or image
      title: '24 x 7 Support',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    },
  ];

  return (
    <div>
      <Navbar/>
      <WhyChooseUs/>
    <div className="why-choose-us">
      <h2 className="heading">Privacy&Security</h2>
      <p className="subheading">Sagittis vulputate magna sagittis sagittis erat feugiat nullam cubilia amet dignissim Euismod.</p>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default WhyChoose;