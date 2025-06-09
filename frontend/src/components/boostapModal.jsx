import { useEffect, useRef } from "react";

const MessageModal = ({ show, setShow, message }) => {


    const modalRef= useRef()

      useEffect(() => {
    if (show && modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
      modalRef.current.addEventListener("hidden.bs.modal", () => setShow(false));
    }
  }, [show, setShow]);



  return (
        <div class="modal" tabindex="-1"  ref={modalRef}>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Pinhas Predict</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                 <p>{message || "Something went wrong."}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
  );
};

export default MessageModal;
