import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'

export default function Thanks() {
  return (
    <>
      <Head>
        <title>CALA. MIA</title>
        <meta name="description" content="Reinventing: Underwear, Swimwear and Activewear" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-screen overflow-hidden bg-white grid grid-cols-1 content-center">
              <div className="mx-auto max-w-lg -mt-8 md:-mt-16 relative z-10 content-center">
                <motion.div
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    initial={{ y: 20, opacity: 0, scale: 1}}
                  >
                    <div className="flex w-[180px] md:w-[240px] m-auto mb-8 md:mb-16">
                      <span className="sr-only">CALA. MIA</span>
                      <Image
                        className="h-auto w-full m-auto"
                        src="/logo.png"
                        alt=""
                        width="194"
                        height="158"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                    }}
                    initial={{ y: 20, opacity: 0, scale: 1 }}
                  >
                    <div className="pt-0">
                      <div className="px-8">
                        <h3 className="text-xl md:text-xl uppercase font-light tracking-wide italic text-gray-500 text-center mb-4">
                          Thank you
                        </h3>
             
                        <div className="text-center text-gray-300">
                          <Link href="https://instagram.com/shopcalamia" className="inline text-gray-900 hover:text-gray-400">Instagram</Link>
                          {" | "}
                          <Link href="https://www.tiktok.com/@shopcalamia" className="inline text-gray-900 hover:text-gray-400">TikTok</Link>
                          {" | "}
                          <Link href="https://twitter.com/shopcalamia" className="inline text-gray-900 hover:text-gray-400">Twitter</Link>
                          {/* {" | "}
                          <Link href="/" className="inline text-gray-900 hover:text-gray-400">Facebook</Link> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}