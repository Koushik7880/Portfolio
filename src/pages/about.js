import AnimatedText from '@/components/AnimatedText'
import NavBar from '@/components/NavBar'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import portfolioPic from '../../public/images/profile/Koushik-2.png'

const about = () => {
  return (
    <>
      <Head>
        <title>KoushikDas | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <NavBar />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col item-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I'm Koushik Das, a Software Engineer and Full-Stack
                developer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients' visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium my-4">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rpunded-2xl bg-dark" /> */}
              <Image
                src={portfolioPic}
                alt="KoushikDas"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about
