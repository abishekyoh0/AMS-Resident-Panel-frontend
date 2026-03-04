export default function MoveInForm() {

    return (

        <div className="min-h-screen bg-black text-white p-6 flex justify-center">

            <div className="max-w-4xl w-full space-y-6">

                <h2 className="text-3xl font-bold">New Move-IN Form</h2>


                <div className="bg-gray-900 p-6 rounded-xl">

                    <h3 className="text-lg mb-4">Tenant Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">

                        <input placeholder="Full Name" className="input" />
                        <input placeholder="Phone Number" className="input" />

                    </div>

                    <input placeholder="Email Address" className="input mt-4" />

                </div>


                <div className="bg-gray-900 p-6 rounded-xl">

                    <h3 className="mb-4">Property Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">

                        <input placeholder="Tower Name" className="input" />
                        <input placeholder="Tower No" className="input" />

                        <select className="input">
                            <option>Select Resident Type</option>
                        </select>

                        <input type="date" className="input" />

                    </div>

                </div>


                <div className="bg-gray-900 p-6 rounded-xl">

                    <h3 className="mb-4">Security Deposit</h3>

                    <input placeholder="Deposit Amount" className="input mb-4" />
                    <input placeholder="Maintenance Amount" className="input" />

                </div>

                <div className="flex justify-end gap-4">

                    <button className="px-6 py-2 bg-gray-700 rounded-lg">
                        Cancel
                    </button>

                    <button className="px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-400 rounded-lg">
                        Submit Form
                    </button>

                </div>

            </div>

        </div>

    )
}