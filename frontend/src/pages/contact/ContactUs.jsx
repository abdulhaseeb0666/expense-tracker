import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane
} from "react-icons/fa";

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add API call here later
        console.log("Contact form submitted");
    };

    return (

        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">

            {/* Hero Section */}

            <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">

                <div className="text-center">

                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        Contact Us
                    </h1>

                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Have questions, feedback, or need help with your
                        Expense Tracker account? We'd love to hear from you.
                    </p>

                </div>

            </section>

            {/* Contact Section */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side */}

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

                        <h2 className="text-3xl font-bold text-slate-800 mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">

                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <FaEnvelope />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-slate-800">
                                        Email
                                    </h3>

                                    <p className="text-slate-500">
                                        support@expensetracker.com
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <FaPhone />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-slate-800">
                                        Phone
                                    </h3>

                                    <p className="text-slate-500">
                                        +92 300 1234567
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-slate-800">
                                        Location
                                    </h3>

                                    <p className="text-slate-500">
                                        Multan, Punjab, Pakistan
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-100">

                            <h3 className="font-semibold text-emerald-700 mb-2">
                                Support Hours
                            </h3>

                            <p className="text-slate-600">
                                Monday - Friday
                            </p>

                            <p className="text-slate-600">
                                9:00 AM - 6:00 PM
                            </p>

                        </div>

                    </div>

                    {/* Right Side Form */}

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

                        <h2 className="text-3xl font-bold text-slate-800 mb-8">
                            Send a Message
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            <div>

                                <label className="block mb-2 text-slate-600 font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="
                                        w-full
                                        p-4
                                        border
                                        border-slate-200
                                        rounded-xl
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-emerald-500
                                    "
                                />

                            </div>

                            <div>

                                <label className="block mb-2 text-slate-600 font-medium">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        w-full
                                        p-4
                                        border
                                        border-slate-200
                                        rounded-xl
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-emerald-500
                                    "
                                />

                            </div>

                            <div>

                                <label className="block mb-2 text-slate-600 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="
                                        w-full
                                        p-4
                                        border
                                        border-slate-200
                                        rounded-xl
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-emerald-500
                                    "
                                />

                            </div>

                            <div>

                                <label className="block mb-2 text-slate-600 font-medium">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    className="
                                        w-full
                                        p-4
                                        border
                                        border-slate-200
                                        rounded-xl
                                        resize-none
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-emerald-500
                                    "
                                />

                            </div>

                            <button
                                type="submit"
                                className="
                                    w-full
                                    bg-emerald-600
                                    hover:bg-emerald-700
                                    text-white
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    transition
                                    flex
                                    justify-center
                                    items-center
                                    gap-2
                                "
                            >
                                <FaPaperPlane />
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </div>

    );
};

export default ContactUs;