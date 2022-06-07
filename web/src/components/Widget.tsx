import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';
import { useState } from 'react';


export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility() {
    console.log('eita');
    
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
  <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end">
    {/* { isWidgetOpen ? <p>Hello Peter</p> : null }  */}
    { isWidgetOpen && <p>Hello Peter</p>} 
    {/* é a mesma coisa que está escrita acima usando && */}

    <Popover.Panel>
      <WidgetForm />
    </Popover.Panel> 

      <Popover.Button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group" >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
            Feedback
        </span>
    </Popover.Button>
  </Popover>
  )
}