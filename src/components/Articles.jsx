import React, { useEffect, useRef } from 'react';

function Articles() {

    const article = [
        {
            image: "",
            question: "Myth 1: Do Menstrual Cycles Sync When Women Live Together?",
            solution: "This idea, known as menstrual synchrony,  is largely unsupported by scientific evidence. Research shows that any perceived synchronization is more likely a coincidence than a biological phenomenon. The variations in cycle length and environmental factors lead to this perception, but studies have not found consistent evidence to back up the claim. The body’s natural rhythms aren’t influenced by proximity to other women, as previously thought."

        }

        ,
        {
            image: "",
            question: "Myth 2: Is It Unhealthy to Skip Periods With Birth Control? Myth? ",
            solution: "It’s actually safe to skip periods when using hormonal contraceptives, like birth control pills, IUDs, or implants. These methods work by thinning the uterine lining, making periods lighter or even absent. Medical professionals agree that skipping periods with birth control does not negatively impact your health. In fact, it can reduce the risk of anemia, alleviate symptoms of endometriosis, and improve quality of life for women with painful periods."

        },
        {
            image: "",
            question: "Myth 3: Does a Missed Period Always Mean Pregnancy? Myth? Missing a period is often immediately associated with pregnancy.",
            solution: "While pregnancy is a common cause, many other factors can result in a missed period. Stress, changes in weight, polycystic ovary syndrome (PCOS), excessive exercise, or thyroid problems can all disrupt the menstrual cycle. If missed periods occur regularly, it’s essential to consult a healthcare provider to investigate potential underlying health issues.            "

        },

    ]

    const articleRef = useRef([]);

    return (
        <div className='flex bg-gradient-to-bl flex-col from-orange-100 via-red-100 to-yellow-100 w-screen h-100 p-2 gap-10 overflow-hidden items-center'>
            <h1 className='w-full text-center'>Articles</h1>

            {
                article.map((Article, index) => (
                    <div
                        key={index}
                        ref={(el) => (articleRef.current[index] = el)}
                        className='min-h-60 max-h-60 w-[95%]  border-black border-2 flex text-center rounded-lg p-1'

                    >
                        <img className={`min-w-[40%] border border-black h-100`} src="Article.image" alt={`Article ${index + 1}`} />
                        <div className='overflow-auto bg-yellow-300 text-black font-serif font-semibold p-2 border border-black no-scrollbar'>
                            <p>{Article.question}</p>
                            <p>{Article.solution}</p>

                        </div>

                    </div>
                ))
            }



        </div>
    )
}

export default Articles
