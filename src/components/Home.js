import React from 'react';
import image from '../moon-earth.jpg';

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="Earth from Moon"
                className="absolute min-h-screen object-cover w-full"
            />
            <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
                <h1
                    className="text-9xl text-gray-50 font-bold cursive leading-none lg:leading-snug home-name"
                >
                    Hello. I'm Dakota
                </h1>
            </section>
        </main>
    );
}