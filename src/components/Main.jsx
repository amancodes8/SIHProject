import React from 'react'
import Card from './Card'
import { useEffect, useState } from "react";
import gsap from 'gsap'
import Form from './Form';
import Articles from './Articles';

function Main() {


    useEffect(() => {
        const textElement = document.querySelector(".textstyle p");

        if (textElement) {
            const text = textElement.textContent;
            textElement.innerHTML = "";

            const fragment = document.createDocumentFragment();
            text.split("").forEach((char) => {
                const span = document.createElement("span");
                span.textContent = char;
                fragment.appendChild(span);
            });

            textElement.appendChild(fragment);

            gsap.fromTo(
                textElement.querySelectorAll("span"),
                { opacity: 0 },
                {
                    opacity: 70,
                    duration: 1.5,
                    stagger: 0.1,
                    repeat: -1,
                }
            );
        }
    }, []);

    return (
        <div>
            <Card />
            <Articles />
        </div>

    )
}

export default Main
