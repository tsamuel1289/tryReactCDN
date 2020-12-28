const Contact = () => {
        
    const guardarTarea = () => {
        
        const contactForm = document.getElementById('contactForm');
        console.log(contactForm.fullName.value)
        contactForm.reset()
    }

    return(
        <div className="form-content">
            <h1 className="title-intro">Contactanos</h1>
            <div className="contact-wrapper">
                <div className="contact-form">
                    <h3>Formulario de contacto</h3>
                    <form id="contactForm" >
                        <p>
                            <label><i className="fa fa-address-card"></i> Nombre Completo</label>
                            <input type="text" name="fullName" placeholder = "ej. Juan Perez"/>
                        </p>
                        <p>
                            <label><i className="fa fa-envelope"></i> Dirección Email</label>
                            <input type="email" name="email" placeholder="ej. persona@mail.com"/>
                        </p>
                        <p>
                            <label><i className="fa fa-phone-square"></i> Teléfono</label>
                            <input type="tel" name="phone" placeholder="ej. (591) 7XX 650 XX"/>
                        </p>
                        <p>
                            <label><i className="fa fa-building"></i> Empresa</label>
                            <input type="text" name="company" />
                        </p>
                        <p>
                            <label><i className="fa fa-comments" aria-hidden="true"></i> Mensaje</label>
                            <textarea name="message" rows="5"></textarea>
                        </p>
                        <p>
                            <button type="button" onClick={guardarTarea}>
                                Enviar
                            </button>
                        </p>

                    </form>
                    
                </div>
                <div className="contact-info">
                    <h4>Información Empresarial</h4>
                    <ul>
                        <li><i className="fa fa-map-marker"> Av. Roca y Coronado Nro. 732 entre 2do y 3er anillo</i></li>
                        <li><i className="fa fa-phone"> (591) 33 571527</i></li>
                        <li><i className="fa fa-envelope"> administracion@boldrill.com</i></li>
                    </ul>
                    <p>Contactanos a traves de tu medio de comunicación preferido, te responderemos a la brevedad posible</p>
                    <p>www.boldrill.com</p>
                </div>
                
            </div>
        </div>
    )
    
}