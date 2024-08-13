import React from 'react';
import './CitySelector.css';

const CitySelector = () => {
    const cities = [
        { name: 'Delhi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZppBbpRgDOMYfpxBk3uoBLXYIs0eR2BjqAQ&s', link: '/ServiceSelector' },
        { name: 'Chennai', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnZ6Ac37Rw0Q5GjL41ObZDkgEOB0NHm0qBQ&s', link: '/ServiceSelector' },
        { name: 'Coimbatore', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAG3NOhxOOUTPoVS0w3l9dcwlW5QJuwxzFQ&s', link: '/ServiceSelector' },
        { name: 'Kerala', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpUE-x0F_hMuoNUJld6fTAYUhjfwy-z5ZBQ&s', link: '/ServiceSelector' },
        { name: 'Bengaluru', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XIKVibIv_r-PoamdDZTeAW1ZhZGrxdXOWE102GGstYex41yrfGmS1GIk9M4Mb0KrZzI&usqp=CAU', link: '/ServiceSelector' }
    ];

    return (
        <div className="city-selector">
            <h2>Select Your City</h2>
            <p>I'm looking for a HOUSEHoldCare in</p>
            <div className="cities">
                {cities.map((city, index) => (
                    <div className="city" key={index}>
                        {city.image ? (
                            <a href={city.link}>
                                <img src={city.image} alt={city.name} />
                            </a>
                        ) : (
                            <div className="placeholder"></div>
                        )}
                        <p>{city.name}</p>
                    </div>
                ))}
            </div>
            <p>Select the location where you'd like to book a HOUSEHoldCare</p>
        </div>
    );
};

export default CitySelector;