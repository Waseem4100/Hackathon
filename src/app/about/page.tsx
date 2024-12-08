
import React from 'react'
import AboutHero from '@/app/components/aboutHero'
import AboutSection from '@/app/components/aboutSection'
import AboutPopularProduct from '@/app/components/aboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page
