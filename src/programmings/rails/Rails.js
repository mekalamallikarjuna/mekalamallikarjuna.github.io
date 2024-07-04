// Rails.js
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Rails = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Rails");
    return (<>
        <h3>Rails:</h3>
            <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
            <p>
            Ruby on Rails is a server-side web application development framework written in Ruby language by David Heinemeier Hansson. It allows you to write less code than other languages and frameworks. It includes everything needed to create database-backed web applications according to MVC pattern.
            </p>
            <p>
            Ruby on Rails is an extremely productive web application framework written in Ruby by David Heinemeier Hansson.
            </p>
            <a href='https://guides.rubyonrails.org/getting_started.html'>Rails Guides</a>
            <h3>Ruby Programming Web Frameworks</h3>
    <ol>
        <li>
            <strong>Ruby on Rails (Rails)</strong> by David Heinemeier Hansson (DHH)<br/>
            A full-stack framework that follows the Model-View-Controller (MVC) architecture. It's known for its convention over configuration philosophy and its strong emphasis on best practices like DRY (Don't Repeat Yourself) and TDD (Test-Driven Development).<br/>
            <a href="https://rubyonrails.org" target="_blank">rubyonrails.org</a>
        </li>
        <li>
            <strong>Sinatra</strong> by Blake Mizerany (bmizerany) in California<br/>
            A lightweight web framework that is more flexible and less opinionated than Rails. It's suitable for small applications and microservices, offering simplicity and minimalism.<br/>
            <a href="http://sinatrarb.com" target="_blank">sinatrarb.com</a>
        </li>
        <li>
            <strong>Hanami</strong> by Luca Guidi<br/>
            A modern web framework that promotes a clean architecture and simplicity. Hanami is designed to be fast and to offer a high level of modularity.<br/>
            <a href="https://hanamirb.org" target="_blank">hanamirb.org</a>
        </li>
        <li>
            <strong>Padrino</strong> is released under the MIT LICENSE<br/>
            A full-stack framework built on top of Sinatra, providing additional features and tools for building larger applications. It offers an MVC structure and a set of generators similar to Rails.<br/>
            <a href="http://padrinorb.com" target="_blank">padrinorb.com</a>
        </li>
        <li>
            <strong>Grape</strong> by Michael Bleigh<br/>
            A REST-like API micro-framework for Ruby. It is designed to run on Rack or complement existing web applications with a simple DSL to easily build APIs.<br/>
            <a href="https://github.com/ruby-grape/grape" target="_blank">github.com/ruby-grape/grape</a>
        </li>
        <li>
            <strong>Camping</strong> by _why the lucky stiff<br/>
            A micro-framework that is extremely lightweight and simple. It is designed to be small enough to fit within a single file and is suitable for very small web applications.<br/>
            <a href="http://camping.io" target="_blank">camping.io</a>
        </li>
        <li>
            <strong>Cuba</strong> by Michel Martens<br/>
            A micro-framework for building web applications that is simple, fast, and small. It is inspired by Sinatra but aims to be even more minimal.<br/>
            <a href="https://cuba.is" target="_blank">cuba.is</a>
        </li>
        <li>
            <strong>Ramaze</strong> by Michael Fellinger<br/>
            A simple and lightweight web framework that provides a lot of flexibility. It is designed to be easy to use and extend.<br/>
            <a href="https://github.com/ramaze/ramaze" target="_blank">github.com/ramaze/ramaze</a>
        </li>
        <li>
            <strong>Roda</strong> by Jeremy Evans<br/>
            A lightweight and fast web framework that is designed to be simple and flexible. It builds on top of Rack and is suitable for building both small and large web applications.<br/>
            <a href="http://roda.jeremyevans.net" target="_blank">roda.jeremyevans.net</a>
        </li>
        <li>
            <strong>Volt</strong> by Ryan Stout<br/>
            A reactive web framework that allows you to build real-time web applications easily. It focuses on providing a seamless experience between the client and server.<br/>
            <a href="http://voltframework.com" target="_blank">voltframework.com</a>
        </li>
    </ol>
        </div>

    <Accordion eventKey="1">
        <Accordion.Item eventKey="1">
            <Accordion.Header>
                <b>1. Rails Introduction</b>
            </Accordion.Header>
            <Accordion.Body>
            <p>
        Ruby on Rails, often simply referred to as Rails, is a server-side web application framework written in Ruby. 
        It follows the Model-View-Controller (MVC) architectural pattern and emphasizes convention over configuration (CoC) 
        and the Don't Repeat Yourself (DRY) principle. Rails is designed to make programming web applications easier by making 
        assumptions about what developers need to get started, thereby enabling faster development and reducing the amount of 
        boilerplate code.
    </p>
    
    <h2>Key Features of Rails</h2>
    <ul>
        <li><strong>MVC Architecture</strong>: Separates an application into three interconnected components: Model, View, and Controller.</li>
        <li><strong>Convention over Configuration</strong>: Provides sensible defaults for configurations, reducing the need for extensive setup.</li>
        <li><strong>Don't Repeat Yourself (DRY)</strong>: Promotes code reuse and reduces redundancy.</li>
        <li><strong>ActiveRecord</strong>: An Object-Relational Mapping (ORM) system that simplifies database interactions.</li>
        <li><strong>Scaffolding</strong>: Quickly generate boilerplate code for basic CRUD operations.</li>
        <li><strong>RESTful Design</strong>: Emphasizes a resource-oriented approach to web development.</li>
        <li><strong>Built-in Testing Framework</strong>: Provides tools for testing various parts of the application.</li>
    </ul>
    
    <div className="pros">
        <h2>Pros of Rails</h2>
        <ul>
            <li><strong>Rapid Development</strong>: Rails allows for quick prototyping and development, thanks to its conventions and scaffolding features.</li>
            <li><strong>Rich Ecosystem</strong>: A large number of libraries (gems) are available for a wide range of functionalities, reducing the need to write everything from scratch.</li>
            <li><strong>Active Community</strong>: A large, supportive community provides extensive documentation, tutorials, and forums, making it easier to find help and resources.</li>
            <li><strong>Convention over Configuration</strong>: Default conventions speed up development and reduce decision fatigue by eliminating the need for extensive configuration.</li>
            <li><strong>Strong Emphasis on Best Practices</strong>: Encourages the use of best practices like DRY and Test-Driven Development (TDD), leading to more maintainable and robust code.</li>
            <li><strong>Scalability</strong>: Rails applications can be scaled horizontally by adding more servers, and the framework has support for various caching and performance optimization techniques.</li>
            <li><strong>Full-Stack Framework</strong>: Provides everything needed to create a web application, from front-end components to back-end services.</li>
        </ul>
    </div>

            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>
                <b>2. Rails Installation and Version</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Ruby on Rails Installation and Version</h1>
    
    <h2>1. Install Ruby</h2>
    <p>Before installing Rails, you need to have Ruby installed on your system:</p>
    <pre>{`
$ \curl -sSL https://get.rvm.io | bash -s stable --ruby
$ source ~/.rvm/scripts/rvm
$ rvm install ruby
$ ruby -v
    `}</pre>

    <h2>2. Install Rails</h2>
    <p>Once Ruby is installed, you can install Rails using the following command:</p>
    <pre>{`
$ gem install rails
    `}</pre>

    <h2>3. Verify Rails Installation</h2>
    <p>After installation, verify that Rails is installed correctly:</p>
    <pre>{`
$ rails -v
    `}</pre>

    <h2>4. Create a New Rails Application (Optional)</h2>
    <p>If you want to create a new Rails application, use the following command:</p>
    <pre>{`
$ rails new myapp
$ cd myapp
    `}</pre>

    <h2>5. Check Rails Version in a Rails Application</h2>
    <p>To check the Rails version within a Rails application directory:</p>
    <pre>{`
$ cd /path/to/your/rails/application
$ rails -v
    `}</pre>

    <h3>Additional Notes</h3>
    <ul>
        <li>Make sure to replace {`myapp`} with your desired application name in step 4.</li>
        <li>Ensure that your system meets the <a href="https://guides.rubyonrails.org/v6.1/getting_started.html#system-requirements" target="_blank">system requirements</a> for Ruby and Rails.</li>
    </ul>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>
                <b>3. Rails Framework</b>
            </Accordion.Header>
            <Accordion.Body>
                <Row>
<Col>
<center><img  src="mvc_detailed.png"/></center>
<h3>1. Model</h3>
                    
<h4>Role:</h4>
<ul>
    <li>Manages the data, logic, and rules of the application.</li>
    <li>Represents the state of the application.</li>
</ul>
<b>Responsibilities:</b>
<p>
    <ul>
        <li><b>Data Management:</b> The Model directly manages the data, logic, and rules of the application. It typically interacts with the database to fetch, save, and update data.</li>
        <li><b>Business Logic:</b> Contains business logic and rules that define how data can be created, stored, and modified.</li>
        <li><b>Validation:</b> Ensures that data conforms to certain rules before saving it to the database.</li>
    </ul>
</p>
<b>Example in Ruby on Rails:</b>
<pre>{`
class Article < ApplicationRecord
  validates :title, presence: true
end
`}</pre>

