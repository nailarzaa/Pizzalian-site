import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
    <h1>Contact Us</h1>
    <p>Any questions of remarks? Just write us a message!</p>
    <div className="map-mail">
      <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1saz!2sus!4v1728639913789!5m2!1saz!2sus" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="mail">
        <p>Name:</p>
        <input type="text" name="" id="" />
        <p>Surname:</p>
        <input type="text" name="" id="" />
        <p>Mail:</p>
        <input type="text" name="" id="" />
        <p>Share Feedback</p>
        <textarea name="" id=""></textarea>
        <button>Send Message</button>

      </div>
    </div>
  </section>
  )
}

export default Contact