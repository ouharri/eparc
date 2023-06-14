/* This example requires Tailwind CSS v2.0+ */
const stats = [
    {label: 'Founded', value: '2021'},
    {label: 'Employees', value: '5'},
    {label: 'Beta Users', value: '521'},
    {label: 'Raised', value: '$25M'},
]

export default function Example() {
    return (
        <div className="relative bg-transparent py-16 sm:py-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 w-full bg-gray-500 opacity-10 rounded-r-3xl lg:right-72"/>
                        <svg
                            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                            width={404}
                            height={392}
                            fill="none"
                            viewBox="0 0 404 392"
                        >
                            <defs>
                                <pattern
                                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                        </svg>
                    </div>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-red-400 mix-blend-multiply"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-red-400 via-red-400 opacity-90"/>
                            <div className="relative px-8">
                                <div>
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                                        alt="Workcation"
                                    />
                                </div>
                                <blockquote className="mt-8">
                                    <div className="relative text-lg font-medium text-white md:flex-grow">
                                        <svg
                                            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                        </svg>
                                        <p className="relative">
                                            Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur
                                            pretium in volutpat, diam.
                                            Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                                        </p>
                                    </div>

                                    <footer className="mt-4">
                                        <p className="text-base font-semibold text-indigo-200">Sarah Williams, CEO at
                                            Workcation</p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                            On a mission to empower teams
                        </h2>
                        <div className="mt-6 text-gray-500 space-y-6">
                            <p className="text-lg">
                                Welcome to our advanced fleet management web app, where efficiency meets simplicity.
                                With our powerful platform, managing your vehicle fleet has never been easier.
                                Streamline your operations, optimize performance, and stay in control of your fleet's
                                every move.
                            </p>
                            <p className="text-base leading-7">
                                Say goodbye to complex spreadsheets and manual tracking, and say hello to a seamless
                                fleet management experience. Unlock the full potential of your fleet with our
                                comprehensive suite of features and tools. Welcome to a new era of efficient and
                                hassle-free fleet management.
                            </p>
                            <p className="text-base leading-7">
                                Experience the power of our advanced fleet management web app. Our platform simplifies
                                fleet management, allowing you to streamline operations, optimize performance, and
                                maintain full control over your fleet's activities. Bid farewell to complicated
                                spreadsheets and laborious manual tracking, and embrace a seamless fleet management
                                experience. Unlock the complete potential of your fleet using our comprehensive set of
                                features and tools. Step into a new era of efficient and stress-free fleet management.
                            </p>
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className="mt-10">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-10">
                            <a href="#" className="text-base font-medium text-indigo-600">
                                {' '}
                                Learn more about how we're changing the world <span
                                aria-hidden="true">&rarr;</span>{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