<h2>2. View</h2>
        <p><strong>Role:</strong> Manages the presentation layer and the user interface.</p>
        <p><strong>Responsibilities:</strong></p>
        <ul>
            <li><strong>Rendering:</strong> Converts data from the Model into a format suitable for the user, typically HTML for web applications.</li>
            <li><strong>User Interface:</strong> Contains templates and UI components that define how data is displayed to the user.</li>
        </ul>
        <p><strong>Example in Ruby on Rails (ERB Template):</strong></p>
        <pre>{`
<!-- app/views/articles/show.html.erb -->
<h1><%= @article.title %></h1>
<p><%= @article.content %></p>
        `}</pre>
        <h2>3. Controller</h2>
        <p><strong>Role:</strong> Acts as an intermediary between the Model and the View.</p>
        <p><strong>Responsibilities:</strong></p>
        <ul>
            <li><strong>Request Handling:</strong> Receives user input from the View, processes it, and interacts with the Model as needed.</li>
            <li><strong>Control Flow:</strong> Manages the flow of data between the Model and the View, determining which View to render.</li>
            <li><strong>Updating Views:</strong> Passes data from the Model to the View for presentation.</li>
        </ul>
        <p><strong>Example in Ruby on Rails:</strong></p>
        <pre>{`class ArticlesController < ApplicationController
  def show
    @article = Article.find(params[:id])
  end
end
        `}</pre>

        <h2>Diagram</h2>
        <div className="diagram">
            <pre>{`
+------------------------+         +------------------------+
|       Controller       | <-----> |          Model         |
+------------------------+         +------------------------+
            ^                             ^
            |                             |
            v                             v
+------------------------+         +------------------------+
|          View          | <-----> |      Database          |
+------------------------+         +------------------------+
            `}</pre>
        </div>

        <h2>Flow</h2>
        <ol>
            <li><strong>User Interaction:</strong> The user interacts with the application by performing an action (e.g., clicking a link or submitting a form).</li>
            <li><strong>Controller:</strong> The Controller receives the user input and processes it. This may involve validating input, interacting with the Model, and determining the appropriate response.</li>
            <li><strong>Model:</strong> The Model handles data-related operations, such as querying the database, applying business logic, or performing calculations.</li>
            <li><strong>Controller:</strong> The Controller receives the processed data from the Model and selects the appropriate View.</li>
            <li><strong>View:</strong> The View renders the data into a user-friendly format (e.g., HTML) and sends the response back to the user.</li>
        </ol>

        <h2>Benefits of MVC</h2>
        <ul>
            <li><strong>Separation of Concerns:</strong> Each component (Model, View, Controller) has a distinct responsibility, promoting organized and maintainable code.</li>
            <li><strong>Reusability:</strong> Components can be reused across different parts of the application or even in different applications.</li>
            <li><strong>Testability:</strong> The separation of concerns makes it easier to write unit tests for each component independently.</li>
            <li><strong>Scalability:</strong> The clear structure and division of responsibilities make it easier to scale the application as it grows.</li>
        </ul>

        <h2>Summary</h2>
        <p>The MVC architecture divides an application into three main components:</p>
        <ul>
            <li><strong>Model:</strong> Manages data and business logic.</li>
            <li><strong>View:</strong> Manages the user interface and presentation layer.</li>
            <li><strong>Controller:</strong> Handles user input, processes requests, and manages the flow of data between the Model and the View.</li>
        </ul>
        <p>This design pattern promotes organized, maintainable, and scalable code, making it easier to develop and manage complex applications.</p>
</Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
            <Accordion.Header>
                <b>4. Rails Directory Structure</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Ruby on Rails Directory Structure</h1>

<p>The Ruby on Rails framework has a standard directory structure that helps organize an application’s codebase. Here’s an overview of the main directories and their purposes:</p>

<pre>{`.
├── app
│   ├── assets
│   │   ├── images
│   │   ├── javascripts
│   │   └── stylesheets
│   ├── controllers
│   ├── helpers
│   ├── mailers
│   ├── models
│   ├── views
│   └── channels
├── bin
├── config
│   ├── environments
│   ├── initializers
│   ├── locales
├── db
│   ├── migrate
│   └── seeds.rb
├── lib
│   ├── assets
│   └── tasks
├── log
├── public
├── test
│   ├── controllers
│   ├── fixtures
│   ├── helpers
│   ├── integration
│   ├── mailers
│   ├── models
│   └── system
├── tmp
├── vendor
└── Gemfile
`}</pre>

<h2>Directory Descriptions</h2>

<ul>
    <li className="directory">app</li>
    <ol>
        <li><strong>assets:</strong> Contains assets such as images, JavaScripts, and stylesheets.</li>
        <li><strong>controllers:</strong> Contains controllers, which handle incoming requests and responses.</li>
        <li><strong>helpers:</strong> Contains helper methods to be used in views.</li>
        <li><strong>mailers:</strong> Contains mailer classes for handling email generation and delivery.</li>
        <li><strong>models:</strong> Contains models, which handle data and business logic.</li>
        <li><strong>views:</strong> Contains view templates for generating HTML responses.</li>
        <li><strong>channels:</strong> Contains WebSocket channels for real-time features.</li>
    </ol>

    <li className="directory">bin</li>
    <ul>
        <li>Contains binary executables for the application.</li>
    </ul>

    <li className="directory">config</li>
    <ul>
        <li><strong>environments:</strong> Contains environment-specific configuration files.</li>
        <li><strong>initializers:</strong> Contains files that run on application startup.</li>
        <li><strong>locales:</strong> Contains localization files for internationalization.</li>
    </ul>

    <li className="directory">db</li>
    <ul>
        <li><strong>migrate:</strong> Contains database migration files.</li>
        <li><strong>seeds.rb:</strong> Contains seed data for populating the database.</li>
    </ul>

    <li className="directory">lib</li>
    <ul>
        <li><strong>assets:</strong> Contains assets that are not part of the app directory.</li>
        <li><strong>tasks:</strong> Contains custom Rake tasks.</li>
    </ul>

    <li className="directory">log</li>
    <ul>
        <li>Contains application log files.</li>
    </ul>

    <li className="directory">public</li>
    <ul>
        <li>Contains static files and compiled assets.</li>
    </ul>

    <li className="directory">test</li>
    <ol>
        <li><strong>controllers:</strong> Contains tests for controllers.</li>
        <li><strong>fixtures:</strong> Contains fixture files for testing.</li>
        <li><strong>helpers:</strong> Contains tests for helpers.</li>
        <li><strong>integration:</strong> Contains integration tests.</li>
        <li><strong>mailers:</strong> Contains tests for mailers.</li>
        <li><strong>models:</strong> Contains tests for models.</li>
        <li><strong>system:</strong> Contains system tests.</li>
    </ol>

    <li className="directory">tmp</li>
    <ul>
        <li>Contains temporary files generated by the application.</li>
    </ul>

    <li className="directory">vendor</li>
    <ul>
        <li>Contains third-party code such as plugins and gems.</li>
    </ul>

    <li className="directory">Gemfile</li>
    <ul>
        <li>Specifies the Ruby gems required by the application.</li>
    </ul>
</ul>

<h2>Summary</h2>
<p>The Ruby on Rails directory structure is designed to help developers organize their code effectively. Understanding the purpose of each directory can make development more efficient and maintainable.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
            <Accordion.Header>
                <b>5. Rails Examples</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Start Rails Server with Docker</h1>
    <p>To start a Rails server using Docker, you need to set up a Docker environment that includes a Dockerfile and potentially a Docker Compose file if you have multiple services (e.g., database). Here’s a step-by-step guide:</p>

    <h2>1. Create a Dockerfile</h2>
    <p>Create a {`Dockerfile`} in the root of your Rails application. Here’s an example Dockerfile for a Rails application:</p>
    <pre>{`
# Use the official Ruby image as the base image
FROM ruby:3.1.2

# Install dependencies
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Set an environment variable to store app files
ENV RAILS_ROOT /var/www/myapp
RUN mkdir -p $RAILS_ROOT
WORKDIR $RAILS_ROOT

# Set environment variables
ENV RAILS_ENV='development'
ENV RACK_ENV='development'

# Install gems
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install

# Copy the main application
COPY . .

# Precompile assets for production
RUN bundle exec rake assets:precompile

# Expose port 3000 to the Docker host
EXPOSE 3000

# The default command to run when the container starts
CMD ["rails", "server", "-b", "0.0.0.0"]
    `}</pre>

    <h2>2. Create a Docker Compose File (Optional)</h2>
    <p>If you want to use Docker Compose to manage your services, create a {`docker-compose.yml`} file in the root of your application. Here’s an example:</p>
    <pre>{`
version: '3.8'
services:
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp_development
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  web:
    build: .
    command: rails server -b 0.0.0.0
    volumes:
      - .:/var/www/myapp
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgres://postgres:password@db:5432/myapp_development

volumes:
  postgres_data:
    `}</pre>

    <h2>3. Build the Docker Image</h2>
    <p>Build your Docker image using the Docker CLI:</p>
    <pre>{`docker build -t my-rails-app .`}</pre>

    <h2>4. Run the Docker Container</h2>
    <p>Run the Docker container using the built image:</p>
    <pre>{`docker run -it --rm -p 3000:3000 my-rails-app`}</pre>

    <h2>5. Using Docker Compose</h2>
    <p>If you’re using Docker Compose, start your application with:</p>
    <pre>{`docker-compose up`}</pre>
<hr/>
<h2>Docker</h2>
  <p>
    Docker containers package the Rails application and its dependencies for consistency and portability across environments.
    <ul>
      <li><strong>Dockerfile:</strong> Defines the application's environment.</li>
      <li><strong>docker-compose.yml:</strong> Manages multiple containers as a single application.</li>
    </ul>
  </p>
  
  <h2>Kubernetes</h2>
  <p>
    Kubernetes orchestrates containerized applications:
    <ul>
      <li><strong>Deployment:</strong> Specifies the application's desired state.</li>
      <li><strong>Service:</strong> Provides networking and load balancing for your application.</li>
    </ul>
  </p>
                <h1>How to Create a Ruby on Rails Application</h1>
    
    <h2>1. Install Ruby</h2>
    <p>Before installing Rails, you need to have Ruby installed on your system. You can use a version manager like RVM or rbenv to manage your Ruby installations.</p>
    <pre>
{`
$ \curl -sSL https://get.rvm.io | bash -s stable --ruby 
$ source ~/.rvm/scripts/rvm
$ rvm install ruby
$ ruby -v
`}
    `}</pre>

    <h2>2. Install Rails</h2>
    <p>Once Ruby is installed, you can install Rails using the following command:</p>
    <pre>
$ gem install rails
    </pre>

    <h2>3. Verify Rails Installation</h2>
    <p>After installation, verify that Rails is installed correctly:</p>
    <pre>
$ rails -v
    </pre>

    <h2>4. Create a New Rails Application</h2>
    <p>To create a new Rails application, use the following command:</p>
    <pre>{`
