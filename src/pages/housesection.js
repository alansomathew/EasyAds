import React from 'react';
import SectionHeader from '../common/sectionheader'; // Reuse SectionHeader
import CarCard from '../components/card'; // Reuse CarCard for houses and flats

const HousesSection = () => {
  // Mock data for houses and flats
  const housesData = [
    {
      images: ['https://via.placeholder.com/300x200?text=House+1'],
      price: '₹ 46,00,000',
      title: '3 Bds | 3 Bds | 1250 ft²',
      location: 'Coimbatore',
      year: 'Yesterday',
      distance: '',
      owners: '',
      date: '',
      description: 'Parking available, Balcony, Full furnished, 24hrs hot water',
      isNew: true,
    },
    {
      images: ['https://via.placeholder.com/300x200?text=House+2'],
      price: '₹ 46,00,000',
      title: '3 Bds | 3 Bds | 1250 ft²',
      location: 'Coimbatore',
      year: 'Yesterday',
      distance: '',
      owners: '',
      date: '',
      description: 'Parking available, Balcony, Full furnished, 24hrs hot water',
      isNew: false,
    },
    {
      images: ['https://via.placeholder.com/300x200?text=House+3'],
      price: '₹ 46,00,000',
      title: '3 Bds | 3 Bds | 1250 ft²',
      location: 'Coimbatore',
      year: 'Yesterday',
      distance: '',
      owners: '',
      date: '',
      description: 'Parking available, Balcony, Full furnished, 24hrs hot water',
      isNew: false,
    },
    {
      images: ['https://via.placeholder.com/300x200?text=House+4'],
      price: '₹ 46,00,000',
      title: '3 Bds | 3 Bds | 1250 ft²',
      location: 'Coimbatore',
      year: 'Yesterday',
      distance: '',
      owners: '',
      date: '',
      description: 'Parking available, Balcony, Full furnished, 24hrs hot water',
      isNew: false,
    },
  ];

  const handleSeeAll = () => {
    console.log('See All Houses clicked');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '1312px' }}>
      {/* Section Header */}
      <SectionHeader title="Houses and Flats for sale" onSeeAll={handleSeeAll} />

      {/* Horizontal Scrollable Section */}
      <div
        className="d-flex overflow-auto"
        style={{
          gap: '24px',
          paddingBottom: '16px',
        }}
      >
        {housesData.map((house, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 300px', // Card width
              height: '303.11px', // Match the height
            }}
          >
            <CarCard {...house} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousesSection;
