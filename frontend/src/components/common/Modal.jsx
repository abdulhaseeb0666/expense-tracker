const Modal = ({ children, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-slate-900/40
            backdrop-blur-sm
            p-4
        ">
            <div
                className="
                    bg-white
                    rounded-3xl
                    shadow-2xl
                    border border-[#D9E8E3]
                    w-full
                    max-w-lg
                    p-6
                    animate-fadeIn
                "
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;