const Modal = ({ children, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-5 rounded w-96">
                {children}
            </div>
        </div>
    );
};

export default Modal;