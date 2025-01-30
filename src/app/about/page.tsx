"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function AboutPage() {
  const router = useRouter()

  return (
    <div>AboutPage
      <button onClick={() => router.push("/")}>Home page back</button>
    </div>
  )
}

export default AboutPage