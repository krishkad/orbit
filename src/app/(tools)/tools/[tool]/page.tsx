import Calendar from '@/components/shared/calendar';
import LeadTable from '@/components/shared/lead-table';
import Saved from '@/components/shared/saved';
import ToDo from '@/components/shared/to-do';
import React, { useState } from 'react'

const SearchPage = ({ params: { tool } }: { params: { tool: string } }) => {

  return (
    < div className='w-full'>
      {
        tool === "search-prospect" ? <LeadTable /> :
          tool === 'saved' ? <Saved /> :
            tool === 'todo' ? <ToDo /> :
              tool === 'calendar' ? <Calendar /> :
                tool === 'email-manager' ? <h1>Email Manager</h1> :
                  <h1>no page</h1>
      }
    </div>
  )
}

export default SearchPage