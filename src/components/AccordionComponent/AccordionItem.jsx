'use client';
import React               from 'react';
import * as Accordion      from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import classNames          from 'classnames';

export default function AccordionItem({ value, title, children }) {
  return (
    <Accordion.Item
      value={value}
      className="group mb-4 last:mb-0 rounded-md border bg-white shadow"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={classNames(
            'flex justify-between w-full py-4 px-5 text-left font-medium text-slate-800 hover:bg-slate-100 transition-colors rounded-t-md'
          )}
        >
          <span>{title}</span>
          <ChevronDownIcon className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content
        className={`
          overflow-hidden text-slate-700
          px-5 pt-2 pb-4
          transition-[max-height] duration-300 ease-in-out
          max-h-0
          group-data-[state=open]:max-h-96
        `}
      >
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}