$ rails new myapp
$ cd myapp
    `}
    </pre>
    <p>Replace {`myapp`} with your desired application name.</p>

    <h2>5. Set Up the Database</h2>
    <p>Rails uses SQLite as the default database. To create the database, run:</p>
    <pre>
$ rails db:create
    </pre>
    <p>If you are using a different database (e.g., PostgreSQL or MySQL), configure the {`config/database.yml`} file accordingly and then run the above command.</p>

    <h2>6. Start the Rails Server</h2>
    <p>To start the Rails server, run:</p>
    <pre>
$ rails server
    </pre>
    <p>By default, the server runs at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>

    <h2>7. Generate a Controller</h2>
    <p>To generate a new controller, use the following command:</p>
    <pre>
$ rails generate controller welcome index
    </pre>
    <p>This command creates a {`welcome`} controller with an {`index`} action, along with the associated view and route.</p>

    <h2>8. Define a Root Route</h2>
    <p>Open the {`config/routes.rb`} file and define the root route:</p>
    <pre>{`
Rails.application.routes.draw do
  root 'welcome#index'
end
`}
    </pre>

    <h2>9. Create a View</h2>
    <p>Edit the {`app/views/welcome/index.html.erb`} file to include some content:</p>
    <pre>{`
<h1>Welcome to MyApp!</h1>
<p>This is your new Ruby on Rails application.</p>
    `}</pre>

    <h2>10. Visit Your Application</h2>
    <p>Open a web browser and go to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to see your Rails application in action.</p>


    <h1 className="text-center">Rails Commands</h1>

    <p>Here are various ways to create a new Rails application using the {`rails`} command:</p>

    <h2>1. Basic Application</h2>
    <p>To create a basic Rails application:</p>
    <pre>$ rails new myapp</pre>

    <h2>2. Specifying a Database</h2>
    <p>You can specify the database to use with the {`-d`} option:</p>
    <pre>$ rails new myapp -d postgresql</pre>
    <p>Other options include {`mysql`} and {`sqlite3`} (default).</p>

    <h2>3. Skipping Bundle Install</h2>
    <p>To create a Rails application without running {`bundle install`}:</p>
    <pre>$ rails new myapp --skip-bundle</pre>

    <h2>4. Skipping Test Unit</h2>
    <p>To create a Rails application without the default test framework:</p>
    <pre>$ rails new myapp --skip-test</pre>

    <h2>5. Using API Mode</h2>
    <p>To create a Rails application in API mode, which excludes views and other web-related features:</p>
    <pre>$ rails new myapp --api</pre>

    <h2>6. Skipping Git Initialization</h2>
    <p>To create a Rails application without initializing a Git repository:</p>
    <pre>$ rails new myapp --skip-git</pre>

    <h2>7. Skipping Yarn</h2>
    <p>To create a Rails application without using Yarn for managing JavaScript dependencies:</p>
    <pre>$ rails new myapp --skip-yarn</pre>

    <h2>8. Skipping Webpack</h2>
    <p>To create a Rails application without setting up Webpack:</p>
    <pre>$ rails new myapp --skip-webpack-install</pre>

    <h2>9. Using Specific Rails Version</h2>
    <p>To create a Rails application using a specific version of Rails:</p>
    <pre>$ rails _6.1.4_ new myapp</pre>

    <h2>10. Combining Options</h2>
    <p>You can combine multiple options to tailor the creation of your application:</p>
    <pre>$ rails new myapp -d postgresql --skip-bundle --skip-test</pre>

    <h2>11. Template Application</h2>
    <p>You can use a template to customize your application setup:</p>
    <pre>$ rails new myapp -m https://example.com/template.rb</pre>

    <h2>12. API Mode with PostgreSQL</h2>
    <p>Combining API mode with PostgreSQL database:</p>
    <pre>$ rails new myapp --api -d postgresql</pre>

    <p>These commands provide flexibility in creating a new Rails application tailored to your specific needs.</p>
    <h1 className="text-center">Create a Rails Application with Docker</h1>

    <h2>1. Install Docker</h2>
    <p>If you haven't already, install Docker by following the instructions for your operating system from the <a href="https://docs.docker.com/get-docker/" target="_blank">Docker website</a>.</p>

    <h2>2. Create a Project Directory</h2>
    <p>Create a directory for your Rails application:</p>
    <pre>{`$ mkdir myapp
$ cd myapp`}</pre>

    <h2>3. Create a Dockerfile</h2>
    <p>Create a {`Dockerfile`} in the project directory with the following content:</p>
    <pre>{`
FROM ruby:3.0.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
COPY . /myapp
CMD ["rails", "server", "-b", "0.0.0.0"]
    `}</pre>

    <h2>4. Create a Gemfile</h2>
    <p>Create a {`Gemfile`} with the following content:</p>
    <pre>{`
source 'https://rubygems.org'
gem 'rails', '~> 6.1.4'
    `}</pre>

    <h2>5. Create a Gemfile.lock</h2>
    <p>Create an empty {`Gemfile.lock`} file:</p>
    <pre>{`$ touch Gemfile.lock`}</pre>

    <h2>6. Create a Docker Compose File</h2>
    <p>Create a {`docker-compose.yml`} file with the following content:</p>
    <pre>{`
version: '3'
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
  web:
    build: .
    command: bash -c "rm -f tmp/pids/server.pid && bundle exec rails s -b '0.0.0.0'"
    volumes:
      - ".:/myapp"
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgres://postgres:password@db:5432/postgres
    `}</pre>

    <h2>7. Build and Run the Containers</h2>
    <p>Build the Docker images and run the containers:</p>
    <pre>{`$ docker-compose run web rails new . --force --no-deps --database=postgresql`}</pre>

    <h2>8. Update the Database Configuration</h2>
    <p>Edit the {`config/database.yml`} file to use the correct PostgreSQL settings:</p>
    <pre>{`
default: &default
  adapter: postgresql
  encoding: unicode
  host: db
  username: postgres
  password: password
  pool: 5

development:
  <<: *default
  database: myapp_development

test:
  <<: *default
  database: myapp_test

production:
  <<: *default
  database: myapp_production
  username: myapp
  password: <%= ENV['MYAPP_DATABASE_PASSWORD'] %>
    `}</pre>

    <h2>9. Create the Database</h2>
    <p>Create the database:</p>
    <pre>{`$ docker-compose run web rails db:create`}</pre>

    <h2>10. Start the Application</h2>
    <p>Start the Rails application:</p>
    <pre>{`$ docker-compose up`}</pre>

    <h2>11. Visit Your Application</h2>
    <p>Open a web browser and go to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to see your Rails application running.</p>


<h1 className="text-center">Creating a CRUD App in Ruby on Rails, Docker, Kubernetes</h1>
<hr/>
<h2>Step 1: Set Up Your Development Environment</h2>
<ul>
  <li>Install Docker: Ensure Docker is installed on your system. Docker Desktop is recommended for local development.</li>
  <li>Install Kubernetes: If not included with Docker Desktop, install Minikube or use a cloud Kubernetes service.</li>
  <li>Install Ruby on Rails: Set up Ruby and Rails on your local machine if not already installed. Use tools like {`rbenv`} or {`rvm`}.</li>
</ul>

<h2>Step 2: Create a CRUD Application with Ruby on Rails</h2>
<pre>
  {`
    rails new your_app_name
    cd your_app_name
  `}
</pre>
<pre>
  {`
    rails generate scaffold Post title:string content:text
    rake db:migrate
  `}
</pre>

<h2>Step 3: Dockerize Your Rails Application</h2>
<pre>
  {`
    # Dockerfile
    FROM ruby:latest
    RUN apt-get update -qq &amp;&amp; apt-get install -y build-essential libpq-dev nodejs
    RUN mkdir /your_app_name
    WORKDIR /your_app_name
    ADD Gemfile /your_app_name/Gemfile
    ADD Gemfile.lock /your_app_name/Gemfile.lock
    RUN bundle install
    ADD . /your_app_name
  `}
</pre>

<h2>Step 4: Kubernetes Setup for Deployment</h2>
<pre>
  {`
    # deployment.yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: your-app-name-deployment
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: your-app-name
      template:
        metadata:
          labels:
            app: your-app-name
        spec:
          containers:
            - name: your-app-name
              image: your-docker-username/your-app-name
              ports:
                - containerPort: 3000
  `}
</pre>
<pre>
  {`
    # service.yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: your-app-name-service
    spec:
      selector:
        app: your-app-name
      ports:
        - protocol: TCP
          port: 80
          targetPort: 3000
      type: LoadBalancer
  `}
</pre>

<h2>Step 5: Database Setup in Kubernetes</h2>
<ul>
  <li>Choose a Database: Use Kubernetes-compatible databases like PostgreSQL or MySQL.</li>
  <li>Create a Persistent Volume Claim (PVC) for Database Storage.</li>
  <li>Deploy Database: Use Kubernetes YAML files to deploy your chosen database. Ensure your Rails app's {`config/database.yml`} points to this database service.</li>
</ul>
<h3>Setting up PostgreSQL in Kubernetes</h3>

<h2>1. Persistent Volume (PV) and Persistent Volume Claim (PVC)</h2>

<p>Example PV YAML ({`postgres-pv.yaml`}):</p>
<pre>{`apiVersion: v1
kind: PersistentVolume
metadata:
  name: postgres-pv-volume
spec:
  capacity:
    storage: 5Gi  # Adjust size as per your requirements
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce  # Use ReadWriteMany for multiple nodes
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: "/mnt/data"  # Path on the host where data will be stored
`}</pre>

<p>Example PVC YAML ({`postgres-pvc.yaml`}):</p>
<pre>{`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce  # Use ReadWriteMany for multiple nodes
  resources:
    requests:
      storage: 5Gi  # Match with the size of the PV
  storageClassName: standard
`}</pre>

<h2>2. PostgreSQL Deployment and Service</h2>

<p>Example PostgreSQL Deployment YAML ({`postgres-deployment.yaml`}):</p>
<pre>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:latest
          env:
            - name: POSTGRES_DB
              value: your_database_name
            - name: POSTGRES_USER
              value: your_username
            - name: POSTGRES_PASSWORD
              value: your_password
          ports:
            - containerPort: 5432
          volumeMounts:
            - mountPath: /var/lib/postgresql/data
              name: postgres-storage
      volumes:
        - name: postgres-storage
          persistentVolumeClaim:
            claimName: postgres-pvc  # Use the PVC created earlier
`}</pre>

