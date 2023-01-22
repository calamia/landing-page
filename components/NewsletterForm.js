import { useState } from 'react';
import { decode } from 'html-entities';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'

const NewsletterForm = ( { status, message, onValidated }) => {
  const router = useRouter()
  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ name, setName ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( !email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const [firstName, lastName] = name ? name.split(' ') : ''

    const isFormValidated = onValidated({
      FULLNAME: name ? name : '', 
      FNAME: firstName ? firstName : '', 
      LNAME: lastName ? lastName : '',
      EMAIL: email
    });

    console.log({ FULLNAME: name, firstName: firstName, lastName: lastName, EMAIL: email })

    if (status === "success" && status !== "error" && !error) {
      router.push('/thank-you')
    }

    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="px-8">
        <h3 className="text-2xl md:text-3xl uppercase font-light tracking-wide italic text-gray-500 text-center">
          Coming Soon
        </h3>
        <div className="m-auto mt-2 max-w-xs text-sm text-gray-900 text-center mb-4">
          <p>Sign up below for exclusive updates, sneak peeks, and be first in line for launch.</p>
        </div>
        <div className="mb-4">
          <label className="sr-only">Full Name</label>
          <input
            onChange={(event) => setName(event?.target?.value ?? '')}
            type="text"
            placeholder="Full name"
            className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
                                                
        </div>
        <div className="mb-4">
          <label className="sr-only">Email</label>
          <div className="relative">
            <input
              onChange={(event) => setEmail(event?.target?.value ?? '')}
              type="email"
              placeholder="Your email"
              className={status === "error" || error
                ? "block w-full rounded-md px-5 py-3 border-red-300 pr-10 text-red-900 placeholder-red-400 focus:border-red-500 focus:outline-none focus:ring-red-500"
                : "block w-full rounded-md px-5 py-3 border border-gray-300  placeholder-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
              }
              onKeyUp={(event) => handleInputKeyEvent(event)}
            />
            {status === "error" || error ? (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            ) : null }
          </div>
          {status === "error" || error ? (
            <p className="mt-2 text-sm text-red-600" id="email-error" dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }} />
          ) : null}
          
        </div>
        <div className="button-wrap wp-block-button">
          <button
            onClick={handleFormSubmit}
            className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 py-5 px-8 text-base font-bold tracking-wider italic uppercase cursor-pointer text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {status === "sending" ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsletterForm