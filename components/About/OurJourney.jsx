import React from 'react';
import SectionHeading from '../Shared/SectionHeading';
import FeatureText from '../feature-texts/FeatureText';
import Image from 'next/image';

const OurJourney = () => {
    return (
        <div>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-600 text-center py-10">
                      Our <span className='text-secondary-600'>Journey</span>
                    </h2>

            {/* mission  */}
            <div className='flex flex-col lg:flex-row gap-12'>
                {/* Text Section */}
                <div className="flex flex-col justify-center lg:w-1/2">
                    <h1 className="md:text-3xl text-xl text-primary-600  font-bold">
                        Our <span className="text-secondary-600">Mission</span>
                    </h1>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-600">
                        Transforming life
                         through education
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">We believe that everyone deserves the chance to learn and grow, no matter where they are in life. Our mission is to remove barriers to education, making it accessible to anyone with a desire to learn.</p>
                    <div className='py-5'>
                        <FeatureText text="Accessibility for all learners"></FeatureText>
                        <FeatureText text="Bridging the education gap globally"></FeatureText>
                        <FeatureText text="Offering up-to-date, relevant content"></FeatureText>
                        <FeatureText text="Fostering personal and professional growth"></FeatureText>
                        <FeatureText text="Supporting learners with tools and resources"></FeatureText>
                    </div>

                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                    <Image
                        src="/image 15.png"
                        width={600}
                        height={500}
                        alt="mission"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* vision  */}
            <div className='flex flex-col lg:flex-row-reverse gap-12'>
                {/* Text Section */}
                <div className="flex flex-col justify-center lg:w-1/2">
                    <h1 className="md:text-3xl text-xl text-primary-600  font-bold">
                        Our <span className="text-secondary-600">Vision</span>
                    </h1>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-600">
                        Shaping the future of education

                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Our vision is to become a leader in online education, known for innovation and excellence. As technology evolves, so do we. By integrating new learning technologies and methodologies, we aim to offer an even more immersive and impactful learning experience.</p>
                    <div className='py-5'>
                        <FeatureText text="Leveraging the latest technologies"></FeatureText>
                        <FeatureText text="Expanding our course offerings"></FeatureText>
                        <FeatureText text="Innovating with immersive learning tools"></FeatureText>
                        <FeatureText text="Partnering with leading institutions globally"></FeatureText>
                        <FeatureText text="Supporting educators to improve teaching"></FeatureText>
                    </div>

                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                    <Image
                        src="/Rectangle 19.png"
                        width={600}
                        height={500}
                        alt="vision"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurJourney;