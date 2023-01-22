import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import Script from 'next/script'
import NewsletterSubscribe from '../components/NewsletterSubscribe';

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
                        <NewsletterSubscribe />
                      </div>
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
                        <div className="w-[165px] sm:w-[245px] md:w-[320px] lg:w-[410px] block relative">
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
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        onReady={() => {
          (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='FULLNAME';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
        }}
      />
    </>
  )
}

