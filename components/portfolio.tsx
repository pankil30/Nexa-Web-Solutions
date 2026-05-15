




'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const firstRow = [
    {
      title: 'Beauty Store',
      category: 'E-Commerce',
      image: '/First/a.png',
    },
    {
      title: 'Clothing Store',
      category: 'E-Commerce',
      image: '/First/d.png',
    },
    {
      title: 'Dental Clinic',
      category: 'Medical',
      image: '/First/e.png',
    },
    {
      title: 'Finance Dashboard',
      category: 'Finance',
      image: '/First/f.png',
    },
    {
      title: 'Fitness Center',
      category: 'Support',
      image: '/First/g.png',
    },
    {
      title: 'Yoga Studio',
      category: 'Health',
      image: '/First/h.png',
    },
  ]

  const secondRow = [
    {
      title: 'Clothing Store',
      category: 'E-Commerce',
      image:
        '/second/Clothing.png'
    },
    {
      title: 'Dental Clinic',
      category: 'Dental',
      image:
        '/second/Dental.png'
    },
    {
      title: 'Real Estate Studio',
      category: 'Real Estate',
      image:
        '/second/Real.png',
    },
    {
      title: 'Sunglasses',
      category: 'E-Commerce',
      image:
        '/second/Sunglassis.png',
    },
    {
      title: 'Travel Agency',
      category: 'E-Commerce',
      image:
        '/second/travel.png',
    },
    {
      title: 'Yoga Studio',
      category: 'Health',
      image:
        '/second/Yoga.png',
    },
  ]

  return (
    <section
      id="portfolio"
      className="py-20 bg-white overflow-hidden"
    >
      {/* HEADING */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black">
          Our Latest
          <span className="block bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* FIRST ROW */}
      <div className="relative overflow-hidden mb-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-6 w-max"
        >
          {[...firstRow, ...firstRow].map((project, index) => (
            <div
              key={index}
              className="relative w-[320px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[280px] md:h-[300px] rounded-3xl overflow-hidden shrink-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={index < 2}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-fill"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

              <div className="absolute inset-0 z-10 text-white">
                <span className="absolute top-4 left-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-purple-100 backdrop-blur-sm">
                  {project.category}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SECOND ROW */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-5 w-max"
        >
          {[...secondRow, ...secondRow].map((project, index) => (
            <div
              key={index}
              className="relative w-[260px] sm:w-[350px] md:w-[340px] h-[600px] md:h-[650px] rounded-3xl overflow-hidden shrink-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-fill"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

              <div className="absolute inset-0 z-10 text-white">
                <span className="absolute top-4 left-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-purple-100 backdrop-blur-sm">
                  {project.category}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold leading-tight text-white sm:text-2xl">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}