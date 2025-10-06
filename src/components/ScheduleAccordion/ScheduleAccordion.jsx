'use client'
import React, { useState } from 'react'
import classNames          from 'classnames'
import * as Accordion      from '@radix-ui/react-accordion'
import { ChevronDown }     from 'lucide-react'
import CounterComponent    from '../CounterComponent/CounterComponent'

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames('overflow-hidden first:mt-0 last:rounded-b', className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
))

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header>
    <Accordion.Trigger
      className={classNames(
        'group flex items-center justify-between w-full px-4 h-12 bg-slate-100 dark:bg-slate-800 rounded-md cursor-pointer',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
))

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'overflow-hidden bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-4 py-3">{children}</div>
  </Accordion.Content>
))

const ScheduleAccordion = () => {
  const [guestNo, setGuestNo] = useState(0)
  const [childrenNo, setChildrenNo] = useState(0)

  return (
    <Accordion.Root type="multiple" defaultValue={['item-1']} className="w-full space-y-3">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col text-left">
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Guests & Children
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                {guestNo} guest{guestNo !== 1 ? 's' : ''} • {childrenNo} child
                {childrenNo !== 1 ? 'ren' : ''}
              </span>
            </div>

            <ChevronDown
              className="ml-2 h-5 w-5 text-slate-600 dark:text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <CounterComponent
            guestNo={guestNo}
            setGuestNo={setGuestNo}
            childrenNo={childrenNo}
            setChildrenNo={setChildrenNo}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  )
}

export default ScheduleAccordion
