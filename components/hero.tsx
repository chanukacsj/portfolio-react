"use client"

import Image from "next/image"

export default function Hero() {
 const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Chanuka_Sri_Jeewantha_CV.pdf"
    link.download = "Chanuka_Sri_Jeewantha_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-27%20at%203.58.14%20PM%20-%20Copy-96HpqYKq93HKG9lxBoUjkKmM8zDoJH.jpeg"
              alt="Chanuka Sri Jeewantha"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          Chanuka Sri Jeewantha 
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground text-balance">
          Full-Stack Developer
        </p>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          I'm a full stack developer with a passion for creating innovative and
        user-friendly web applications.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <button
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Download Resume
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
