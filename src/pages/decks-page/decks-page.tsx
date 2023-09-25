import { useState } from 'react'

import s from './decks-page.module.scss'
import { Column, Page, Table, Typography } from '../../components/ui'
import Button from '../../components/ui/button/button'
import { useGetDecksQuery } from '../../services/decks/decks.service'


const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'author',
    title: 'Created By',
  },
  {
    key: 'actions',
    title: '',
  },
]

export const DecksPage = () => {
  const { data: decks } = useGetDecksQuery()


  //   const [activeTab, setActiveTab] = useState('my')
//   const [range, setRange] = useState([0, 100])
//   const [rangeValue, setRangeValue] = useState([0, 1])

  if (!decks) return <div>loading...</div>

  return (
    <Page>
      <div className={s.root}>
        <div className={s.header}>
          <Typography variant="large">Decks</Typography>
          <Button>Add new deck</Button>
        </div>
        <Table.Root>
          <Table.Header columns={columns} />
          <Table.Body>
            {decks?.items.map(deck => (
              <Table.Row key={deck.id}>
                <Table.Cell>{deck.name}</Table.Cell>
                <Table.Cell>{deck.cardsCount}</Table.Cell>
                <Table.Cell>{deck.updated}</Table.Cell>
                <Table.Cell>{deck.author.name}</Table.Cell>
                <Table.Cell>...</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Page>
  )
}
