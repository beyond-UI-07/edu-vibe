import React from 'react';
import SectionHeading from '../Shared/SectionHeading';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '../ui/accordion'
  


const Faq = () => {
    return (
        <div className='py-10'>
            <SectionHeading
                title="Frequently Asked Questions :"
                titleSecond=" We're Here to Help"
                description=""
            />
            <div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    );
};

export default Faq;