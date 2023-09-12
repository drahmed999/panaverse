import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/components/widget/Hero'
import CoreTracks from '@/components/widget/CoreTracks'
import SpecializedTracks from '@/components/widget/SpecializedTracks'
import EndSection from '@/components/widget/EndSection'


export default function Home() {
  return (<>
    <main>
      {/* hero section */}
      <Hero/>
      {/* CoreTracks section */}
      <CoreTracks/>
      {/* Specialised Tracks Section*/}
      <SpecializedTracks/>
      {/* End Section */}
      <EndSection/>
    </main>
    </>

  )
}
