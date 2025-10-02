'use client';
import React, { useState } from 'react';
import classNames          from 'classnames';
import * as Accordion      from '@radix-ui/react-accordion';
import { ChevronDown }     from 'lucide-react';
import CounterComponent    from '../CounterComponent/CounterComponent';

// Small wrapper components to keep styling clean and forward refs
const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames('overflow-hidden first:mt-0 last:rounded-b', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger
        className={classNames(
          'group flex items-center justify-between w-full px-4 h-12 bg-gray-100 rounded-md cursor-pointer',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        'overflow-hidden bg-white text-sm text-gray-700 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-4 py-3">{children}</div>
    </Accordion.Content>
  )
);

const ScheduleAccordion = () => {
  // Lifted state: lives here and won't reset when accordion opens/closes
  const [guestNo, setGuestNo] = useState(0);
  const [childrenNo, setChildrenNo] = useState(0);

  return (
    <Accordion.Root type="multiple" defaultValue={['item-1']} className="w-full space-y-3">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col text-left">
              <span className="font-medium">Guests & Children</span>
              <span className="text-xs text-gray-600">
                {guestNo} guest{guestNo !== 1 ? 's' : ''} • {childrenNo} child{childrenNo !== 1 ? 'ren' : ''}
              </span>
            </div>

            <ChevronDown
              className="ml-2 h-5 w-5 text-gray-600 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </div>
        </AccordionTrigger>

        <AccordionContent>
          {/* Pass the state setters so CounterComponent can update the counts */}
          <CounterComponent
            guestNo={guestNo}
            setGuestNo={setGuestNo}
            childrenNo={childrenNo}
            setChildrenNo={setChildrenNo}
          />
        </AccordionContent>
      </AccordionItem>

      {/* You can add more AccordionItem blocks similarly */}
    </Accordion.Root>
  );
};

export default ScheduleAccordion;
