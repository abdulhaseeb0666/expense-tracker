const Loader = () => {
    return (
        <div className="flex justify-center items-center py-20">

            <div className="relative">

                <div
                    className="
                        h-14 w-14
                        rounded-full
                        border-4
                        border-[#D9E8E3]
                    "
                />

                <div
                    className="
                        absolute inset-0
                        h-14 w-14
                        rounded-full
                        border-4
                        border-transparent
                        border-t-[#2F6B5F]
                        animate-spin
                    "
                />

            </div>

        </div>
    );
};

export default Loader;