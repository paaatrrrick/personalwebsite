const articles = [
    { title: 'Article 1', id: 'javascript' },
    { title: 'Article 2', id: 2 },
    { title: 'Article 3', id: 3 },
    { title: 'Article 4', id: 4 },
    { title: 'Article 5', id: 5 }
];

const idsAndArticles = {
    'javascript': {
        title: 'Article 1', context:
            <div>
                <p>JavaScript is a high-level, interpreted programming language that was created in the mid-1990s. It was initially developed by Brendan Eich, a programmer at Netscape Communications Corporation, with the goal of adding interactive elements to web pages.

                    JavaScript was first released in 1995 as Mocha, a scripting language for Netscape Navigator, the first widely used web browser. In 1996, the language was renamed to JavaScript, and it quickly gained popularity as a way for developers to add interactivity to websites.

                    One of the defining features of JavaScript is its ability to run natively in web browsers, which made it a popular choice for client-side scripting. This allowed developers to add dynamic elements to web pages, such as drop-down menus, pop-ups, and other interactive features, without the need for server-side processing.

                    In the late 1990s and early 2000s, JavaScript became an essential tool for building dynamic and interactive websites. However, it was also criticized for its lack of scalability and unreliable behavior, as the language was heavily reliant on the individual implementations of each web browser.

                    To address these issues, a standardized version of JavaScript, ECMAScript, was released in 1997. This standardization allowed developers to write code that would run consistently across different web browsers and platforms.

                    In recent years, JavaScript has seen a resurgence in popularity, thanks to the rise of web-based applications and the increasing complexity of web development. In addition to being used for client-side scripting, JavaScript is now used for server-side development through technologies like Node.js, which allows developers to build full-stack web applications using JavaScript.

                    The rise of JavaScript as a versatile and widely used programming language has also led to a thriving ecosystem of libraries and frameworks. Popular frameworks like React, Angular, and Vue.js make it easier for developers to build complex and dynamic web applications.

                    Despite its success, JavaScript continues to face challenges, such as a lack of type safety and the need for better performance. To address these challenges, new versions of the language are constantly being developed, with ECMAScript 2021 being the latest version released.

                    In conclusion, JavaScript has come a long way since its inception in the mid-1990s. From its early days as a tool for adding interactivity to web pages, it has evolved into a versatile and widely used programming language that is at the heart of modern web development. With its ever-growing ecosystem of libraries and frameworks, the future looks bright for JavaScript and its continued impact on the web.</p>
            </div>,
    },
}


const getArticle = (id) => {
    return idsAndArticles[id];
}

export { articles, getArticle };