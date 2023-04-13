import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Header({ balance }: { balance: string }) {
  const router = useRouter()
  const { address } = router.query

  return (
    <div className={`${styles.description} ${styles.center} mb-2`}>
      <div>
        <div className='mb-2'>
          <h4>Address</h4>
          <p>
            {address}
          </p>
        </div>
        <div className='mb-2'>
          <h4>Balance</h4>
          <p>
            {balance}
          </p>
        </div>
      </div>
    </div>
  )
}
