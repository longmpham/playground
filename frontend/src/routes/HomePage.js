export default function HomePage() {
  return (
    <>
      <div>
        <h1>Landing Page</h1>
        <p>Trying to learn all this stuff from the ground up again...</p>
        <p>Might be a good idea to document what i've learned here...</p>
        <p>1. setup folder structure. do it like so...</p>
        <ul>
          <li>.git</li>
          <li>backend</li>
          <ul>
            <li>this is where you do your node/express/mongoose stuff</li>
            <li>
              <code>npm init</code>
            </li>
            <li>
              <code>
                npm i express mongoose body-parser config dotenv cors bcrypt
                jsonwebtoken express-jwt
              </code>
            </li>
            <li>
              <code>npm i -D nodemon</code>
            </li>
            <li>
              once these are done, we can start the server with nodemon app.js
              (or server.js) but first we'll have to create that file.
            </li>
            <li>
              create server.js (or app.js or whatever you named your entry
              point)
            </li>
          </ul>
          <li>frontend</li>
          <ul>
            <li>this is where you do your react stuff</li>
            <li>npm i </li>
          </ul>
          <li>README.md</li>
        </ul>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </>
  );
}
