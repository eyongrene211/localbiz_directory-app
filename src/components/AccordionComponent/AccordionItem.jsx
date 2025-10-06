'use client'
import React               from 'react'
import * as Accordion      from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'
import classNames          from 'classnames'

export default function AccordionItem({ value, title, children }) {
  return (
    <Accordion.Item
      value={value}
      className="group mb-4 last:mb-0 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm transition-colors"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={classNames(
            'flex justify-between w-full py-4 px-5 text-left font-medium',
            'text-slate-800 dark:text-slate-100',
            'hover:bg-slate-100 dark:hover:bg-slate-800',
            'transition-colors rounded-t-md'
          )}
        >
          <span>{title}</span>
          <ChevronDownIcon className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 text-slate-600 dark:text-slate-400" />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="accordion-content-wrapper overflow-hidden text-slate-700 dark:text-slate-300">
        <div className="px-5 pt-2 pb-4">
          {children}
        </div>
      </Accordion.Content>

      {/* Inline styles for accordion animation */}
      <style jsx>{`
        .accordion-content-wrapper {
          transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .accordion-content-wrapper[data-state='closed'] {
          height: 0;
        }
        .accordion-content-wrapper[data-state='open'] {
          height: var(--radix-accordion-content-height);
        }
      `}</style>
    </Accordion.Item>
  )
}
