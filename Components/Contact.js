const Contact = () => {
    
    
    return(
        <div className="form-content">
            <h1 className="title-intro">Contactanos</h1>
            <div className="contact-wrapper">
                <div className="contact-form">
                    <h3>Contactanos</h3>
                    <form action="">
                        <p>
                            <label>Nombre Completo</label>
                            <input type="text" name="fullName" placeholder = "ej. Juan Perez"/>
                        </p>
                        <p>
                            <label>Dirección Email</label>
                            <input type="email" name="email" placeholder="ej. persona@mail.com"/>
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="tel" name="phone" placeholder="ej. (591) 7XX 650 XX"/>
                        </p>
                        <p>
                            <label>Empresa</label>
                            <input type="text" name="company" />
                        </p>
                        <p>
                            <label>Mensaje</label>
                            <textarea name="message" rows="5"></textarea>
                        </p>
                        <p>
                            <button type="submit">
                                Enviar
                            </button>
                        </p>

                    </form>
                </div>
                <div className="contact-info">

                </div>
            </div>
        </div>
    )
}