<p>Example PostgreSQL Service YAML ({`postgres-service.yaml`}):</p>
<pre>{`apiVersion: v1
kind: Service
metadata:
  name: postgres-service
spec:
  selector:
    app: postgres
  ports:
    - protocol: TCP
      port: 5432
      targetPort: 5432
`}</pre>

<h2>3. Connecting Your Application</h2>

<p>To connect your Ruby on Rails application to this PostgreSQL database in Kubernetes:</p>

<p>Update your Rails application's {`config/database.yml`} to use the Kubernetes service name ({`postgres-service`}) and appropriate credentials ({`your_database_name`}, {`your_username`}, {`your_password`}).</p>

<pre>{`default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: postgres-service  # Service name
  username: your_username
  password: your_password
  database: your_database_name

development:
  <<: *default
  database: your_database_name_development

test:
  <<: *default
  database: your_database_name_test

production:
  <<: *default
  database: your_database_name_production
`}</pre>

<h2>4. Verify and Test</h2>

<p>Ensure PostgreSQL is running and accessible:</p>
<pre>{`kubectl get pods  # Check if the PostgreSQL pod is running
kubectl get svc   # Check the PostgreSQL service for an external IP (if applicable)
`}</pre>

<p>Test the connection from your Rails application by running migrations ({`rails db:migrate`}) or executing queries.</p>

<h3>Notes:</h3>
<ul>
  <li><strong>Security:</strong> Ensure you use secure practices for handling passwords and access control within Kubernetes.</li>
  <li><strong>Backup and Recovery:</strong> Implement strategies for database backups and disaster recovery in Kubernetes.</li>
</ul>

<p>This guide provides a foundational setup for deploying PostgreSQL in Kubernetes for your Ruby on Rails application. Adjustments may be necessary based on your specific application requirements and Kubernetes environment configuration.</p>

<hr/>
Mothod-2:
<hr/>
<h1>Database Setup in Kubernetes</h1>
    <p>To set up the database for your Rails application in Kubernetes, follow these steps:</p>
    
    <h2>Kubernetes ConfigMap and Secrets (Optional)</h2>
    <p>Store database configuration securely using Kubernetes ConfigMaps or Secrets.</p>
    
    <h3>ConfigMap Example</h3>
    <pre>{`
apiVersion: v1
kind: ConfigMap
metadata:
  name: database-config
data:
  DATABASE_HOST: postgresql
  DATABASE_NAME: mydatabase
  DATABASE_USER: myuser
    `}</pre>
    
    <h3>Secret Example</h3>
    <pre>{`
apiVersion: v1
kind: Secret
metadata:
  name: database-secret
type: Opaque
data:
  DATABASE_PASSWORD: bXlwYXNzd29yZA==  <!-- base64 encoded password -->
    `}</pre>
    
    <h2>Persistent Storage (Optional)</h2>
    <p>Configure PersistentVolumeClaims (PVCs) and PersistentVolumes (PVs) for PostgreSQL database.</p>
    
    <h3>PersistentVolume Example</h3>
    <pre>{`
apiVersion: v1
kind: PersistentVolume
metadata:
  name: postgresql-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"
    `}</pre>
    
    <h3>PersistentVolumeClaim Example</h3>
    <pre>{`
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgresql-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
    `}</pre>
    
    <h2>Database Deployment</h2>
    <p>Deploy PostgreSQL using a Kubernetes Deployment and Service.</p>
    
    <h3>PostgreSQL Deployment Example</h3>
    <pre>{`
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgresql
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgresql
  template:
    metadata:
      labels:
        app: postgresql
    spec:
      containers:
        - name: postgresql
          image: postgres:13
          ports:
            - containerPort: 5432
          env:
            - name: POSTGRES_DB
              valueFrom:
                configMapKeyRef:
                  name: database-config
                  key: DATABASE_NAME
            - name: POSTGRES_USER
              valueFrom:
                configMapKeyRef:
                  name: database-config
                  key: DATABASE_USER
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: database-secret
                  key: DATABASE_PASSWORD
          volumeMounts:
            - name: postgredb-storage
              mountPath: /var/lib/postgresql/data
      volumes:
        - name: postgredb-storage
          persistentVolumeClaim:
            claimName: postgresql-pvc
    `}</pre>
    
    <h3>PostgreSQL Service Example</h3>
    <pre>{`
apiVersion: v1
kind: Service
metadata:
  name: postgresql
spec:
  ports:
    - port: 5432
  selector:
    app: postgresql
    `}</pre>

    <h1>Accessing the Application</h1>
    <p>Depending on your Kubernetes environment (local Minikube, cloud provider, etc.), access your Rails application through the assigned external IP or NodePort.</p>

    <h2>Service Configuration</h2>
    <p>Here is the Service configuration for accessing your Rails application:</p>

    <pre>{`
apiVersion: v1
kind: Service
metadata:
  name: my-crud-service
spec:
  selector:
    app: my-crud-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
    `}</pre>

    <p>Apply your Kubernetes manifests to deploy the Rails application and expose it:</p>
    
    <pre>{`
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
    `}</pre>

    <p>Once deployed, you can access your Rails application via the external IP provided by the LoadBalancer service. Use the following command to get the external IP:</p>
    
    <pre>{`
kubectl get services
    `}</pre>

    <p>Open your browser and visit {`http://EXTERNAL_IP/tasks`} to access the CRUD interface for tasks.</p>
<h2>Step 6: Accessing Your Application</h2>
<pre>
  {`
    kubectl port-forward service/your-app-name-service 3000:80
  `}
</pre>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
            <Accordion.Header>
                <b>6. Rails Database Setup</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Setting Up a Database in Ruby on Rails</h1>
    <p>This guide will help you set up a database for a Ruby on Rails application. We will use PostgreSQL as our database.</p>

    <h2>1. Install PostgreSQL</h2>
    <p>First, you need to install PostgreSQL. Follow the instructions for your operating system:</p>
    <ul>
        <li><a href="https://www.postgresql.org/download/" target="_blank">PostgreSQL Download</a></li>
    </ul>

    <h2>2. Add the pg gem</h2>
    <p>Open your {`Gemfile`} and add the {`pg`} gem:</p>
    <pre>{`gem 'pg'`}</pre>
    <p>Then run {`bundle install`} to install the gem:</p>
    <pre>{`bundle install`}</pre>

    <h2>3. Configure the Database</h2>
    <p>Edit the {`config/database.yml`} file to configure your database settings. Here is an example configuration for PostgreSQL:</p>
    <pre>{`
default: &default
  adapter: postgresql
  encoding: unicode
  pool: 5
  username: your_db_username
  password: your_db_password

development:
  <<: *default
  database: your_app_development

test:
  <<: *default
  database: your_app_test

production:
  <<: *default
  database: your_app_production
  username: your_production_db_username
  password: your_production_db_password
    `}</pre>

    <h2>4. Create the Database</h2>
    <p>Run the following command to create the database:</p>
    <pre>{`rails db:create`}</pre>

    <h2>5. Migrate the Database</h2>
    <p>Run the following command to run the database migrations:</p>
    <pre>{`rails db:migrate`}</pre>

    <h2>6. Verify the Setup</h2>
    <p>Run the Rails server and verify that your application is connected to the database correctly:</p>
    <pre>{`rails server`}</pre>
    <p>Visit {`http://localhost:3000`} in your browser and ensure everything is working as expected.</p>

    <h2>Troubleshooting</h2>
    <p>If you encounter any issues, check the following:</p>
    <ul>
        <li>Ensure PostgreSQL is running.</li>
        <li>Verify your database configuration in {`config/database.yml`}.</li>
        <li>Check the Rails logs for any error messages.</li>
    </ul>

    <p>That's it! You have successfully set up a PostgreSQL database for your Ruby on Rails application.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
            <Accordion.Header>
                <b>7. Rails ActiveRecords</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Using ActiveRecord in Ruby on Rails</h1>
    <p>ActiveRecord is the ORM (Object-Relational Mapping) layer supplied with Rails. It allows you to interact with the database in a more intuitive and Ruby-like manner.</p>

    <h2>1. Generating a Model</h2>
    <p>To generate a new model, use the Rails generator:</p>
    <pre>{`rails generate model Article title:string body:text`}</pre>
    <p>This command creates a migration file, a model file, and test files.</p>

    <h2>2. Running Migrations</h2>
    <p>Run the migration to create the corresponding table in the database:</p>
    <pre>{`rails db:migrate`}</pre>

    <h2>3. Using the Model</h2>
    <p>With the model and table in place, you can start using ActiveRecord to interact with the database. Here are some common operations:</p>

    <h3>Create</h3>
    <p>To create a new record:</p>
    <pre>{`
article = Article.new(title: "Hello World", body: "This is my first article.")
article.save
    `}</pre>
    <p>Or you can use:</p>
    <pre>{`Article.create(title: "Hello World", body: "This is my first article.")`}</pre>

    <h3>Read</h3>
    <p>To retrieve records:</p>
    <pre>{`
# Find by ID
article = Article.find(1)

# Find by other attributes
article = Article.find_by(title: "Hello World")

# Retrieve all records
articles = Article.all
    `}</pre>

    <h3>Update</h3>
    <p>To update a record:</p>
    <pre>{`
article = Article.find(1)
article.update(title: "Updated Title")
    `}</pre>
    <p>Or:</p>
    <pre>{`
article = Article.find(1)
article.title = "Updated Title"
article.save
    `}</pre>

    <h3>Delete</h3>
    <p>To delete a record:</p>
    <pre>{`
article = Article.find(1)
article.destroy
    `}</pre>

    <h2>4. Validations</h2>
    <p>ActiveRecord provides validations to ensure data integrity. Add validations in your model:</p>
    <pre>{`
class Article < ApplicationRecord
  validates :title, presence: true
  validates :body, length: { minimum: 10 }
end
    `}</pre>

    <h2>5. Associations</h2>
    <p>ActiveRecord also allows you to define relationships between models:</p>

    <h3>One-to-Many</h3>
    <p>For example, if an article can have many comments:</p>
    <pre>{`
class Article < ApplicationRecord
  has_many :comments
end

class Comment < ApplicationRecord
  belongs_to :article
end
    `}</pre>

    <h3>Many-to-Many</h3>
    <p>For a many-to-many relationship, such as articles and tags:</p>
    <pre>{`
class Article < ApplicationRecord
  has_and_belongs_to_many :tags
end

class Tag < ApplicationRecord
  has_and_belongs_to_many :articles
end
    `}</pre>

    <h2>6. Scopes</h2>
    <p>Scopes allow you to define common queries that can be reused:</p>
    <pre>{`
class Article < ApplicationRecord
  scope :published, -> { where(published: true) }
end

# Usage
published_articles = Article.published
    `}</pre>

    <p>That's a basic overview of using ActiveRecord in Ruby on Rails. With ActiveRecord, you can easily interact with your database using Ruby code.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
            <Accordion.Header>
                <b>8. Rails Migrations</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Create Rails Migration with Docker</h1>
    <p>To create a migration in a Ruby on Rails application within a Docker container, you can run the Rails migration generator command inside the running container. Here’s how you can do it step-by-step:</p>

    <h2>1. Ensure Your Docker Container is Running</h2>
    <p>First, make sure your Docker container running your Rails application is up and running. If it’s not, start it using the appropriate command. For instance:</p>
    <pre>{`docker run -it --rm -p 3000:3000 my-rails-app`}</pre>

    <h2>2. Find the Running Container's ID or Name</h2>
    <p>To interact with a running container, you need its container ID or name. List your running containers using:</p>
    <pre>{`docker ps`}</pre>

    <h2>3. Execute the Rails Command Inside the Container</h2>
    <p>Use the {`docker exec`} command to run the Rails migration generator command inside the container. Replace {`container_id_or_name`} with the actual ID or name of your container:</p>
    <pre>{`docker exec -it container_id_or_name rails generate migration AddFieldToTable field_name:string`}</pre>
    <p>This command will generate a new migration file to add a field named {`field_name`} of type {`string`} to a table. Replace {`AddFieldToTable`}, {`field_name`}, and {`string`} with your desired migration name, field name, and data type, respectively.</p>

    <h2>4. Apply the Migration</h2>
    <p>After generating the migration, apply it by running the migration command inside the container:</p>
    <pre>{`docker exec -it container_id_or_name rails db:migrate`}</pre>

    <h2>Example Workflow</h2>

    <h3>a. Start the Rails Application Container</h3>
    <pre>{`docker run -it --rm -p 3000:3000 --name my-rails-container my-rails-app`}</pre>

    <h3>b. Find the Container ID or Name</h3>
    <pre>{`docker ps`}</pre>
    <p>Sample output might look like this:</p>
    <pre>{`
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS         PORTS                                       NAMES
a1b2c3d4e5f6   my-rails-app  "rails server -b 0.0.…"  2 minutes ago   Up 2 minutes   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   my-rails-container
    `}</pre>
    <p>Here, the container name is {`my-rails-container`}.</p>

    <h3>c. Generate a New Migration</h3>
    <pre>{`docker exec -it my-rails-container rails generate migration AddDescriptionToTasks description:text`}</pre>

    <h3>d. Apply the Migration</h3>
    <pre>{`docker exec -it my-rails-container rails db:migrate`}</pre>

