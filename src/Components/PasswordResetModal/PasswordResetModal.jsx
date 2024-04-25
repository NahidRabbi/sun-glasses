

const PasswordResetModal = () => {
    
    
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <label className="label">
        <a
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="label-text-alt link link-hover"
        >
          Forgot password?
        </a>
      </label>
      <dialog id="my_modal_2" className="modal">
        <div  className="modal-box flex flex-col">
                  <input type="text"/>
                  <button>submit</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn btn-sm btn-accent">close</button>
        </form>
      </dialog>
    </div>
  );
};

export default PasswordResetModal;