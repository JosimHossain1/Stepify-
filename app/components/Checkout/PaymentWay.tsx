import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const PaymentWay = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
      defaultValue='item-1'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>Bank Transection</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance'>
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Stripe</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance'>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <div className='flex items-center gap-3 mt-4'>
        <Checkbox id='terms' />
        <Label htmlFor='terms'>Cash on delivery</Label>
      </div>
    </Accordion>
  );
};

export default PaymentWay;
