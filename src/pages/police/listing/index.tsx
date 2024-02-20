// named imports
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { NFT, useAddress, useContract } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'

// default imports
import DashboardLayout from '@/components/globals/DashboardLayout'
import FIRTable from '@/components/police/FIRTable'

const FIRListing = () => {
  const address = useAddress()
  const router = useRouter()

  if (address === undefined) {
    router.push('/login')
  }

  return (
    <DashboardLayout>
      <div className='p-4'>
        <h2 className='dashboard-heading'>FIR Listing</h2>

        <FIRTable />
      </div>
    </DashboardLayout>
  )
}

export default FIRListing
