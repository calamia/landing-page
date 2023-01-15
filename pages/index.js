import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup, useCycle } from "framer-motion";
import Image from 'next/image'

const texts = ["Under", "Swim", "Active"];
const variants = {
  enter: direction => {
    return {
      y: 0,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     let next = index + 1;
  //     if (next === texts.length) {
  //       next = 0;
  //     }
  //     setIndex(next);
  //   }, 3 * 1000);
  // }, [index, setIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index == 2) {
        setIndex(2)
        setIsVisible(true)
      }
      else {
        setIndex((index) => index + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  });

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
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="min-h-screen overflow-hidden bg-white grid grid-cols-1 content-center">
                <div className="mx-auto max-w-lg -mt-16 relative z-10 content-center">
                  <motion.div
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                          duration: 0.6,
                          delay: 0.2,
                      }}
                      initial={{ y: 20, opacity: 0, scale: 1}}
                    >
                      <div className="flex w-[180px] md:w-[240px] m-auto mb-8">
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
                      <div className="mx-auto w-full max-w-l relative z-10 content-center">
                        <div className="text-2xl md:text-3xl uppercase font-light tracking-wide italic text-gray-400 text-left">
                          Coming Soon
                        </div>
                      </div>
                      {/* <div className="bg-gray-50 sm:rounded-sm mt-6">
                        <div className="px-4 py-5 sm:p-6">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">Launch early access</h3>
                          <div className="mt-2 max-w-xl text-sm text-gray-500">
                            <p>Enter your email and you&apos;ll be the first to get notified when we launch.</p>
                          </div>

                            <form className="mt-5">
                              <div className="w-full">
                                <label htmlFor="email" className="sr-only">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  required
                                  className="block w-full rounded-md py-4 px-4 border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                  placeholder="you@example.com"
                                />
                              </div>
                              <button
                                type="submit"
                                className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 py-5 px-8 text-base font-bold tracking-wider italic uppercase text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                              >
                                Join Waitlist
                              </button>
                            </form>

                          </div>
                        </div> */}
                    </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {!isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="min-h-screen overflow-hidden bg-gray-900 grid grid-cols-1 content-center">
                <div className="mx-auto -mt-16 relative z-10 content-center px-4">
                  <h1>
                    <motion.div
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                          duration: 0.6,
                          delay: 0.4,
                      }}
                      initial={{ y: 20, opacity: 0, scale: 1 }}
                    >
                      <div className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-light tracking-wide italic text-gray-400 text-left">Reinventing</div>
                    </motion.div>
                    <motion.div
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                          duration: 0.8,
                          delay: 0.8,
                      }}
                      initial={{ y: 30, opacity: 0, scale: 1 }}
                    >
                      <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl relative uppercase font-bold tracking-tighter italic text-white flex">
                        <div className="w-[155px] sm:w-[235px] md:w-[315px] lg:w-[410px] block relative">
                          <span className="text-right w-full">
                            <span className="absolute right-0">
                              <motion.span
                                variants={variants}
                                key={index}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                  y: { type: "spring", stiffness: 100, damping: 10 },
                                  opacity: { duration: 0.8 }
                                }}
                              >
                                {texts[index]}
                              </motion.span>
                            </span>
                          </span>
                        </div>
                        <div className="relative text-right">
                          wear
                        </div>
                      </div>
                    </motion.div>
                  </h1>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
