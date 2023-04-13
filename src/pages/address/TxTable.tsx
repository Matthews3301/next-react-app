import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { truncateAddress, formatValue, formatDate } from '@/utils'
import { useState, useEffect } from 'react'


export default function TxTable({ txs }: { txs: any[] }) {

  const [txsState, setTxsState] = useState(txs)
  const [sortKey, setSortKey] = useState('timeStamp')
  const [isSortAscending, setIsSortAscending] = useState(false)

  function sortBy(key: string) {
    const isAscending = key === sortKey ? !isSortAscending : true;
    setSortKey(key);
    setIsSortAscending(isAscending);
  
    const sortedTxs = [...txsState].sort((a, b) => {
      const order = isAscending ? 1 : -1;
      if (Number(a[key]) < Number(b[key])) {
        return -1 * order;
      }
      if (Number(a[key]) > Number(b[key])) {
        return 1 * order;
      }
      return 0;
    });
    setTxsState(sortedTxs);
  }

  useEffect(() => {
    setTxsState(txs)
  }, [txs])

  return (
    <div className={`${styles.description} ${styles.center}`}>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => sortBy('timeStamp')}
              className='a-style'
            >Timestamp</th>
            <th
              onClick={() => sortBy('value')}
              className='a-style'
            >Amount</th>
            <th>From</th>
            <th>To</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {txsState.map((tx) => (
            <tr key={tx.hash} className='mb-2'>
              <td>{formatDate(tx.timeStamp)}</td>
              <td>{formatValue(tx.value)} ETH</td>
              <td>
                <Link href={`/address/${tx.from}`}>
                  {truncateAddress(tx.from)}
                </Link>
              </td>
              <td>
                <Link href={`/address/${tx.to}`}>
                  {truncateAddress(tx.to)}
                </Link>
              </td>
              <td style={{ textAlign: 'right' }}>
                <Link href={`/tx/${tx.hash}`}>
                  🔍
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
