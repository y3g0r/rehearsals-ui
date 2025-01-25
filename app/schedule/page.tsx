import Link from "next/link";

export default function Home() {
    // mobile device oriented layout page with instructions on how to use the site and single button
    // which does nothing

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Choose date</h1>
            {/*<p className="text-lg mt-4">This site is designed for mobile devices.</p>*/}
            {/*<p className="text-lg">Please use a mobile device to access the site.</p>*/}
            {/* when button is clicked, navigate to /schedule */}
            {/*<p className="text-lg mt-4">To continue, click the button below.</p>*/}
            {/*<button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md">Start!</button>*/}
            <Link href={`/`}>Home!</Link>
        </div>
    );
}