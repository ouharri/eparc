import Nav from "../../components/core/navBar";
import {MailIcon, PhoneIcon} from '@heroicons/react/outline'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import isAuthenticated from "../../helpers/authenticate";
import userInfo from "../../helpers/userInfo";
import Footer from "../../components/core/footer";

export default function Contact() {

    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuth() {
            await setIsAuth(await isAuthenticated());
            await setUser(await userInfo());
        }

        checkAuth().then(async r => {
            if (await isAuthenticated()) {
                console.log(await userInfo());
                await setUser(await userInfo());
            }else{
                console.log("notAuth");
            }
        });

    }, [isAuth]);

    return (
        <>
            <Nav IsAuth={isAuth} User={user.user}/>
            <section className="bg-transparent">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need
                        details about our Business plan? Let us know.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required=""
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                                defaultValue={""}
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-400 sm:w-fit hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
            <div className="relative bg-red-400">
                <div className="h-56 bg-red-500 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
                        alt=""
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>
                        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                        <p className="mt-3 text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                            tincidunt duis.
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                                >
                                    Visit the help center
                                    <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-transparent">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Sales Support</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
                                    amet. Sapien tortor
                                    lacus arcu.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true"/>
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+1 (555) 123 4567</p>
                                        <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true"/>
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-0">
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Technical Support</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat error
                                    corporis doloribus
                                    similique, voluptatibus numquam quam, quae officiis facilis.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true"/>
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+1 (555) 123 4567</p>
                                        <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true"/>
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
