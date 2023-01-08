import { addHours, differenceInSeconds } from 'date-fns';
import React, { useMemo, useState } from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import DatePicker ,{ registerLocale}from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import Modal from 'react-modal'
import './modal.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root')

registerLocale('es', es)

export const CalendarModal = () => {

  const [modalIsOpen, setIsOpen] = useState(true);
  const [formsubmit, setFormsubmit] = useState(false);

  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours (new Date(), 2)
  })

  const titleClass = useMemo(() => {

    if(!formValues.title && !formsubmit) return 'form-control'

    if (formsubmit) {
      return (formValues.title.trim().length < 2) ? 'form-control is-invalid' : 'form-control is-valid'
    }  
   
  }, [formValues.title, formsubmit])

  const notesClass = useMemo(() => {

    if(!formValues.notes && !formsubmit) return 'form-control'

    if (formsubmit) {
      return (formValues.notes.trim().length < 2) ? 'form-control is-invalid' : 'form-control is-valid'
    }

}, [formValues.notes, formsubmit])


  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChange = (e,change) => {
    setFormValues({
      ...formValues,
      [change]: e
    })
  }

    const oncloseModal = () => {
        setIsOpen(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormsubmit(true);

        const diference = differenceInSeconds(formValues.end, formValues.start);
        if (isNaN(diference)|| diference <= 0) {
          Swal.fire('Fechas incorrectas', 'La fecha fin debe ser mayor a la fecha de inicio', 'error');
            return;

        }

        if (formValues.title.trim().length < 2) {
          Swal.fire('Titulo incorrecto', 'El titulo debe ser mayor a 2 letras', 'error');

            return;
        }

        if (formValues.notes.trim().length < 2) {
          Swal.fire('Notas incorrectas', 'Las notas deben ser mayor a 2 letras', 'error');
            return;
        }

        console.log('Todo bien');
                console.log(formValues);
    }



  return (
   <Modal
    isOpen={modalIsOpen}
    onRequestClose={oncloseModal}
    style={customStyles}
    closeTimeoutMS={200}
    className="modal"
    overlayClassName="modal-fondo"    
   >
       <h1> Nuevo asiento </h1>
<hr />
<form className="container"  onSubmit={onSubmit}  >

    <div className="form-group mb-2">
        <label>Fecha y hora inicio</label>
      <DatePicker
        className="form-control"
        locale={es}        
        selected={formValues.start}
        onChange={e => onDateChange(e,'start')}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="hora"
        dateFormat="MMMM d, yyyy h:mm aa"

      />
    </div>

    <div className="form-group mb-2">
        <label>Fecha y hora fin</label>
        <DatePicker
        className="form-control"
        locale={es}
        minDate={formValues.start}
        selected={formValues.end}
        onChange={e => onDateChange(e,'end')}      
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="hora"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Asiento :</label>
        <input 
            type="text" 
            className={titleClass}
            placeholder="Asiento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
        />
        <small id="emailHelp" className="form-text text-muted">Descripción :</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className={notesClass}
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>
            <span 
           type="button"
           className='btn-close'
            onClick={oncloseModal}>
            <i className="fas fa-window-close"
            style={{
                color: 'red',
                fontSize: '20px',
            }}
            ></i>
            </span>

            


   </Modal>
  )
}
