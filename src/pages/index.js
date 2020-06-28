import React from "react"

const hello="こんにちは"

export default function Home() {
  return <div>
    <h1>挨拶</h1>
    <h2 className="japan">日本語</h2>
    <p style={{color:"#eee"}}>{hello}</p>
    <p><img src="/images/about.jpg" alt="イメージ"/></p>
    <footer>
      Presented by Moniker
    </footer>
  </div>
}
