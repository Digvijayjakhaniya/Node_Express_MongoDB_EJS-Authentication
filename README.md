  <h1>User Authentication Project</h1>
  <p>This project is a user authentication application allowing users to register and log in. It is built using Node.js, Express.js, MongoDB, and EJS templates.</p>

  <h2>Features</h2>
    <ul>
      <li>User registration</li>
      <li>User login</li>
      <li>Password hashing for security</li>
    </ul>

  <h2>Installation</h2>
    <pre><code>git clone https://github.com/Digvijayjakhaniya/Node_Express_MongoDB_EJS-Authentication.git
cd Node_Express_MongoDB_EJS-Authentication
npm install</code></pre>

  <h2>Usage</h2>
    <p>To start the application, run:</p>
    <pre><code>npm start</code></pre>
    <p>Open your browser and navigate to <code>http://localhost:3000</code> to see the application in action.</p>

  <h2>Project Structure</h2>
    <pre><code>
Node_Express_MongoDB_EJS-Auth/
│
├── controllers/
│   └── loginController.js
|
├── Db/
│   └── connection.js
│     
├── models/
│   └── loginModel.js
│
├── routes/
│   └── web.js
│
├── public/
│   ├── CSS
│       ├── all.css
│       ├── bootstrap.css
│       └── bootstrap.min.css
│   ├── images
│   └── JS
│       ├── all.js
│       ├── bootstrap.js
│       └── bootstrap.min.js
|
├── views/
│   ├── includes
│       ├── navbar.ejs
|       ├── header.ejs
│       └── footer.ejs
|   ├── index.ejs
│   ├── login.ejs
│   └── registration.ejs
│   
│
├── app.js
├── package-lock.json
├── package.json
└── README.md
    </code></pre>

  <h2>Endpoints</h2>
    <ul>
      <li><code>GET /</code> - Home page</li>
      <li><code>GET /register</code> - Show registration form</li>
      <li><code>POST /register</code> - Handle user registration</li>
      <li><code>GET /login</code> - Show login form</li>
      <li><code>POST /login</code> - Handle user login</li>
    </ul>

  <h2>Dependencies</h2>
    <ul>
      <li><code>express</code> - Fast, unopinionated, minimalist web framework for Node.js</li>
      <li><code>mongoose</code> - MongoDB object modeling tool designed to work in an asynchronous environment</li>
      <li><code>ejs</code> - Embedded JavaScript templating</li>
      <li><code>bcrypt</code> - Library to hash passwords</li>
      <li><code>nodemon</code> - For auto-run server after edit code </li>
    </ul>
  <br><br><hr>
  <footer class="card-footer bg-white pt-2">
    <p>© 2024 Made with 🤍 by <a href="https://digvijay.rf.gd" target="_blank" class="link-danger page-link alert-link d-inline">Digvijay Jakhaniya</a></p>
  </footer>
</body>
</html>
