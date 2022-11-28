import React from 'react'

const contact = () => {
  return (
    <div className="contact">

        <main>
            <h1>Contat Us</h1>
            <form action="">
                <div>
                    <label>Email</label>
                    <input type="text" required placeholder='Abc' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Abc' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="email" required placeholder='Tell us about your query...' />
                </div>
                <button type="submit">Send</button>
            </form>
        </main>
      
    </div>
  )
}

export default contact
