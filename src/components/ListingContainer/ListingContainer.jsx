import { ChevronDown, X }      from 'lucide-react'
import React                   from 'react';
import { Button }              from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import FilterDropdown          from '../FilterDropDown/FilterDropdown';
import ListingCardComponent    from '../ListingCardComponent/ListingCardComponent';
import ListingCardGrid         from '../ListingCardGrid';
import ListFilteredSidebar     from '../ListFilteredSidebar/ListFilteredSidebar';

const ListingContainer = () => {
    return (
      <>
            {/* listing main container */}
            <div>

            
        <div class="grid lg:grid-cols-3 gap-3 max-w-full">
          <div class="hidden h-max rounded-[5px] lg:flex flex-col border p-4">
            <ListFilteredSidebar/>
          </div>

          <div class="lg:col-span-2 flex flex-col justify-start border p-[4px_4px]">
            <div class="flex items-center justify-start gap-2 flex-wrap">
              <ul class="flex items-center gap-2 flex-wrap max-w-full">
                <li class="text-sm flex items-center p-[6px_6px] gap-[4px] rounded-3xl border bg-gray-400">
                  <span>classified</span>
                  <button>
                    <X size="14" class="text-[10px]" />
                  </button>
                </li>
                <li class="text-sm flex items-center p-[6px_6px] gap-[4px] rounded-3xl border bg-gray-400">
                  <span>Services</span>
                  <button>
                    <X size="14" class="text-[10px]" />
                  </button>
                </li>
                <li class="text-sm flex items-center p-[6px_6px] gap-[4px] rounded-3xl border bg-gray-400">
                  <span>75km</span>
                  <button>
                    <X size="14" class="text-[10px]" />
                  </button>
                </li>
                <li class="text-sm flex items-center p-[6px_6px] gap-[4px] rounded-3xl border bg-gray-400">
                  <span>Dinner</span>
                  <button>
                    <X size="14" class="text-[10px]" />
                  </button>
                </li>
                <li class="text-sm flex items-center p-[6px_6px] gap-[4px] rounded-3xl border bg-gray-400">
                  <span>$80-$100</span>
                  <button>
                    <X size="14" class="text-[10px]" />
                  </button>
                </li>
              </ul>
              <span class="flex items-center bg-gray-200 rounded-3xl text-blue-400 p-[6px_6px]">Clear All</span>
                        </div>
                        <div className='flex items-center justify-between'>

                            <span>64 Listings Found</span>
                                <FilterDropdown/>
                        </div>

                            <ListingCardGrid/>
                       
                    </div>
                    
                
            </div>
            </div>
      </>
  )
}

export default ListingContainer;