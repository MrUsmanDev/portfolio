import React from 'react'

const Experience = ({ExpData}) => {
  return (
    <>
     <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center justify-between section'>
        <div className='flex flex-col'>
           <h2 className='font-semibold leading-relaxed text-slate-200'>{ExpData.Position}</h2>
           <h3 className='font-semibold leading-relaxed text-slate-600'>{ExpData.Organization}</h3>
        </div>
        <div className='flex flex-col items-end'>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20" style={{ width: 'fit-content' }}>{ExpData.mode}</span>
            <span className='font-semibold leading-relaxed text-slate-600'>{ExpData.Date}</span>
        </div>
    </div>
    <hr className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center justify-between m-2' />
    </>
  )
}

export default Experience