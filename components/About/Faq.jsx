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
            <div className='grid lg:grid-cols-2 gap-x-10 '>
               <div className=''>
               <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I join EduVibe virtual class?</AccordionTrigger>
                        <AccordionContent>
                        To join a virtual class, log in to your account, navigate to the "My Classes" section, and click on the class link at the scheduled time. Ensure you have a stable internet connection and a compatible browser for the best experience.
                        </AccordionContent>
                    </AccordionItem>                  
                </Accordion>
               </div>

              <div className=''>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>Do I need to install any software to attend a class?</AccordionTrigger>
                        <AccordionContent>
                        No, our virtual classroom runs directly in your web browser. However, for the best experience, we recommend using the latest versions of Chrome, Firefox, or Edge.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
              </div>

                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>Can I interact with the teacher and other students during the class?</AccordionTrigger>
                        <AccordionContent>
                        Yes! Our virtual classroom supports real-time video, audio, and text chat, along with screen sharing and interactive whiteboards to enhance learning.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>What should I do if I experience technical issues?</AccordionTrigger>
                        <AccordionContent>
                        If you face technical problems, try refreshing the page or checking your internet connection. If the issue persists, visit our Help Center or contact our support team.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>Are class recordings available for later viewing?</AccordionTrigger>
                        <AccordionContent>
                        Yes, recorded sessions are available for review. You can access them in the "Class Recordings" section of your account. However, availability depends on the teacher’s recording preferences.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    );
};

export default Faq;