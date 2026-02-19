  import React, { useState } from 'react'
  import { Card, Title, Badge, Select, Group, Text, Button } from '@mantine/core'
  import { FiDownload } from 'react-icons/fi'
  import TenderDoc from '../docs/ADDENDUM-SUPPLIER REGISTRATION TENDER DOCUMENT FY 2025-2027.pdf'

  interface Tender {
    id: string
    title: string
    year: string
    status: 'Open' | 'Closed'
    description: string
    documentUrl: string 
    deadline:string
  }

  const tendersData: Tender[] = [
    {
      id: '1',
      title: 'Registration of Suppliers for Goods, Services, and Works',
      year: '2025/2026 & 2026/2027',
      status: 'Closed',
      deadline:'Deadline: 09/06/2025, 11:00 AM',
      description: 'Eligible suppliers are invited to apply for supply of goods and services for 2025/2026&2026/2027',
      // documentUrl: '/docs/supply-of-stationery.pdf',
      documentUrl: TenderDoc
    },
    
  ]

  const getUniqueYears = (tenders: Tender[]) => {
    return Array.from(new Set(tenders.map(t => t.year)))
  }

  const TendersPage: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<string | null>(null)
    const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Closed'>(
      'All'
    )

   

    const years = getUniqueYears(tendersData)

    const filteredTenders = tendersData.filter(tender => {
      const matchesYear = selectedYear ? tender.year === selectedYear : true
      const matchesStatus =
        statusFilter === 'All' || tender.status === statusFilter
      return matchesYear && matchesStatus
    })  

    return (
      <div className='p-6 max-w-5xl px-[4%] '>
        <Title order={2} className='mt-20 md:mt-0 mb-6 text-left text-claret-800'>
          Tenders
        </Title>

        <div className='flex flex-col md:flex-row gap-4 mb-6'>
          <Select
            label='Filter by Financial Year'
            placeholder='Select year'
            data={years}
            value={selectedYear}
            onChange={setSelectedYear}
            clearable
          />
          <Select
            label='Filter by Status'
            data={['All', 'Open', 'Closed']}
            value={statusFilter}
            onChange={val => setStatusFilter(val as 'All' | 'Open' | 'Closed')}
          />
        </div>

        {filteredTenders.length === 0 ? (
          <Text className='text-center text-gray-600'>
            No tenders found for selected filters.
          </Text>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {filteredTenders.map(tender => (
          
              <Card
                key={tender.id}
                shadow='md'
                padding='lg'
                radius='md'
                withBorder
                className='flex flex-col justify-between h-full'
              >
                <div>
                  <Group className='mb-2'>
                    <Title order={4}>{tender.title}</Title>
                    <Badge
                      color={tender.status === 'Open' ? 'green' : 'red'}
                      variant='light'
                    >
                      {tender.status}
                    </Badge>
                  </Group>
                  <Text className='mb-2 text-sm text-gray-700'>
                    {tender.description}
                  </Text>
                  <Badge color='blue' variant='light'>
                    {tender.deadline}
                  </Badge>
                </div>

                <div className='mt-auto pt-4'>
                  <Button
                    component='a'
                    href={tender.documentUrl}
                    leftSection={<FiDownload size={18} />}
                    download
                    className='w-full bg-gradient-to-r from-claret-600 to-claret-800 text-white text-sm'
                  >
                    Download Document
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    )
  }

  export default TendersPage