<hr/>
<h1>Creating and Running Migrations in Ruby on Rails</h1>
    <p>Migrations are a feature of Active Record that allows you to evolve your database schema over time. Here's a guide on how to create and run migrations in Rails.</p>

    <h2>1. Generating a Migration</h2>
    <p>To create a new migration, use the Rails generator:</p>
    <pre>{`rails generate migration AddFieldToTable field_name:type`}</pre>
    <p>For example, to add a {`published`} field to the {`articles`} table:</p>
    <pre>{`rails generate migration AddPublishedToArticles published:boolean`}</pre>

    <h2>2. Editing the Migration</h2>
    <p>After running the generator, a new migration file will be created in the {`db/migrate`} directory. Open the generated file to edit the migration:</p>
    <pre>{`
class AddPublishedToArticles < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :published, :boolean, default: false
  end
end
    `}</pre>
    <p>In this example, we add a {`published`} column to the {`articles`} table with a default value of {`false`}.</p>

    <h2>3. Running Migrations</h2>
    <p>To apply the migration and update the database schema, run:</p>
    <pre>{`rails db:migrate`}</pre>
    <p>This command will execute the change method in your migration file and update the database accordingly.</p>

    <h2>4. Rolling Back Migrations</h2>
    <p>If you need to undo a migration, you can roll it back:</p>
    <pre>{`rails db:rollback`}</pre>
    <p>This command will reverse the last migration. To rollback multiple migrations, use the {`STEP`} option:</p>
    <pre>{`rails db:rollback STEP=3`}</pre>
    <p>This will rollback the last three migrations.</p>

    <h2>5. Migration Methods</h2>
    <p>Here are some common methods you can use in your migrations:</p>

    <h3>Create a Table</h3>
    <pre>{`
class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :body
      t.timestamps
    end
  end
end
    `}</pre>

    <h3>Add a Column</h3>
    <pre>{`
class AddPublishedToArticles < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :published, :boolean, default: false
  end
end
    `}</pre>

    <h3>Remove a Column</h3>
    <pre>{`
class RemovePublishedFromArticles < ActiveRecord::Migration[6.1]
  def change
    remove_column :articles, :published, :boolean
  end
end
    `}</pre>

    <h3>Rename a Column</h3>
    <pre>{`
class RenameTitleInArticles < ActiveRecord::Migration[6.1]
  def change
    rename_column :articles, :title, :headline
  end
end
    `}</pre>

    <h3>Change a Column Type</h3>
    <pre>{`
class ChangeBodyInArticles < ActiveRecord::Migration[6.1]
  def change
    change_column :articles, :body, :string
  end
end
    `}</pre>

    <h3>Add an Index</h3>
    <pre>{`
class AddIndexToArticlesTitle < ActiveRecord::Migration[6.1]
  def change
    add_index :articles, :title
  end
end
    `}</pre>

    <p>These methods help you modify your database schema in a structured and version-controlled way.</p>

    <h2>6. Running Migrations in Different Environments</h2>
    <p>To run migrations in a different environment, use the {`RAILS_ENV`} option:</p>
    <pre>{`rails db:migrate RAILS_ENV=production`}</pre>

    <h2>Conclusion</h2>
    <p>Rails migrations provide a powerful way to manage your database schema over time. By using the Rails migration generators and methods, you can easily create, modify, and maintain your database schema in a consistent manner.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
            <Accordion.Header>
                <b>9. Rails Controllers</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Create Rails Controller with Docker</h1>
    <p>Creating a Rails controller within a Docker container involves running the Rails generator command inside the running container. Here’s how you can do it step-by-step:</p>

    <h2>1. Ensure Your Docker Container is Running</h2>
    <p>First, make sure your Docker container running your Rails application is up and running. If it’s not, start it using the appropriate command. For instance:</p>
    <pre>{`docker run -it --rm -p 3000:3000 my-rails-app`}</pre>

    <h2>2. Find the Running Container's ID or Name</h2>
    <p>To interact with a running container, you need its container ID or name. List your running containers using:</p>
    <pre>{`docker ps`}</pre>

    <h2>3. Execute the Rails Command Inside the Container</h2>
    <p>Use the {`docker exec`} command to run the Rails generator command inside the container. Replace {`container_id_or_name`} with the actual ID or name of your container:</p>
    <pre>{`docker exec -it container_id_or_name rails generate controller MyController`}</pre>
    <p>This command will generate a new controller named {`MyController`} inside the running Docker container. You can replace {`MyController`} with the name of the controller you want to create.</p>

    <h2>4. Example Workflow</h2>

    <h3>a. Start the Rails Application Container</h3>
    <pre>{`docker run -it --rm -p 3000:3000 --name my-rails-container my-rails-app`}</pre>

    <h3>b. Find the Container ID or Name</h3>
    <pre>{`docker ps`}</pre>
    <p>Sample output might look like this:</p>
    <pre>{`
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS         PORTS                                       NAMES
a1b2c3d4e5f6   my-rails-app  "rails server -b 0.0.…"  2 minutes ago   Up 2 minutes   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   my-rails-container
    `}</pre>
    <p>Here, the container name is {`my-rails-container`}.</p>

    <h3>c. Generate a New Controller</h3>
    <pre>{`docker exec -it my-rails-container rails generate controller MyController`}</pre>

    <h2>5. Confirm the Controller Creation</h2>
    <p>Once the command executes, you should see output confirming the creation of the controller and its associated files. Check your Rails application directory to ensure the new controller was created correctly.</p>
    <hr/>
    <h1>Creating and Using Controllers in Ruby on Rails</h1>
    <p>Controllers in Rails are responsible for processing incoming requests, handling user input, and rendering the appropriate views. Here's how to create and use controllers in a Rails application.</p>

    <h2>1. Generating a Controller</h2>
    <p>To generate a new controller, use the Rails generator:</p>
    <pre>{`rails generate controller Articles`}</pre>
    <p>This command creates a controller file, view templates, and test files for the {`Articles`} controller.</p>

    <h2>2. Defining Controller Actions</h2>
    <p>Open the generated {`app/controllers/articles_controller.rb`} file to define actions:</p>
    <pre>{`
class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      redirect_to @article
    else
      render 'edit'
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end

  private
    def article_params
      params.require(:article).permit(:title, :body)
    end
end
    `}</pre>

    <h2>3. Defining Routes</h2>
    <p>To map requests to controller actions, define routes in the {`config/routes.rb`} file:</p>
    <pre>{`
Rails.application.routes.draw do
  resources :articles
end
    `}</pre>
    <p>This single line defines standard RESTful routes for all actions in the {`ArticlesController`}.</p>

    <h2>4. Creating Views</h2>
    <p>Create view templates for each action in the {`app/views/articles`} directory:</p>

    <h3>index.html.erb</h3>
    <pre>{`
<h1>Articles</h1>

<%= link_to 'New Article', new_article_path %>

<ul>
  <% @articles.each do |article| %>
    <li>
      <%= link_to article.title, article_path(article) %>
    </li>
  <% end %>
</ul>
    `}</pre>

    <h3>show.html.erb</h3>
    <pre>{`
<h1><%= @article.title %></h1>
<p><%= @article.body %></p>

<%= link_to 'Edit', edit_article_path(@article) %> |
<%= link_to 'Back', articles_path %>
    `}</pre>

    <h3>new.html.erb</h3>
    <pre>{`
<h1>New Article</h1>

<%= form_with model: @article, local: true do |form| %>
  <div>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </div>

  <div>
    <%= form.label :body %><br>
    <%= form.text_area :body %>
  </div>

  <div>
    <%= form.submit %>
  </div>
<% end %>

<%= link_to 'Back', articles_path %>
    `}</pre>

    <h3>edit.html.erb</h3>
    <pre>{`
<h1>Edit Article</h1>

<%= form_with model: @article, local: true do |form| %>
  <div>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </div>

  <div>
    <%= form.label :body %><br>
    <%= form.text_area :body %>
  </div>

  <div>
    <%= form.submit %>
  </div>
<% end %>

<%= link_to 'Back', articles_path %>
    `}</pre>

    <h2>5. Handling Errors</h2>
    <p>To handle validation errors, update the {`new.html.erb`} and {`edit.html.erb`} views:</p>
    <pre>{`
<% if @article.errors.any? %>
  <div id="error_explanation">
    <h2><%= pluralize(@article.errors.count, "error") %> prohibited this article from being saved:</h2>
    <ul>
      <% @article.errors.full_messages.each do |message| %>
        <li><%= message %></li>
      <% end %>
    </ul>
  </div>
<% end %>
    `}</pre>
    <p>Place this code inside the form block in both views to display validation errors.</p>

    <h2>6. Redirecting and Rendering</h2>
    <p>In the controller, use {`redirect_to`} to redirect to a different action and {`render`} to render a view:</p>
    <pre>{`
# Redirect to the show action
redirect_to @article

# Render the new view
render 'new'
    `}</pre>

    <h2>Conclusion</h2>
    <p>Controllers in Rails handle the flow of data between models and views. By defining routes, creating actions, and rendering views, you can build dynamic web applications efficiently.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
            <Accordion.Header>
                <b>10. Rails Routes</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Defining Routes in Ruby on Rails</h1>
    <p>Routes in Rails define the URL structure for your application and map incoming requests to controller actions. Here's how to define and manage routes in a Rails application.</p>

    <h2>1. Basic Routes</h2>
    <p>To define a basic route, use the {`get`}, {`post`}, {`put`}, {`patch`}, or {`delete`} method in the {`config/routes.rb`} file:</p>
    <pre>{`
Rails.application.routes.draw do
  # Root route
  root 'pages#home'

  # Custom route
  get '/about', to: 'pages#about'

  # Resourceful routes
  resources :articles
end
    `}</pre>

    <h2>2. Route Helpers</h2>
    <p>Rails provides route helpers to generate URLs and paths based on named routes:</p>
    <pre>{`
<%= link_to 'About Us', about_path %>
<%= link_to 'Edit Article', edit_article_path(@article) %>
    `}</pre>

    <h2>3. Nested Resources</h2>
    <p>To handle associations between resources, use nested routes:</p>
    <pre>{`
resources :articles do
  resources :comments
end
    `}</pre>
    <p>This generates routes for {`comments`} nested under {`articles`}.</p>

    <h2>4. Route Constraints</h2>
    <p>Apply constraints to routes using a block or a class:</p>
    <pre>{`
get '/articles/:id', to: 'articles#show', constraints: { id: /\d+/ }
    `}</pre>
    <p>This route will only match if {`:id`} is a digit.</p>

    <h2>5. Custom Routes</h2>
    <p>Define custom routes for specific actions:</p>
    <pre>{`
get '/articles/:id/publish', to: 'articles#publish', as: 'publish_article'
    `}</pre>
    <p>This creates a route for publishing an article with a custom URL and named route helper.</p>

    <h2>6. Route Scoping</h2>
    <p>Scope routes to a specific namespace or module:</p>
    <pre>{`
namespace :admin do
  resources :articles
end
    `}</pre>
    <p>Routes in the {`admin`} namespace will be prefixed with {`/admin`}.</p>

    <h2>7. Route Redirects</h2>
    <p>Redirect one path to another:</p>
    <pre>{`
get '/legacy', to: redirect('/new_path')
    `}</pre>
    <p>Requests to {`/legacy`} will be redirected to {`/new_path`}.</p>

    <h2>8. Route Constraints</h2>
    <p>Apply constraints to routes using a block or a class:</p>
    <pre>{`
get '/articles/:id', to: 'articles#show', constraints: { id: /\d+/ }
    `}</pre>
    <p>This route will only match if {`:id`} is a digit.</p>

    <h2>Conclusion</h2>
    <p>Routes in Ruby on Rails provide a powerful mechanism for defining URL patterns and mapping them to controller actions. By understanding how to use routes effectively, you can build well-structured and easily navigable web applications.</p>   
    
    <h2>9.Show Routes in Ruby on Rails</h2>
    <p>To show the routes in a Ruby on Rails application, you can use the {`rails routes`} command. This command lists all the defined routes in your application along with their corresponding HTTP methods, paths, and controller actions.</p>
    
    <p>Two ways:
    <h5>http://localhost:3000/rails/info/routes</h5>
    <h5>rails routes</h5>
    </p>
    <h2>1. Using the Command Line</h2>
    <p>Open your terminal and navigate to the root directory of your Rails application. Then run:</p>
    <pre>{`rails routes`}</pre>
    <p>This command will output a table of all the routes in your application, showing the following columns:</p>
    <ul>
        <li><strong>Prefix</strong>: The named route helper.</li>
        <li><strong>Verb</strong>: The HTTP method (GET, POST, PATCH, DELETE).</li>
        <li><strong>URI Pattern</strong>: The URL pattern.</li>
        <li><strong>Controller#Action</strong>: The controller and action that will handle the request.</li>
    </ul>

    <h2>2. Viewing Routes in a Dockerized Environment</h2>
    <p>If your Rails application is running inside a Docker container, you can run the {`rails routes`} command inside the container. Here’s how:</p>

    <h3>a. Get the Container ID or Name</h3>
    <p>First, list your running containers to find the ID or name of the container running your Rails application:</p>
    <pre>{`docker ps`}</pre>

    <h3>b. Run {`rails routes`} inside the Container</h3>
    <p>Use the {`docker exec`} command to run {`rails routes`} inside the container. Replace {`container_id_or_name`} with your actual container ID or name:</p>
    <pre>{`docker exec -it container_id_or_name rails routes`}</pre>
    <p>This will output the routes table in your terminal.</p>

    <h2>Example Output</h2>
    <p>Here is an example of what the output might look like:</p>
    <pre>{`
Prefix Verb   URI Pattern                 Controller#Action
 tasks GET    /tasks(.:format)            tasks#index
       POST   /tasks(.:format)            tasks#create
new_task GET  /tasks/new(.:format)        tasks#new
edit_task GET /tasks/:id/edit(.:format)   tasks#edit
 task GET    /tasks/:id(.:format)        tasks#show
       PATCH  /tasks/:id(.:format)        tasks#update
       PUT    /tasks/:id(.:format)        tasks#update
       DELETE /tasks/:id(.:format)        tasks#destroy
    `}</pre>

    <h2>3. Filtering Routes</h2>
    <p>You can filter the routes to show only those for a specific controller or with a specific verb by using the {`-c`} or {`-g`} options:</p>

    <h3>a. Filter by Controller</h3>
    <p>To show routes for a specific controller (e.g., {`tasks`}):</p>
    <pre>{`rails routes -c tasks`}</pre>

    <h3>b. Filter by HTTP Verb</h3>
    <p>To show routes that match a specific HTTP verb (e.g., {`GET`}):</p>
    <pre>{`rails routes -g GET`}</pre>

    <h2>4. Viewing Routes with Additional Information</h2>
    <p>You can also add the {`-d`} option to show more details about each route, such as constraints and parameters:</p>
    <pre>{`rails routes -d`}</pre>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
            <Accordion.Header>
                <b>11. Rails Views</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Rails Views in Ruby on Rails</h1>

