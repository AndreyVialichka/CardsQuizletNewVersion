import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from 'react'

import { Button, TextField } from '../../components'
import {Table} from '../../components/ui/table'
import { useCreateDeckMutation, useGetDecksQuery } from '../../services/decks/decks.service.ts'
import { decksSlice } from '../../services/decks/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '../../services/store.ts'

export const Decks = () => {
  const [cardName, setCardName] = useState('')

  const dispatch = useAppDispatch()
  const itemsPerPage = useAppSelector(state => state.decksSlice.itemsPerPage)
  const currentPage = useAppSelector(state => state.decksSlice.currentPage)
  const searchByName = useAppSelector(state => state.decksSlice.searchByName)

  const setItemsPerPage = (itemsPerPage: number) =>
    dispatch(decksSlice.actions.setItemsPerPage(itemsPerPage))
  const setCurrentPage = (currentPage: number) =>
    dispatch(decksSlice.actions.setCurrentPage(currentPage))
  const setSearch = (search: string) => dispatch(decksSlice.actions.setSearchByName(search))

  const { isLoading, data, refetch } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
    orderBy: 'created-desc',
  })

  const [createDeck, { isLoading: isCreateDeckLoading }] = useCreateDeckMutation()

  const handleCreateClicked = () => createDeck({ name: cardName })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <div>
        <Button onClick={refetch}>refetch</Button>
      </div>
      <div>
        <Button onClick={() => setItemsPerPage(10)}>itemsPerPage: 10</Button>
        <Button onClick={() => setItemsPerPage(20)}>itemsPerPage: 20</Button>
        <Button onClick={() => setItemsPerPage(30)}>itemsPerPage: 30</Button>
      </div>
      <div>
        <Button onClick={() => setCurrentPage(1)}>currentPage: 1</Button>
        <Button onClick={() => setCurrentPage(2)}>currentPage: 2</Button>
        <Button onClick={() => setCurrentPage(3)}>currentPage: 3</Button>
      </div>
      <TextField value={searchByName} onChange={e => setSearch(e.currentTarget.value)} />
      <TextField
        value={cardName}
        onChange={(e: { currentTarget: { value: SetStateAction<string> } }) => setCardName(e.currentTarget.value)}
        label={'card name'}
      />
      <Button onClick={handleCreateClicked}>Create deck</Button>
      isCreateDeckLoading: {isCreateDeckLoading.toString()}
      <Table.Root>
        {/* table*/}
        <Table.Head>
          {/* thead*/}
          <Table.Row>
            {/* tr*/}
            <Table.HeadCell>Name</Table.HeadCell>
            {/* th*/}
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created By</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {/* tbody*/}
          {data?.items.map((deck: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; cardsCount: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; updated: string | number | Date; author: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined } }) => {
            return (
              <Table.Row key={deck.id}>
                {/* tr*/}
                <Table.Cell>{deck.name}</Table.Cell> {/* td*/}
                <Table.Cell>{deck.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(deck.updated).toLocaleString('en-GB')}</Table.Cell>
                <Table.Cell>{deck.author.name}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}