import React, { Component } from "react";

// Suponga que esta respuesta procede de un servicio y tiene algún tipo de ataque XSS en su contenido...
const response = [
  {
    id: 1,
    title: "My blog post 1...",
    content: `<p>This is <strong>HTML</strong></p>`,
  },
  {
    id: 2,
    title: "My blog post 2...",
    content: `<p>Alert: <script>alert(1);</script></p>`,
  },
  {
    id: 3,
    title: "My blog post 3...",
    content: `<p>
                <img onmouseover="alert('This site is not secure');" src="attack.jpg"/>
            </p>`,
  },
];

// Suponga que este es el initialState de Redux que se inyecta en el DOM...
const initialState = JSON.stringify(response);

const removeXSSAttacks = (html) => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  // Elimine las etiquetas <script>
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  }

  // Elimine los eventos de las etiquetas...
  html = html.replace(/ on\w+="[^"]*"/g, "");

  return {
    __html: html,
  };
};

class Xss extends Component {
  render() {
    // Analiza la cadena JSON del objeto...
    const posts = JSON.parse(initialState);
    return (
      <div className="Xss">
        {posts.map((post, key) => (
          <div key={key}>
            <h2>{post.title}</h2>
            <p>
              <strong>Secure Code:</strong>
            </p>
            <p>{post.content}</p>
            <p>
              <strong>Insecure Code:</strong>
            </p>
            <p dangerouslySetInnerHTML={removeXSSAttacks(post.content)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Xss;