<h2>1. Creating a View</h2>
<p>Views are stored in the {`app/views`} directory, organized by controller name. Each controller has its own folder inside {`app/views`}, and the views correspond to the actions in the controller.</p>
<p>For example, if you have a {`PostsController`} with an {`index`} action, you would create a file named {`index.html.erb`} inside {`app/views/posts`}.</p>

<h2>2. Using Embedded Ruby (ERB)</h2>
<p>ERB is a templating system that allows you to embed Ruby code within an HTML file. Here’s a simple example of an ERB template for the {`index`} action of a {`PostsController`}:</p>
<pre>{`<!-- app/views/posts/index.html.erb -->

<h1>All Posts</h1>

<ul>
<% @posts.each do |post| %>
<li><%= post.title %> - <%= post.content %></li>
<% end %>
</ul>
`}</pre>

<h2>3. Rendering Partials</h2>
<p>Partials are used to DRY (Don't Repeat Yourself) up your views by breaking them into reusable pieces. Partials are named with a leading underscore. Here’s how you can create and render a partial:</p>
<h3>Creating a Partial:</h3>
<pre>{`<!-- app/views/posts/_post.html.erb -->

<li><%= post.title %> - <%= post.content %></li>
`}</pre>

<h3>Rendering a Partial:</h3>
<pre>{`<!-- app/views/posts/index.html.erb -->

<h1>All Posts</h1>

<ul>
<%= render @posts %>
</ul>
`}</pre>
<p>Rails is smart enough to render {`_post.html.erb`} for each {`post`} in {`@posts`}.</p>

<h2>4. Using Helpers</h2>
<p>Rails provides helper methods to keep your views clean and organized. For example, the {`link_to`} helper generates HTML links:</p>
<pre>{`<!-- app/views/posts/index.html.erb -->

<h1>All Posts</h1>

<ul>
<% @posts.each do |post| %>
<li><%= link_to post.title, post_path(post) %></li>
<% end %>
</ul>
`}</pre>

<h2>5. Layouts</h2>
<p>Layouts are templates that wrap around your views. They are typically used to define a common structure (like headers and footers) for your application. By default, Rails uses {`app/views/layouts/application.html.erb`}.</p>
<h3>Example Layout:</h3>
<pre>{`<!-- app/views/layouts/application.html.erb -->

<!DOCTYPE html>
<html>
<head>
<title>MyApp</title>
<%= csrf_meta_tags %>
<%= csp_meta_tag %>
<%= stylesheet_link_tag 'application', media: 'all' %>
<%= javascript_include_tag 'application' %>
</head>
<body>
<header>
<h1>MyApp</h1>
</header>

<%= yield %>

<footer>
<p>&copy; 2024 MyApp</p>
</footer>
</body>
</html>
`}</pre>

<h2>Summary</h2>
<p>Views in Rails allow you to define the presentation layer of your application using ERB templates. They are organized by controller, can include embedded Ruby for dynamic content, use partials for reusable snippets, and helpers for common tasks. Layouts provide a common structure for your application’s views.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
            <Accordion.Header>
                <b>12. Rails Layouts</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Rails Layouts in Ruby on Rails</h1>

<h2>Default Layout</h2>
<p>The default layout file is located at {`app/views/layouts/application.html.erb`}. This layout is automatically applied to all views unless otherwise specified.</p>
<pre>{`
<!-- app/views/layouts/application.html.erb -->

<!DOCTYPE html>
<html>
<head>
<title>MyApp</title>
<%= csrf_meta_tags %>
<%= csp_meta_tag %>
<%= stylesheet_link_tag 'application', media: 'all' %>
<%= javascript_include_tag 'application' %>
</head>
<body>
<header>
<h1>Welcome to MyApp</h1>
<nav>
  <%= link_to 'Home', root_path %>
  <%= link_to 'About', about_path %>
  <%= link_to 'Contact', contact_path %>
</nav>
</header>

<%= yield %>

<footer>
<p>&copy; 2024 MyApp</p>
</footer>
</body>
</html>
`}</pre>

<h2>Creating Custom Layouts</h2>
<p>You can create custom layouts by adding new files to the {`app/views/layouts`} directory. For example, create a layout for an admin section:</p>
<pre>{`
<!-- app/views/layouts/admin.html.erb -->

<!DOCTYPE html>
<html>
<head>
<title>Admin Panel</title>
<%= csrf_meta_tags %>
<%= csp_meta_tag %>
<%= stylesheet_link_tag 'admin', media: 'all' %>
<%= javascript_include_tag 'admin' %>
</head>
<body>
<header>
<h1>Admin Panel</h1>
<nav>
  <%= link_to 'Dashboard', admin_dashboard_path %>
  <%= link_to 'Users', admin_users_path %>
  <%= link_to 'Settings', admin_settings_path %>
</nav>
</header>

<%= yield %>

<footer>
<p>&copy; 2024 Admin Panel</p>
</footer>
</body>
</html>
`}</pre>

<h2>Using Custom Layouts</h2>
<p>To use a custom layout for a controller, set the {`layout`} method in the controller:</p>
<pre>{`
# app/controllers/admin_controller.rb

class AdminController < ApplicationController
layout 'admin'

def dashboard
# controller action code
end

def users
# controller action code
end

def settings
# controller action code
end
end
`}</pre>
<p>You can also specify a layout for individual actions:</p>
<pre>{`
class AdminController < ApplicationController
layout 'admin', only: [:dashboard, :users]
layout 'special', only: [:settings]

def dashboard
# controller action code
end

def users
# controller action code
end

def settings
# controller action code
end
end
`}</pre>

<h2>Conditional Layouts</h2>
<p>You can use conditional logic to select layouts dynamically:</p>
<pre>{`
class ApplicationController < ActionController::Base
layout :choose_layout

private

def choose_layout
if current_user.admin?
  'admin'
else
  'application'
end
end
end
`}</pre>

<h2>Summary</h2>
<p>Layouts in Rails allow you to define a consistent structure for your web pages, making it easy to maintain a uniform look and feel across your application. You can create custom layouts, apply them to specific controllers or actions, and use conditional logic to select layouts dynamically.</p>    
                </div>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="13">
            <Accordion.Header>
                <b>13. Rails Scaffolding</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Rails Scaffolding in Ruby on Rails</h1>

<h2>How to Use Rails Scaffolding</h2>

<h3>1. Generate Scaffold</h3>
<p>To generate a scaffold, use the {`rails generate scaffold`} command followed by the name of the resource and its attributes. For example, to create a scaffold for a {`Post`} resource with {`title`} and {`content`} attributes:</p>
<pre>{`rails generate scaffold Post title:string content:text`}</pre>
<p>This command generates the following files:</p>
<ul>
    <li><strong>Model</strong>: {`app/models/post.rb`}</li>
    <li><strong>Controller</strong>: {`app/controllers/posts_controller.rb`}</li>
    <li><strong>Views</strong>: {`app/views/posts/`} (index, show, new, edit, _form)</li>
    <li><strong>Migration</strong>: {`db/migrate/xxxxxx_create_posts.rb`}</li>
    <li><strong>Routes</strong>: Adds {`resources :posts`} to {`config/routes.rb`}</li>
    <li><strong>Test files</strong>: Model and controller test files</li>
</ul>

<h3>2. Run the Migration</h3>
<p>After generating the scaffold, run the migration to create the corresponding database table:</p>
<pre>{`rails db:migrate`}</pre>

<h3>3. Starting the Rails Server</h3>
<p>Start the Rails server to see your scaffolded application in action:</p>
<pre>{`rails server`}</pre>
<p>Visit {`http://localhost:3000/posts`} to interact with the generated CRUD interface for the {`Post`} resource.</p>

<h2>Example: Posts Scaffold</h2>

<h3>Command:</h3>
<pre>{`rails generate scaffold Post title:string content:text`}</pre>

<h3>Generated Migration:</h3>
<pre>{`
# db/migrate/20240703123456_create_posts.rb

class CreatePosts < ActiveRecord::Migration[6.0]
def change
create_table :posts do |t|
  t.string :title
  t.text :content

  t.timestamps
end
end
end
`}</pre>

<h3>Generated Model:</h3>
<pre>{`
# app/models/post.rb

class Post < ApplicationRecord
end
`}</pre>

<h3>Generated Controller:</h3>
<pre>{`
# app/controllers/posts_controller.rb

class PostsController < ApplicationController
before_action :set_post, only: %i[ show edit update destroy ]

# GET /posts
def index
@posts = Post.all
end

# GET /posts/1
def show
end

# GET /posts/new
def new
@post = Post.new
end

# GET /posts/1/edit
def edit
end

# POST /posts
def create
@post = Post.new(post_params)

if @post.save
  redirect_to @post, notice: 'Post was successfully created.'
else
  render :new
end
end

# PATCH/PUT /posts/1
def update
if @post.update(post_params)
  redirect_to @post, notice: 'Post was successfully updated.'
else
  render :edit
end
end

# DELETE /posts/1
def destroy
@post.destroy
redirect_to posts_url, notice: 'Post was successfully destroyed.'
end

private
# Use callbacks to share common setup or constraints between actions.
def set_post
  @post = Post.find(params[:id])
end

# Only allow a list of trusted parameters through.
def post_params
  params.require(:post).permit(:title, :content)
end
end
`}</pre>

<h3>Generated Views:</h3>
<ul>
    <li>{`app/views/posts/index.html.erb`}</li>
    <li>{`app/views/posts/show.html.erb`}</li>
    <li>{`app/views/posts/new.html.erb`}</li>
    <li>{`app/views/posts/edit.html.erb`}</li>
    <li>{`app/views/posts/_form.html.erb`}</li>
</ul>

<h3>Example: Index View</h3>
<pre>{`
<!-- app/views/posts/index.html.erb -->

<h1>Posts</h1>

<table>
<thead>
<tr>
  <th>Title</th>
  <th>Content</th>
  <th colspan="3"></th>
</tr>
</thead>

<tbody>
<% @posts.each do |post| %>
  <tr>
    <td><%= post.title %></td>
    <td><%= post.content %></td>
    <td><%= link_to 'Show', post %></td>
    <td><%= link_to 'Edit', edit_post_path(post) %></td>
    <td><%= link_to 'Destroy', post, method: :delete, data: { confirm: 'Are you sure?' } %></td>
  </tr>
<% end %>
</tbody>
</table>

<%= link_to 'New Post', new_post_path %>
`}</pre>

<h2>Summary</h2>
<p>Rails scaffolding provides a quick way to generate the skeleton of a CRUD application, making it easier to get started with Rails development. The scaffold command creates all necessary files, including models, views, controllers, and migrations, allowing you to focus on adding custom functionality.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        

        <Accordion.Item eventKey="14">
            <Accordion.Header>
                <b>14. Rails AJAX</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Integrating Rails with AJAX</h1>

<h2>Setup</h2>
<p>First, ensure that you have jQuery included in your Rails application. You can add jQuery by adding the following line to your {`Gemfile`}:</p>
<pre>{`gem 'jquery-rails'`}</pre>
<p>Run {`bundle install`} to install the gem. Then, include jQuery in your {`application.js`} file:</p>
<pre>{`
//= require jquery
//= require jquery_ujs
//= require_tree .
`}</pre>

<h2>Creating a Model and Controller</h2>
<p>Let’s create a simple example where users can like posts without reloading the page.</p>
<pre>{`
rails generate scaffold Post title:string content:text likes:integer
rails db:migrate
`}</pre>

<h2>Setting Up Routes</h2>
<p>Add a custom route for the like action:</p>
<pre>{`
// config/routes.rb
Rails.application.routes.draw do
resources :posts do
member do
  post 'like'
end
end

root 'posts#index'
end
`}</pre>

<h2>Controller Action for AJAX</h2>
<p>In the {`PostsController`}, add the {`like`} action to handle the AJAX request:</p>
<pre>{`
// app/controllers/posts_controller.rb
class PostsController < ApplicationController
before_action :set_post, only: [:show, :edit, :update, :destroy, :like]

# Other actions...

# POST /posts/1/like
def like
@post.increment!(:likes)
respond_to do |format|
  format.html { redirect_to @post }
  format.js   # This will render like.js.erb
end
end

private

def set_post
  @post = Post.find(params[:id])
end

def post_params
  params.require(:post).permit(:title, :content, :likes)
end
end
`}</pre>

<h2>View and JavaScript</h2>
<p>Update the {`index.html.erb`} to include a button for liking posts:</p>
<pre>{`
<!-- app/views/posts/index.html.erb -->
<h1>Posts</h1>

<table>
<thead>
<tr>
  <th>Title</th>
  <th>Content</th>
  <th>Likes</th>
  <th></th>
</tr>
</thead>
<tbody>
<% @posts.each do |post| %>
  <tr id="post_<%= post.id %>">
    <td><%= post.title %></td>
    <td><%= post.content %></td>
    <td class="likes"><%= post.likes %></td>
    <td>
      <%= button_to 'Like', like_post_path(post), method: :post, remote: true %>
    </td>
  </tr>
<% end %>
</tbody>
</table>

<%= link_to 'New Post', new_post_path %>
`}</pre>

<h2>Create the {`like.js.erb`} File</h2>
<p>Create the {`like.js.erb`} file to update the likes count:</p>
<pre>{`
// app/views/posts/like.js.erb
$("#post_<%= @post.id %> .likes").html("<%= @post.likes %>");
`}</pre>

<h2>Ensure JavaScript is Enabled</h2>
<p>Make sure {`application.js`} includes the necessary Rails UJS and jQuery setup:</p>
<pre>{`
//= require jquery
//= require jquery_ujs
//= require_tree .
`}</pre>

<h2>Summary</h2>
<p>By following these steps, you can integrate AJAX into your Rails application to create more dynamic and responsive user interactions. This example demonstrates how to update a post’s likes count without reloading the page using AJAX.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="15">
            <Accordion.Header>
                <b>15. Rails Send Emails</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Sending Emails in Ruby on Rails</h1>

<h2>Setting Up Action Mailer</h2>

<h3>1. Configure the Mailer</h3>
<p>First, configure the mail settings in {`config/environments/development.rb`} (or {`production.rb`} for production settings):</p>
<pre>{`
// config/environments/development.rb
Rails.application.configure do
# Other configurations...

config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
address:              'smtp.gmail.com',
port:                 587,
domain:               'example.com',
user_name:            '<your-email>@gmail.com',
password:             '<your-email-password>',
authentication:       'plain',
enable_starttls_auto: true  
}

config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
end
`}</pre>
<p>Replace the SMTP settings with your email provider's settings. The example above uses Gmail's SMTP server.</p>

<h3>2. Generate the Mailer</h3>
<p>Generate a new mailer using the Rails generator:</p>
<pre>{`rails generate mailer UserMailer`}</pre>
<p>This creates a mailer file {`app/mailers/user_mailer.rb`} and a mailer view directory {`app/views/user_mailer/`}.</p>

<h3>3. Define the Mailer Action</h3>
<p>Define an email method in the mailer class. For example, to send a welcome email:</p>
<pre>{`
// app/mailers/user_mailer.rb
class UserMailer < ApplicationMailer
default from: 'notifications@example.com'

def welcome_email(user)
@user = user
@url  = 'http://example.com/login'
mail(to: @user.email, subject: 'Welcome to My Awesome Site')
end
end
`}</pre>

<h3>4. Create the Mailer View</h3>
<p>Create the email view in {`app/views/user_mailer/welcome_email.html.erb`}:</p>
<pre>{`
<!DOCTYPE html>
<html>
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
</head>
<body>
<h1>Welcome to My Awesome Site, <%= @user.name %>!</h1>
<p>
  You have successfully signed up to example.com,
  your username is: <%= @user.email %>.<br>
  To login to the site, just follow this link: <%= @url %>.
</p>
<p>Thanks for joining and have a great day!</p>
</body>
</html>
`}</pre>

<p>Create the text version of the email in {`app/views/user_mailer/welcome_email.text.erb`}:</p>
<pre>{`
Welcome to My Awesome Site, <%= @user.name %>!

You have successfully signed up to example.com,
your username is: <%= @user.email %>.
To login to the site, just follow this link: <%= @url %>.

Thanks for joining and have a great day!
`}</pre>

<h3>5. Sending the Email</h3>
<p>You can now send the email from anywhere in your application, such as in a controller:</p>
<pre>{`
// app/controllers/users_controller.rb
class UsersController < ApplicationController
def create
@user = User.new(user_params)
if @user.save
  UserMailer.welcome_email(@user).deliver_now
  redirect_to @user, notice: 'User was successfully created.'
else
  render :new
end
end

private

def user_params
  params.require(:user).permit(:name, :email, :password, :password_confirmation)
end
end
`}</pre>

<h2>Summary</h2>
<p>By following these steps, you can set up and send emails in your Rails application using Action Mailer. This includes configuring the mail settings, creating a mailer, defining the mailer action, creating the email views, and sending the email.</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="16">
            <Accordion.Header>
                <b>16. Rails Testing</b>
            </Accordion.Header>
            <Accordion.Body>
                <div>
                <h1>Testing in Ruby on Rails</h1>

<h2>Setting Up Testing in Rails</h2>

<h3>1. Default Testing with MiniTest</h3>
<p>Rails includes MiniTest by default. You can start writing tests without any additional setup.</p>

<h4>Generating Tests</h4>
<p>When you generate models, controllers, or scaffolds, Rails automatically generates corresponding test files.</p>
<pre>{`rails generate model Article title:string content:text
rails generate controller Articles`}</pre>
<p>This creates test files:</p>
<ul>
    <li>{`test/models/article_test.rb`}</li>
    <li>{`test/controllers/articles_controller_test.rb`}</li>
</ul>

<h4>Running Tests</h4>
<p>You can run all tests using the following command:</p>
<pre>{`rails test`}</pre>
<p>You can also run specific tests:</p>
<pre>{`rails test test/models/article_test.rb
rails test test/controllers/articles_controller_test.rb`}</pre>

<h4>Writing Tests</h4>
<p>Here’s an example of a simple model test:</p>
<pre>{`# test/models/article_test.rb
require 'test_helper'

class ArticleTest &lt; ActiveSupport::TestCase
test "should not save article without title" do
article = Article.new
assert_not article.save, "Saved the article without a title"
end

test "should save article with valid attributes" do
article = Article.new(title: "Sample Title", content: "Sample content")
assert article.save, "Failed to save the article with valid attributes"
end
end`}</pre>

<h3>2. Using RSpec for Testing</h3>
<p>RSpec is a popular alternative to MiniTest, known for its readable syntax and powerful features.</p>

<h4>Installing RSpec</h4>
<p>Add the following gems to your {`Gemfile`}:</p>
<pre>{`group :development, :test do
gem 'rspec-rails'
gem 'factory_bot_rails'
end`}</pre>
<p>Run {`bundle install`} and then install RSpec:</p>
<pre>{`rails generate rspec:install`}</pre>
<p>This creates the following files:</p>
<ul>
    <li>{`.rspec`}</li>
    <li>{`spec/spec_helper.rb`}</li>
    <li>{`spec/rails_helper.rb`}</li>
</ul>

<h4>Generating Tests</h4>
<p>RSpec provides generators similar to Rails’ default generators:</p>
<pre>{`rails generate rspec:model Article
rails generate rspec:controller Articles`}</pre>

<h4>Writing Tests</h4>
<p>Here’s an example of a simple model spec:</p>
<pre>{`# spec/models/article_spec.rb
require 'rails_helper'

RSpec.describe Article, type: :model do
it "is not valid without a title" do
article = Article.new
expect(article).not_to be_valid
end

it "is valid with valid attributes" do
article = Article.new(title: "Sample Title", content: "Sample content")
expect(article).to be_valid
end
end`}</pre>

<h4>Running Tests</h4>
<p>You can run all RSpec tests using:</p>
<pre>{`rspec`}</pre>
<pre>{`rspec --format documentation`}</pre>
<p>You can also run specific tests:</p>
<pre>{`rspec spec/models/article_spec.rb
rspec spec/controllers/articles_controller_spec.rb`}</pre>

<h2>Summary</h2>
<p>Testing in Rails is straightforward whether you use the default MiniTest or a more advanced library like RSpec. Both frameworks support various types of tests, including unit tests, functional tests, and integration tests, ensuring your application remains reliable and maintainable.</p>

<hr/>
<h1>Run RSpec Test File from Ruby Script</h1>
    <p>To run an RSpec test file from a {`.rb`} file in Ruby programming, you can use the {`system`} method to execute shell commands directly from your Ruby script. Here's a step-by-step guide:</p>
    
    <h2>Step 1: Ensure RSpec is Installed</h2>
    <p>Make sure RSpec is installed in your Ruby environment. You can install it using the following command:</p>
    <pre>{`gem install rspec`}</pre>
    
    <h2>Step 2: Create Your RSpec Test File</h2>
    <p>Create an RSpec test file (e.g., {`spec/my_test_spec.rb`}). This file will contain your RSpec tests.</p>
    
    <h2>Step 3: Write Your Ruby Script</h2>
    <p>Create a Ruby script (e.g., {`run_tests.rb`}) that will execute the RSpec test file.</p>
    
    <h3>Create RSpec Test File</h3>
    <p>Create a file {`spec/my_test_spec.rb`} with the following content:</p>
    <pre>{` 
# spec/my_test_spec.rb
require 'rspec'

RSpec.describe 'My Test' do
  it 'should pass this test' do
    expect(1 + 1).to eq(2)
  end
end
    `}</pre>
    
    <h3>Create Ruby Script to Run RSpec</h3>
    <p>Create a file {`run_tests.rb`} with the following content:</p>
    <pre>{`
# run_tests.rb

# Running the RSpec test file
result = system('rspec spec/my_test_spec.rb')

# Outputting the result of the test run
if result
  puts 'Tests ran successfully'
else
  puts 'Tests failed'
end
    `}</pre>
    
    <h3>Execute the Ruby Script</h3>
    <p>Run the {`run_tests.rb`} script using the following command in your terminal:</p>
    <pre>{`ruby run_tests.rb`}</pre>
    
    <h2>Additional Notes</h2>
    <ul>
        <li>Make sure the paths to the RSpec executable and your test files are correct.</li>
        <li>You can customize the RSpec command with various options as needed. For example, you can add formatting options or specify different test directories.</li>
    </ul>
    
    <p>By following these steps, you can effectively run an RSpec test file from within a Ruby script.</p>

                </div>
            </Accordion.Body>
        </Accordion.Item>

        


    </Accordion>
    
    </>);
}

export default Rails;
