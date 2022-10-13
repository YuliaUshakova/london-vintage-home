function Contacts() {
    return (<div className="heading">
<h2>Связаться с нами</h2>

  <div className="heading">
    
    <form 
  action="https://formspree.io/f/mgedjrbp"
  method="POST"
  input type="hidden" name="language" value="ru"
/>
<div className="sendemail">
  <label>
    Ваш электронный адрес:
    <input type="email" name="email" class="text-input" required/>
  </label>
</div>
<br></br>
<div className="sendemail">
  <label>
   Ваше сообщение:
    <textarea class="text-input" name="message"  required></textarea>
  </label>
</div>
<br></br>
  <div>
   <button type="submit" className="btn">Отправить</button>

</div>
  </div>
  <div className="footer">
    <hr/>
    <p>@All visual materials are from open sources and are used for demonstration purposes only</p>
  </div>
  </div>
    );
  }
  
  export default Contacts;