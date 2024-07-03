// Contact.js
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Ruby = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Ruby");   
    return (<>
        <h3>Ruby:</h3>
        <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
            <p>
                Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.
            </p>
            <a target='_blank' href='https://www.ruby-lang.org/en/'> Ruby Website </a>
        </div>
    <Accordion eventKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>1. Ruby installation</b></Accordion.Header>
        <Accordion.Body>
        sudo apt-get install ruby-full
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>2. Ruby Version</b></Accordion.Header>
        <Accordion.Body>
            <p>ruby -v</p>
            <p>ruby --version</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>3. Simple programming in Ruby</b></Accordion.Header>
        <Accordion.Body>
          <div>
          <p><b>Ruby Comments:</b>Comments are lines of annotation within Ruby code that are ignored at runtime. A single line comment starts with # character and they extend from # to the end of the line as follows −</p>
          <p> Ex:- # This is a single line comment.</p>
          <p><b>Ruby Multiline Comments:</b>You can comment multiple lines using =begin and =end syntax as follows −</p>
          <pre>
            <p>
            <div>=begin</div>
              This is a multiline comment and con spwan as many lines as you
              like. But =begin and =end should come in the first line only.
              <div>=end</div>
            </p>
          </pre>
          <a target='_blank' href="https://onlinegdb.com/gzlW8nbkG">Simple programming in ruby</a><br/>
          <a target='_blank' href="https://onlinegdb.com/MGDGjs1IU">defined? in ruby</a><br/>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>4. Ruby Operators: Increment and decrement operator is not defined.</b></Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="https://onlinegdb.com/e6OH8GMby">1.Assignment Operator</a>: +, -, *, **, /, %<br/>
          <a target='_blank' href="https://onlinegdb.com/e6OH8GMby">2.Compound Assignment Operator</a>: +=, -=, *=, **=, /=, %=<br/>
          <a target='_blank' href="https://onlinegdb.com/0Cp-3RzcC">3.Logical Operator</a>: &&, and, ||, or, !, not <br/>
          <a target='_blank' href="https://onlinegdb.com/Wutbd1LKy">Comparison or Relational Operator example-1</a>,
          <a target='_blank' href="https://onlinegdb.com/vA1nhK1ya">Comparison operator example-2</a>: ==, !=, &gt;, &gt;=, &lt;, &lt;=, &lt;=&gt;, ===, .eql?, equal?<br/>
          <a target='_blank' href="https://onlinegdb.com/ulrjF9aes">Ternary Operator</a>: ?:<br/>
          <a target='_blank' href="https://onlinegdb.com/dOwZ_4Xr3g">Bitwise Operator</a>: &, |, ^, ~, &gt;&gt;, &lt;&lt;<br/>
          <a target='_blank' href="https://onlinegdb.com/uGAqfL0DB">Range Operator</a>The (..) creates a range including the last term and (...) creates a range excluding the last term.<br/>
          <a target='_blank' href="https://onlinegdb.com/MGDGjs1IU">Special Operator</a>: defined?<br/>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><b>5. Ruby Variables</b>
There are four types of variables in Ruby:
          <ol>
            <li>Local Variable(SNAME)</li>
            <li>Class Variable(@@sname</li>
            <li>Instance Variable(@sname)</li>
            <li>Global Variable($sname)</li>
          </ol>
        </Accordion.Header>
        <Accordion.Body>
          <p>Ruby variables are locations which hold data to be used in the programs. Each variable has a different name. These variable names are based on some naming conventions. Unlike other programming languages, there is no need to declare a variable in Ruby. A prefix is needed to indicate it.</p>
          <a target='_blank' href="">1. Local Variable</a>:A local variable name starts with a lowercase letter or underscore (_). It is only accessible or have its scope within the block of its initialization.<br/>
          <a target='_blank' href="https://onlinegdb.com/omIQPQcslT">2. Class Variable</a>:A class variable name starts with @@ sign. They need to be initialized before use. A class variable belongs to the whole class and can be accessible from anywhere inside the class. If the value will be changed at one instance, it will be changed at every instance. <br/>
          <a target='_blank' href="https://onlinegdb.com/p98l3i3NQ">3. Instance Variable</a>:An instance variable name starts with a @ sign. It belongs to one instance of the class and can be accessed from any instance of the class within a method. They only have limited access to a particular instance of a class.<br/>
          <a target='_blank' href="https://onlinegdb.com/0pfKOM_fu">4. Global Variable</a>:A global variable name starts with a $ sign. Its scope is globally, means it can be accessed from any where in a program.<br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><b>6. Ruby Data Types: </b>
          <ol>
            <li><b>Numbers:</b> Fixnum, Bignum, Float, Complex, Rational, BigDecimal</li>
            <li><b>Strings:</b> Ex:- "Ruby", 'Ruby'</li>
            <li><b>Symbols:</b> symbols are immutable, reusable constant names, A symbol is preceded by a colon (:). Ex :abcd</li>
            <li><b>Hashes:</b> Ex:- &#123;"apple" => "10", "banana" => "20", "cherry" => "30"&#125;</li>
            <li><b>Arrays:</b> Ex:- ["Apple","Banana","Cherry"]</li>
            <li><b>Booleans</b> Ex:- true, false</li>
          </ol>
        </Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="https://onlinegdb.com/CzR9XLfAx">1.Numbers Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/XfAJxAaou">2.String Example-1</a>,
          <a target='_blank' href="https://onlinegdb.com/wV9r-8Yrk">Example-2</a><br/>
          <a target='_blank' href="https://onlinegdb.com/RJ341sBCt">3.Symbols Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/Bmxf9NgVh">4.Hash Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/gMJkpDWUW">5.Array Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/XIMjfQ27B">6.Booleans Example</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><b>7. Control Statements: </b>
        Threee types
          <ol>
            <li><b>Jumping Statements:</b> break, next, redo, and retry</li>
            <li><b>Conditional Statements: if, if-else,if-elsif-else,unless,unless-else and case</b></li>
            <li><b>Looping Statements: while, until, for, times, loop</b></li>
          </ol>
        </Accordion.Header>
        <Accordion.Body>
          <p><b>Examples:-</b></p>  
          <a target='_blank' href="https://onlinegdb.com/jsc7DbtiI">break, next, redo, and retry</a><br/>
          <a target='_blank' href="https://onlinegdb.com/GOOeUxyxh">if, if-else, if-elsif-else, unless, unless-else,
          ternary operator, and case</a><br/>
          <a target='_blank' href="https://onlinegdb.com/ls5DqMD4t">case example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/xkY1DunhW">while, until, for, times, loop</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><b>8.Iterators:</b><p style={{marginLeft: "12px"}}>each, each_with_index, map, collect, select, find_all, reject, find, detect, find_index, reduce, inject, any?,
        all?, none?, one?, count, zip, cycle, partition, each_cons, each_slice, group_by, sort_by, flat_map, collect_concat,
          compact, take, take_while, drop, drop_while, each_key, each_value, each_pair, lazy</p>
        </Accordion.Header>
        <Accordion.Body>
        <ol>
          <li><strong>each</strong>: Iterates over each element in a collection.</li>
          <li><strong>map</strong>: Creates a new array containing the values returned by the block.</li>
          <li><strong>select</strong>: Returns an array containing all elements of an array for which the block returns a true value.</li>
          <li><strong>reject</strong>: Returns an array for all elements of an array for which the block returns false.</li>
          <li><strong>find</strong>: Returns the first element for which the block is not false.</li>
          <li><strong>inject</strong>: Combines all elements of an array by applying a binary operation, specified by a block or a symbol, with an initial value.</li>
          <li><strong>reduce</strong>: Alias for inject.</li>
          <li><strong>each_with_index</strong>: Iterates over each element and its index.</li>
          <li><strong>each_with_object</strong>: Iterates, passing in an accumulator value.</li>
          <li><strong>times</strong>: Iterates a specified number of times.</li>
          <li><strong>upto</strong>: Iterates from the number up to the specified number.</li>
          <li><strong>downto</strong>: Iterates from the number down to the specified number.</li>
          <li><strong>step</strong>: Iterates, increasing by a specified step value.</li>
          <li><strong>cycle</strong>: Iterates over a collection indefinitely, or a specified number of times.</li>
          <li><strong>reverse_each</strong>: Iterates over elements in reverse order.</li>
          <li><strong>each_cons</strong>: Iterates over elements in consecutive groups of a specified size.</li>
          <li><strong>each_slice</strong>: Iterates over elements in slices of a specified size.</li>
          <li><strong>partition</strong>: Returns two arrays, the first containing the elements for which the block is true, the second for which it is false.</li>
          <li><strong>zip</strong>: Combines elements from multiple arrays into a single array of arrays.</li>
          <li><strong>take</strong>: Returns the first n elements of an array.</li>
          <li><strong>drop</strong>: Drops the first n elements of an array and returns the rest.</li>
          <li><strong>take_while</strong>: Takes elements from the start of an array while the block is true.</li>
          <li><strong>drop_while</strong>: Drops elements from the start of an array while the block is true.</li>
          <li><strong>find_all</strong>: Alias for select.</li>
          <li><strong>all?</strong>: Returns true if the block never returns false or nil for any element.</li>
          <li><strong>any?</strong>: Returns true if the block ever returns a value other than false or nil for any element.</li>
          <li><strong>none?</strong>: Returns true if the block never returns true for any element.</li>
          <li><strong>one?</strong>: Returns true if the block returns true for exactly one element.</li>
          <li><strong>group_by</strong>: Groups elements of the collection based on the result of the block.</li>
          <li><strong>chunk</strong>: Enumerates elements, chunking them together based on the return value of the block.</li>
        </ol>
          <p><b>Examples:-</b></p>
          <a target='_blank' href="https://onlinegdb.com/toPP7Em83">each, each_with_index, map, collect, select, find_all, reject, find, detect, find_index, reduce, inject, any?, all?, none?, one?, count, zip, cycle, partition, each_cons, each_slice, group_by, sort_by, flat_map, collect_concat, compact, take, take_while, drop, drop_while, each_key, each_value, each_pair, lazy</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><b>9. Blocks:</b>
        <ol>
          <li><b>each:</b>The each() is an inbuilt method in Ruby iterates over every element in the range</li>
          <li><b>yield:</b>A simple yield statement simply executes the block that is passed to the method. </li>
          <li><b>Proc:</b>A Proc object is an encapsulation of a block of code, which can be stored in a local variable, passed to a method or another Proc</li>
          <li><b>lambda:</b>A lambda is an object similar to a proc. Unlike a proc, a lambda requires a specific number of arguments passed to it, and it returns to its calling method rather than returning immediately</li>
        </ol>
          
        </Accordion.Header>
        <Accordion.Body>
          <p><b>Examples:-</b></p>
          <a target='_blank' href="https://onlinegdb.com/T1dVKnDud">each, yield, Proc, lambda</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header><b>10. Methods:</b>
        <ol>
          <li><b>Instance Methods:</b> Define behavior for instances of a class.</li>
          <li><b>Class Methods:</b> Define behavior on the class itself.</li>
          <li><b>Singleton Methods:</b> Define behavior for a single object.</li>
          <li><b>Visibility-Based Methods</b>
            <ol>
              <li><b>Public Methods:</b> Accessible from outside the class</li>
              <li><b>Private Methods:</b> Not accessible from outside the class or by other objects</li>
              <li><b>Protected Methods:</b> Accessible within the class and its subclasses</li>
            </ol>
          </li>
        </ol>
        </Accordion.Header>
        <Accordion.Body>
          
          <p><b>Examples:-</b></p>
          <ol>
            <li><a target='_blank' href="https://onlinegdb.com/sQD2f2ojU"><b>Instance Methods</b></a></li>
            <li><a target='_blank' href="https://onlinegdb.com/-1Jd2khC1"><b>Class Methods</b></a></li>
            <li><a target='_blank' href="https://onlinegdb.com/MI_YXVrrk"><b>Singleton Methods</b></a></li>
            <li><a target='_blank' href="https://onlinegdb.com/1GgM0Cr1q"><b>Public Methods</b></a></li>
            <li><a target='_blank' href="https://onlinegdb.com/86qbtJYKQ"><b>Private Methods</b></a></li>
            <li><a target='_blank' href="https://onlinegdb.com/zoybzv1_W"><b>Protected Methods</b></a></li>
            <li><a target='_blank' href="https://onlinegdb.com/zoDR7kpnJ"><b>Access Control</b></a></li>
          </ol>
          <h2>is this support method overriding in ruby?</h2>
          <p>Yes, method overriding is fully supported in Ruby. Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass. This is a fundamental aspect of object-oriented programming that promotes code reuse and allows for specialized behavior in subclasses.</p>
          <pre>
            {`
class Animal
  def speak
    "Animal makes a sound."
  end
end

class Dog < Animal
  def speak
    "Woof!"
  end
end

class Cat < Animal
  def speak
    "Meow!"
  end
end

dog = Dog.new
puts dog.speak  # Output: Woof!

cat = Cat.new
puts cat.speak  # Output: Meow!

            `}
          </pre>
<h3>Above example with module</h3>
<pre>
{`

# Define modules with shared behavior
module Soundable
  def speak
    "Animal makes a sound."
  end
end

module DogSound
  def speak
    "Woof!"
  end
end

module CatSound
  def speak
    "Meow!"
  end
end

# Define classes that include modules
class Animal
  include Soundable
end

class Dog < Animal
  include DogSound
end

class Cat < Animal
  include CatSound
end

# Objects
dog = Dog.new
cat = Cat.new

puts dog.speak  # Output: Woof!
puts cat.speak  # Output: Meow!

`}
</pre>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header><b>11. Modules:</b>
        <ul>
          <li><b>Module:</b> A collection of methods, constants, and class variables.</li>
          <li><b>include:</b> Mixes module methods as instance methods in the class.</li>
          <li><b>extend:</b> Mixes module methods as class methods in the class.</li>
        </ul>
          
        </Accordion.Header>
        <Accordion.Body>

          <p><b>Examples:-</b></p>
          <ol>
            <li><a target='_blank' href="https://onlinegdb.com/6fMl8lkSW">Basic Module Definition</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/8tJ3rup3Y">Including a Module</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/n9GRjUTRa">Extending a Module</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/JAjPul5oZ">Module, class, include, extend</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/3EV7gaA5l">Nested Modules</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/f_ZljdX1B">Modules with Constants</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/7LnbNvxsY">Modules as Mixins</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/ZvVibfQRiw">Using Modules for Namespace Management</a></li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header><b>12. Classes:</b>
        <ol>
          <li>Object-Oriented Programming</li>
          <li>Inheritance : Ruby supports only single class inheritance, it does not support multiple class inheritance.</li>
          <li>Encapsulation</li>
          <li>Polymorphism</li>
          <li>attr_accessor, attr_reader, and attr_writer</li>
          <li>Basic Class Definition</li>
          <li>Class with Accessor Methods</li>
          <li>Class Inheritance</li>
          <li>Class with Class Methods</li>
          <li>Class with Constants</li>
          <li>Singleton Methods</li>
          <li>Including Modules in Classes</li>
          <li>Class with Nested Classes</li>
        </ol>
          
        </Accordion.Header>
        <Accordion.Body>

        <center><h1>Object-Oriented Programming in Ruby</h1></center>

<h2>1. Classes and Objects</h2>
<h3>Defining a Class</h3>
<pre>{`
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def greet
    "Hello, my name is #{@name} and I am #{@age} years old."
  end
end

# Creating objects (instances of the Person class)
person1 = Person.new("Alice", 30)
person2 = Person.new("Bob", 25)

puts person1.greet  # Output: Hello, my name is Alice and I am 30 years old.
puts person2.greet  # Output: Hello, my name is Bob and I am 25 years old.


`}
</pre>

<h2>2. Inheritance</h2>
<h3>Creating Subclasses</h3>
<pre>
{`
class Animal
  def speak
    "Animal makes a sound."
  end
end

class Dog < Animal
  def speak
    "Woof!"
  end
end

class Cat < Animal
  def speak
    "Meow!"
  end
end

dog = Dog.new
puts dog.speak  # Output: Woof!

cat = Cat.new
puts cat.speak  # Output: Meow!

`}


</pre>
<p>Ruby supports only single class inheritance, it does not support multiple class inheritance.</p>
<h3>Multiple inheritance possible with include in ruby</h3>
<p>
In Ruby, multiple inheritance of behavior (methods) is achieved through the use of modules and the include keyword. While Ruby does not support multiple inheritance of state (instance variables) from multiple classes, it does support inheriting methods from multiple modules.</p>
<pre>
  {`
# Define modules with shared behavior
module Swim
  def swim
    "Swimming!"
  end
end

module Fly
  def fly
    "Flying!"
  end
end

# Define classes that include modules
class Bird
  include Fly
end

class Duck < Bird
  include Swim
end

# Objects
duck = Duck.new

puts duck.fly   # Output: Flying!
puts duck.swim  # Output: Swimming!

  `}
</pre>
<h2>3. Encapsulation</h2>
<h3>Using Access Control</h3>
<pre>
  {`
  class BankAccount
  def initialize(balance)
    @balance = balance
  end

  def withdraw(amount)
    if amount <= @balance
      @balance -= amount
      puts "Withdrawn #{amount}. New balance: #{@balance}"
    else
      puts "Insufficient funds."
    end
  end

  private  # Methods below are private

  def deposit(amount)
    @balance += amount
    puts "Deposited #{amount}. New balance: #{@balance}"
  end
end

account = BankAccount.new(1000)
account.withdraw(500)  # Output: Withdrawn 500. New balance: 500
account.deposit(200)   # Error: private method deposit called for #<BankAccount:0x00007f93e2066f20> (NoMethodError)

  `}
</pre>
<ul>
  <b>
  Explanation:
  </b>
  <li>Modules and Shared Behavior: The Swim and Fly modules define behaviors (swim and fly methods) that can be shared among classes.</li>

  <li>Including Modules: Classes (Bird and Duck) include modules using the include keyword, inheriting methods from those modules.</li>

  <li>Inheritance Chain: Duck inherits from Bird, which includes Fly. Duck itself includes Swim, allowing instances of Duck to exhibit behaviors from both modules (Fly and Swim).</li>

</ul>


<h2>4. Polymorphism</h2>
<h3>Using Method Overriding</h3>
<pre>
{`
class Shape
  def area
    raise NotImplementedError, "Subclass must implement abstract method"
  end
end

class Square < Shape
  def initialize(side_length)
    @side_length = side_length
  end

  def area
    @side_length * @side_length
  end
end

class Circle < Shape
  def initialize(radius)
    @radius = radius
  end

  def area
    Math::PI * @radius * @radius
  end
end

square = Square.new(5)
puts "Area of square: #{square.area}"  # Output: Area of square: 25

circle = Circle.new(3)
puts "Area of circle: #{circle.area}"  # Output: Area of circle: 28.274333882308138

`}
</pre>

<h2>Example: Using Modules for Polymorphism</h2>
    <pre>{`
# Define a module with a common method
module Soundable
  def make_sound
    raise NotImplementedError, "Subclass must implement abstract method"
  end
end

# Classes using the Soundable module
class Dog
  include Soundable

  def make_sound
    "Woof!"
  end
end

class Cat
  include Soundable

  def make_sound
    "Meow!"
  end
end

# Using polymorphism with the Soundable module
def make_animal_sound(animal)
  puts animal.make_sound
end

dog = Dog.new
cat = Cat.new

make_animal_sound(dog)  # Output: Woof!
make_animal_sound(cat)  # Output: Meow!
`}
</pre>

    <h2>Explanation:</h2>
    <ul>
        <li><strong>Module Definition:</strong> The {`Soundable`} module defines a method {`make_sound`} which is intended to be implemented by classes that include this module.</li>
        <li><strong>Class Definitions:</strong> Both {`Dog`} and {`Cat`} classes include the {`Soundable`} module and provide their own implementations of the {`make_sound`} method.</li>
        <li><strong>Polymorphic Method:</strong> The {`make_animal_sound`} method accepts any object that responds to {`make_sound`}, demonstrating polymorphism. This allows {`make_animal_sound`} to work with instances of {`Dog`} and {`Cat`} interchangeably.</li>
    </ul>

    <h2>Benefits of Using Modules for Polymorphism:</h2>
    <ul>
        <li><strong>Code Reusability:</strong> Modules can be included in multiple classes, promoting code reuse and reducing duplication.</li>
        <li><strong>Flexible Composition:</strong> Classes can include multiple modules, allowing them to inherit different behaviors as needed.</li>
        <li><strong>Encapsulation:</strong> Modules provide a way to encapsulate related methods and constants, enhancing code organization and maintainability.</li>
    </ul>


<h2>Summary</h2>
<ul>
    <li><strong>Classes and Objects</strong>: Classes define blueprints for objects, which encapsulate data and behavior.</li>
    <li><strong>Inheritance</strong>: Subclasses inherit behavior and can override methods from their superclasses.</li>
    <li><strong>Encapsulation</strong>: Controlling access to methods and variables to prevent unintended modification.</li>
    <li><strong>Polymorphism</strong>: Objects of different classes can be treated as instances of a common superclass, allowing for flexible method implementations.</li>
</ul>

          <h3>Examples</h3>
          <ul>
            <li><a target='_blank' href="https://onlinegdb.com/MflJbygnI"><b>Without</b> attr_accessor, attr_reader, and attr_writer</a></li>
          </ul>
          <ul>
            <li><strong>attr_accessor</strong>: Creates both getter and setter methods.</li>
            <li><strong>attr_reader</strong>: Creates only the getter method.</li>
            <li><strong>attr_writer</strong>: Creates only the setter method.</li>
          </ul>
          <ul>
            
            <li><a target='_blank' href="https://onlinegdb.com/qHqC-cWzV">attr_accessor, attr_reader, and attr_writer</a></li>
            <li><a target='_blank' href="https://onlinegdb.com/qHqC-cWzV">Basic Class Definition, Class with Accessor Methods, Class Inheritance, Class with Class Methods, Class with Constants, Singleton Methods, Including Modules in Classes, Class with Nested Classes</a></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header><b>13. Exceptions</b>: Ruby exceptions provide a way to handle errors and unexpected situations in your code
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              <h1>Exception Examples</h1>
              <pre>

<b># Example 1: Rescue specific exception (or) Custom Exceptions</b>                
{`
begin
  raise ArgumentError, "Invalid argument"
rescue ArgumentError => e
  puts "Error occurred: #{e.message}"
end
`}
</pre>

<b># Example 2: Rescue any StandardError</b>
<pre>
{`
begin
  raise "Runtime error"
rescue => e
  puts "Error occurred: #{e.message}"
end
`}
</pre>
<b># Example 3: Else and ensure blocks</b>
<pre>
{`
begin
  # Code that might raise an exception
rescue
  # Handle the exception
else
  # Code to execute if no exception is raised
ensure
# This code will always execute
end

`}
<b># Database PostgreSQL Exception</b>
<pre>
{`
require 'pg'
begin
  # Example: Execute a query
  conn.exec("SELECT * FROM non_existent_table")
rescue PG::UndefinedTable => e
  puts "Table does not exist: #{e.message}"
rescue PG::Error => e
  puts "PostgreSQL error occurred: #{e.message}"
rescue StandardError => e
  puts "Other error occurred: #{e.message}"
ensure
  conn.close if conn
end

  `}
</pre>
<b>File handling exception</b>
<pre>
  {`
begin
  # Example: Reading a file
  File.open('/path/to/file.txt', 'r') do |file|
    puts file.read
  end

  # Example: Writing to a file
  File.open('/path/to/new_file.txt', 'w') do |file|
    file.write("Hello, world!")
  end

  # Example: Deleting a file
  File.delete('/path/to/file_to_delete.txt')

rescue Errno::ENOENT => e
  puts "File not found: #{e.message}"
rescue Errno::EACCES => e
  puts "Permission denied: #{e.message}"
rescue Errno::EISDIR => e
  puts "Expected a file but got a directory: #{e.message}"
rescue Errno::ENOTDIR => e
  puts "Expected a directory but got a file: #{e.message}"
rescue Errno::EIO => e
  puts "Input/output error: #{e.message}"
rescue Errno::ENOSPC => e
  puts "No space left on device: #{e.message}"
rescue Errno::EINVAL => e
  puts "Invalid argument: #{e.message}"
rescue StandardError => e
  puts "Other error occurred: #{e.message}"
end

  `}
</pre>
</pre>
            </p>
          <h1>Types of Exceptions in Ruby</h1>
    <ol>
        <li>
            <strong>StandardError</strong>: This is the superclass for most exceptions raised by Ruby programs. It represents normal program errors.
            <ul>
                <li>Examples: {`RuntimeError`}, {`ArgumentError`}, {`NameError`}, {`NoMethodError`}, {`TypeError`}, {`ZeroDivisionError`}, etc.</li>
            </ul>
        </li>
        <li>
            <strong>SystemCallError</strong>: These exceptions are typically raised by system calls when they fail. They are subclasses of {`Errno::XXX`}.
            <ul>
                <li>Examples: {`Errno::ENOENT`} (No such file or directory), {`Errno::EACCESS`} (Permission denied), etc.</li>
            </ul>
        </li>
        <li>
            <strong>SignalException</strong>: These exceptions are raised when a signal is received by the process. They are subclasses of {`SignalException`}.
            <ul>
                <li>Examples: {`Interrupt`} (raised by pressing Ctrl+C), {`SIGTERM`} (termination signal), etc.</li>
            </ul>
        </li>
        <li>
            <strong>NoMemoryError</strong>: Raised when Ruby runs out of available memory.
        </li>
        <li>
            <strong>ScriptError</strong>: These exceptions are raised when there is an error in the Ruby script itself rather than a runtime error.
            <ul>
                <li>Examples: {`SyntaxError`}, {`LoadError`}, etc.</li>
            </ul>
        </li>
        <li>
            <strong>SecurityError</strong>: Raised when an insecure operation is attempted.
        </li>
        <li>
            <strong>EncodingError</strong>: Raised when an error occurs during encoding conversion.
        </li>
        <li>
            <strong>IOError</strong>: Raised for I/O-related errors.
        </li>
        <li>
            <strong>TypeError</strong>: Raised when a method receives an argument of an invalid type.
        </li>
        <li>
            <strong>RangeError</strong>: Raised when a numeric value is out of the range for a particular operation.
        </li>
    </ol>
    <h1>Types of Exceptions in Ruby with Examples</h1>
    <ol>
        <li>
            <strong>StandardError</strong>: This is the superclass for most exceptions raised by Ruby programs. It represents normal program errors.
            <ul>
                <li>Examples: RuntimeError, ArgumentError, NameError, NoMethodError, TypeError, ZeroDivisionError, etc.</li>
                <pre>{`
# StandardError example
begin
  raise "This is a runtime error"
rescue StandardError => e
  puts e.message
end
                `}</pre>
            </ul>
        </li>
        <li>
            <strong>SystemCallError</strong>: These exceptions are typically raised by system calls when they fail. They are subclasses of {`Errno::XXX`}.
            <ul>
                <li>Examples: {`Errno::ENOENT`} (No such file or directory), {`Errno::EACCESS`} (Permission denied), etc.</li>
                <pre>{`
# SystemCallError example
begin
  File.open("non_existent_file")
rescue Errno::ENOENT => e
  puts e.message
end
                `}</pre>
            </ul>
        </li>
        <li>
            <strong>SignalException</strong>: These exceptions are raised when a signal is received by the process. They are subclasses of {`SignalException`}.
            <ul>
                <li>Examples: {`Interrupt`} (raised by pressing Ctrl+C), {`SIGTERM`} (termination signal), etc.</li>
                <pre>{`
# SignalException example
begin
  puts "Press Ctrl+C to raise an Interrupt exception"
  sleep
rescue Interrupt => e
  puts "Interrupt signal received"
end
                `}</pre>
            </ul>
        </li>
        <li>
            <strong>NoMemoryError</strong>: Raised when Ruby runs out of available memory.
            <pre>{`
# NoMemoryError example
begin
  arr = []
  while true
    arr << "memory hog"
  end
rescue NoMemoryError => e
  puts e.message
end
            `}</pre>
        </li>
        <li>
            <strong>ScriptError</strong>: These exceptions are raised when there is an error in the Ruby script itself rather than a runtime error.
            <ul>
                <li>Examples: {`SyntaxError`}, {`LoadError`}, etc.</li>
                <pre>{`
# ScriptError example
begin
  load 'non_existent_file.rb'
rescue LoadError => e
  puts e.message
end
                `}</pre>
            </ul>
        </li>
        <li>
            <strong>SecurityError</strong>: Raised when an insecure operation is attempted.
            <pre>{`
# SecurityError example
begin
  $SAFE = 1
  eval("system('rm -rf /')")
rescue SecurityError => e
  puts e.message
end
            `}</pre>
        </li>
        <li>
            <strong>EncodingError</strong>: Raised when an error occurs during encoding conversion.
            <pre>{`
# EncodingError example
begin
  "hello".encode("invalid-encoding")
rescue Encoding::InvalidByteSequenceError => e
  puts e.message
end
            `}</pre>
        </li>
        <li>
            <strong>IOError</strong>: Raised for I/O-related errors.
            <pre>{`
# IOError example
begin
  File.open("/etc/passwd", "w")
rescue IOError => e
  puts e.message
end
            `}</pre>
        </li>
        <li>
            <strong>TypeError</strong>: Raised when a method receives an argument of an invalid type.
            <pre>{`
# TypeError example
begin
  1 + "two"
rescue TypeError => e
  puts e.message
end
            `}</pre>
        </li>
        <li>
            <strong>RangeError</strong>: Raised when a numeric value is out of the range for a particular operation.
            <pre>{`
# RangeError example
begin
  (1..Float::INFINITY).to_a
rescue RangeError => e
  puts e.message
end
            `}</pre>
        </li>
    </ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="13">
        <Accordion.Header><b>14. Date and Time</b>:The Time class represents dates and times in Ruby. It is a thin layer over the system date and time functionality provided by the operating system.</Accordion.Header>
        <Accordion.Body>
          <div>
          
          <h3>Getting the Current Date and Time</h3>
          <p>To get the current date and time:</p>
          <pre>
            {`
require 'date'

# Current date and time
current_time = Time.now
puts current_time

# Current date
current_date = Date.today
puts current_date

            `}
          </pre>
         <h3>Creating Specific Date and Time Instances</h3>
         <p>You can create a specific date or time instance:</p>
         <pre>
          {`
require 'date'

# Create a specific date
specific_date = Date.new(2024, 7, 3)
puts specific_date

# Create a specific time
specific_time = Time.new(2024, 7, 3, 14, 30, 0)
puts specific_time

          `}
         </pre>
         <h3>Formatting Date and Time</h3>
         <p>You can format dates and times using the strftime method:</p>
         <pre>
          {`
require 'date'

# Formatting current date
formatted_date = Date.today.strftime("%d/%m/%Y")
puts formatted_date

# Formatting current time
formatted_time = Time.now.strftime("%H:%M:%S on %B %d, %Y")
puts formatted_time

          `}
         </pre>

         <h3>Parsing Date and Time Strings</h3>
         <p>You can parse strings into date and time objects:</p>
         <pre>
          {`
require 'date'

# Parsing a date string
date_str = "2024-07-03"
parsed_date = Date.parse(date_str)
puts parsed_date

# Parsing a time string
time_str = "2024-07-03 14:30:00"
parsed_time = Time.parse(time_str)
puts parsed_time

          `}
          </pre>

         <h3>Date and Time Arithmetic</h3>
         <p>You can perform arithmetic operations on date and time objects:</p>
         <pre>
          {`
require 'date'

# Adding days to a date
date = Date.today
new_date = date + 10
puts new_date

# Adding seconds to a time
time = Time.now
new_time = time + (60 * 60 * 24) # Adding one day
puts new_time

          `}
         </pre>


         <h3>Comparing Dates and Times</h3>
         <p>You can compare date and time objects:</p>
         <pre>
          {`
require 'date'

# Comparing dates
date1 = Date.new(2024, 7, 3)
date2 = Date.new(2024, 7, 10)
puts date1 < date2  # true

# Comparing times
time1 = Time.new(2024, 7, 3, 14, 30, 0)
time2 = Time.new(2024, 7, 3, 15, 30, 0)
puts time1 < time2  # true

          `}
         </pre>



         <h3>Various components of both Date and Time objects:</h3>
         <p></p>
         <pre>
          {`
require 'date'

# Create a date object
date = Date.new(2024, 7, 3)
# Get components of the date
year = date.year
month = date.month
day = date.day
wday = date.wday
yday = date.yday
leap = date.leap?

puts "Date Components:"
puts "Year: #{year}, Month: #{month}, Day: #{day}"
puts "Weekday: #{wday} (0=Sunday, 6=Saturday)"
puts "Day of the Year: #{yday}"
puts "Leap Year: #{leap}"

# Create a time object
time = Time.new(2024, 7, 3, 14, 30, 0)
# Get components of the time
year = time.year
month = time.month
day = time.day
hour = time.hour
minute = time.min
second = time.sec
wday = time.wday
yday = time.yday
zone = time.zone
dst = time.dst?

puts "\nTime Components:"
puts "Year: #{year}, Month: #{month}, Day: #{day}"
puts "Hour: #{hour}, Minute: #{minute}, Second: #{second}"
puts "Weekday: #{wday} (0=Sunday, 6=Saturday)"
puts "Day of the Year: #{yday}"
puts "Time Zone: #{zone}"
puts "Daylight Saving Time: #{dst}"

          `}
         </pre>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="14">
        <Accordion.Header><b>15. File I/O</b>:Ruby provides a whole set of I/O-related methods implemented in the Kernel module. All the I/O methods are derived from the class IO</Accordion.Header>
        <Accordion.Body>
          <div>
          <p>The class IO provides all the basic methods, such as read, write, gets, puts, readline, getc, and printf.

This chapter will cover all the basic I/O functions available in Ruby. For more functions, please refer to Ruby Class IO.</p>
          <h3>The puts Statement</h3>
          <p>In the previous chapters, you have assigned values to variables and then printed the output using puts statement.

The puts statement instructs the program to display the value stored in the variable. This will add a new line at the end of each line it writes.:</p>
          <pre>
            {`
#!/usr/bin/ruby

val1 = "This is variable one"
val2 = "This is variable two"
puts val1
puts val2

            `}
          </pre>
         <h3>The gets Statement</h3>
         <p>The gets statement can be used to take any input from the user from standard screen called STDIN.:</p>
         <pre>
          {`
#!/usr/bin/ruby

puts "Enter a value :"
val = gets
puts val

          `}
         </pre>
         <h3>The putc Statement</h3>
         <p>Unlike the puts statement, which outputs the entire string onto the screen, the putc statement can be used to output one character at a time.:</p>
         <pre>
          {`
#!/usr/bin/ruby

str = "Hello Ruby!"
putc str
          `}
         </pre>

         <h3>The print Statement</h3>
         <p></p>
         <pre>
          {`
#!/usr/bin/ruby

print "Hello World"
print "Good Morning"

          `}
          </pre>

         <h3>Opening and Closing Files</h3>
         <p>Syntax:</p>
         <pre>
          {`

aFile = File.new("filename", "mode")
   # ... process the file
aFile.close

          `}
         </pre>
         <h3>The File.open Method:</h3>
         <p></p>
         <pre>
          {`
File.open("filename", "mode") do |aFile|
   # ... process the file
end

          `}
         </pre>

          <h2>Reading and Writing Files</h2>
         <h3>The sysread Method:</h3>
         <pre>
          {`
#!/usr/bin/ruby

aFile = File.new("input.txt", "r")
if aFile
   content = aFile.sysread(20)
   puts content
else
   puts "Unable to open file!"
end

          `}
         </pre>

         <h3>The syswrite Method:</h3>
         <pre>
          {`
#!/usr/bin/ruby

aFile = File.new("input.txt", "r+")
if aFile
   aFile.syswrite("ABCDEF")
else
   puts "Unable to open file!"
end

          `}
         </pre>

         <h3>The each_byte Method:</h3>
         <pre>
          {`
#!/usr/bin/ruby

aFile = File.new("input.txt", "r+")
if aFile
   aFile.syswrite("ABCDEF")
   aFile.each_byte {|ch| putc ch; putc ?. }
else
   puts "Unable to open file!"
end

          `}
         </pre>
         <h3>The IO.readlines Method:</h3>
         <pre>
          {`
#!/usr/bin/ruby

arr = IO.readlines("input.txt")
puts arr[0]
puts arr[1]

          `}
         </pre>
         <h3>The IO.foreach Method:</h3>
         <pre>
          {`
#!/usr/bin/ruby

IO.foreach("input.txt"){|block| puts block}

          `}
         </pre>

         <h3>Renaming and Deleting Files</h3>
   <pre>
          {`
         #!/usr/bin/ruby

# Rename a file from test1.txt to test2.txt
File.rename( "test1.txt", "test2.txt" )

#!/usr/bin/ruby

# Delete file test2.txt
File.delete("test2.txt")
`}
</pre>
<h3>File Modes and Ownership</h3>
<pre>
  {`
  #!/usr/bin/ruby

file = File.new( "test.txt", "w" )
file.chmod( 0755 )
  `}

</pre>
<h3>File Inquiries</h3>
<pre>
  {`
# Example-1

File.open("file.rb") if File::exists?( "file.rb" )

# Example-2

# This returns either true or false
File.file?( "text.txt" )


# Example-3

# a directory
File::directory?( "/usr/local/bin" ) # => true

# a file
File::directory?( "file.rb" ) # => false

# Example-4

File.readable?( "test.txt" )   # => true
File.writable?( "test.txt" )   # => true
File.executable?( "test.txt" ) # => false

# Example-5
File.zero?( "test.txt" )      # => true
File.size?( "text.txt" )     # => 1002
File::ftype( "test.txt" )     # => file

# Example-6

File::ctime( "test.txt" ) # => Fri May 09 10:06:37 -0700 2008
File::mtime( "text.txt" ) # => Fri May 09 10:44:44 -0700 2008
File::atime( "text.txt" ) # => Fri May 09 10:45:01 -0700 2008

`}
</pre>
<h2>Directories in Ruby</h2>
<h3>Navigating Through Directories</h3>
<pre>
  {`
Ex-1
  Dir.chdir("/usr/bin")
Ex-2
  puts Dir.pwd # This will return something like /usr/bin
Ex-3
  puts Dir.entries("/usr/bin").join(' ')
Ex-4
  Dir.foreach("/usr/bin") do |entry|
    puts entry
  end
Ex-5
  Dir["/usr/bin/*"]

  `}

</pre>
<h3>Creating a Directory</h3>
<pre>
  {`
  Dir.mkdir("mynewdir")

  Dir.mkdir( "mynewdir", 755 )
  `}
</pre>

<h3>Deleting a Directory</h3>
<pre>
  {`
  Dir.delete("testdir")
  `}
</pre>

<h3>Creating Files & Temporary Directories</h3>
<pre>{`
require 'tmpdir'
   tempfilename = File.join(Dir.tmpdir, "tingtong")
   tempfile = File.new(tempfilename, "w")
   tempfile.puts "This is a temporary file"
   tempfile.close
   File.delete(tempfilename)
`}</pre>
<pre>{`
require 'tempfile'
   f = Tempfile.new('tingtong')
   f.puts "Hello"
   puts f.path
   f.close
`}</pre>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="15">
        <Accordion.Header><b>16. Multithreading</b>:Thread is a unit of concurrency that allows you to execute code in parallel</Accordion.Header>
        <Accordion.Body>
          <div>
          <h3>Basic Usage</h3>
          <pre>
            {`
thread = Thread.new do
  10.times do |i|
    puts "Thread #{i}"
    sleep(1)
  end
end

10.times do |i|
  puts "Main #{i}"
  sleep(1)
end

thread.join # Wait for the thread to finish

            `}
          </pre>
          <pre>
            {`
#!/usr/bin/ruby

def func1
   i = 0
   while i<=2
      puts "func1 at: #{Time.now}"
      sleep(2)
      i = i+1
   end
end

def func2
   j = 0
   while j<=2
      puts "func2 at: #{Time.now}"
      sleep(1)
      j = j+1
   end
end

puts "Started At #{Time.now}"
t1 = Thread.new{func1()}
t2 = Thread.new{func2()}
t1.join
t2.join
puts "End at #{Time.now}"
`}
          </pre>
<h3>Thread Methods</h3>
<ul>
  <li><strong>{`Thread.new`}</strong>: Creates a new thread.</li>
  <li><strong>{`Thread#join`}</strong>: Waits for the thread to finish execution.</li>
  <li><strong>{`Thread#kill`}</strong>: Terminates the thread.</li>
  <li><strong>{`Thread#value`}</strong>: Returns the value of the thread's block after it has finished executing.</li>
  <li><strong>{`Thread.current`}</strong>: Returns the currently executing thread.</li>
  <li><strong>{`Thread.main`}</strong>: Returns the main thread.</li>
</ul>

<h2>Ruby Thread States Example</h2>
<p>In Ruby, a thread can be in one of several states during its lifecycle. Understanding these states helps in managing thread behavior effectively. Here are the main thread states in Ruby:</p>

<h2>1. New</h2>
<p>When a thread is created but not yet started, it is in the <strong>new</strong> state. This state lasts very briefly as the thread is typically started immediately after creation.</p>
<pre>{`thread = Thread.new do
# thread code here
end`}</pre>

<h2>2. Runnable</h2>
<p>Once a thread is started, it enters the <strong>runnable</strong> state. In this state, the thread is ready to run and is waiting for the CPU to allocate time for it. In MRI Ruby, due to the Global Interpreter Lock (GIL), only one thread can execute at a time, even though multiple threads may be in the runnable state.</p>

<h2>3. Running</h2>
<p>When the CPU allocates time to a thread, it enters the <strong>running</strong> state. In this state, the thread's code is actively being executed. In MRI Ruby, only one thread can be in the running state at any given time.</p>

<h2>4. Sleeping</h2>
<p>If a thread is waiting for a certain condition to be met (e.g., waiting for I/O, sleeping for a certain duration), it enters the <strong>sleeping</strong> state. The thread will not consume CPU time in this state and will resume execution once the condition is met.</p>
<pre>{`Thread.new do
sleep(10)
end`}</pre>

<h2>5. Dead</h2>
<p>Once a thread has completed its execution, it enters the <strong>dead</strong> state. In this state, the thread cannot be restarted or reused.</p>
<pre>{`thread = Thread.new do
# thread code here
end
thread.join
puts "Thread is dead" if thread.stop?`}</pre>

<h2>6. Aborting</h2>
<p>When a thread is explicitly terminated using the {`Thread#kill`} method, it enters the <strong>aborting</strong> state before transitioning to the dead state.</p>
<pre>
  {`thread = Thread.new do
loop do
puts "Thread is running"
sleep(1)
end
end

sleep(3)
thread.kill
puts "Thread has been killed"
`}
</pre>
<h2>Thread Synchronization in Ruby</h2>
    <p>In multi-threaded programming, synchronization is crucial to ensure that threads do not interfere with each other when accessing shared resources. Ruby provides several mechanisms to achieve synchronization:</p>

    <h2>1. Mutex</h2>
    <p>A {`Mutex`} (short for mutual exclusion) is a synchronization primitive that allows only one thread to access a resource at a time.</p>
    <pre>{`require 'thread'

mutex = Mutex.new
counter = 0

threads = 10.times.map do
  Thread.new do
    1000.times do
      mutex.synchronize do
        counter += 1
      end
    end
  end
end

threads.each(&:join)
puts "Counter: #{counter}"`}</pre>
    <p>In this example, the {`mutex.synchronize`} block ensures that only one thread can increment the counter at a time, preventing race conditions.</p>

    <h2>2. Monitor</h2>
    <p>A {`Monitor`} is similar to a {`Mutex`} but provides additional convenience methods for condition variables. It can be included in a class to synchronize its methods.</p>
    <pre>{`require 'monitor'

class SharedResource
  include MonitorMixin

  def initialize
    super()  # Initialize the monitor
    @resource = 0
  end

  def access
    synchronize do
      @resource += 1
      puts "Resource value: #{@resource}"
    end
  end
end

shared = SharedResource.new

threads = 10.times.map do
  Thread.new do
    100.times { shared.access }
  end
end

threads.each(&:join)`}</pre>
    <p>The {`MonitorMixin`} module is included in the class, providing synchronized access to the {`access`} method.</p>

    <h2>3. Queue</h2>
    <p>A {`Queue`} is a thread-safe data structure that can be used to communicate between threads.</p>
    <pre>{`require 'thread'

queue = Queue.new

producer = Thread.new do
  10.times do |i|
    queue << i
    puts "Produced #{i}"
    sleep(1)
  end
end

consumer = Thread.new do
  10.times do
    item = queue.pop
    puts "Consumed #{item}"
  end
end

producer.join
consumer.join`}</pre>
    <p>In this example, the producer thread adds items to the queue, and the consumer thread removes and processes them. The {`Queue`} ensures that the operations are thread-safe.</p>

    <h2>4. ConditionVariable</h2>
    <p>A {`ConditionVariable`} is used to signal between threads that a certain condition has been met. It is typically used with a {`Mutex`}.</p>
    <pre>{`require 'thread'

mutex = Mutex.new
condition = ConditionVariable.new
ready = false

producer = Thread.new do
  sleep(2)
  mutex.synchronize do
    ready = true
    condition.signal
    puts "Producer signaled"
  end
end

consumer = Thread.new do
  mutex.synchronize do
    until ready
      condition.wait(mutex)
    end
    puts "Consumer received signal"
  end
end

producer.join
consumer.join`}</pre>
    <p>In this example, the consumer thread waits for the condition to be signaled by the producer thread, ensuring proper synchronization.</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="16">
        <Accordion.Header><b>17.Regular Expressions: </b>Regular expressions (regex) are a powerful tool for pattern matching and string manipulation. In Ruby, regular expressions are created using the Regexp class.</Accordion.Header>
        <Accordion.Body>
          <div>
          <h1>Regular Expressions in Ruby</h1>
    <p>Regular expressions (regex) are a powerful tool for pattern matching and string manipulation. In Ruby, regular expressions are created using the Regexp class. Here are some common uses and syntax for regex in Ruby:</p>

    <h2>1. Creating a Regular Expression</h2>
    <p>Regular expressions are typically created using slashes ({`/`}):</p>
    <pre>{`/pattern/`}</pre>
    <p>You can also use the {`Regexp.new`} method:</p>
    <pre>{`Regexp.new('pattern')`}</pre>

    <h2>2. Matching a Pattern</h2>
    <p>To check if a string matches a pattern, use the {`=~`} operator or the {`match`} method:</p>
    <pre>{`if /pattern/ =~ 'string'
  puts 'Match found'
end

match_data = /pattern/.match('string')
if match_data
  puts 'Match found'
end`}</pre>

    <h2>3. Common Regex Patterns</h2>
    <p>Here are some common regex patterns and their meanings:</p>
    <ul>
        <li>{`.`} - Any single character except newline</li>
        <li>{`\d`} - Any digit</li>
        <li>{`\w`} - Any word character (alphanumeric + underscore)</li>
        <li>{`\s`} - Any whitespace character</li>
        <li>{`[abc]`} - Any character in the set (a, b, or c)</li>
        <li>{`[^abc]`} - Any character not in the set (not a, b, or c)</li>
        <li>{`a|b`} - Either a or b</li>
        <li>{`a*`} - Zero or more occurrences of a</li>
        <li>{`a+`} - One or more occurrences of a</li>
        <li>{`a?`} - Zero or one occurrence of a</li>
        <li>{`a{3}`} - Exactly three occurrences of a</li>
        <li>{`a{3,}`} - Three or more occurrences of a</li>
        <li>{`a{3,5}`} - Between three and five occurrences of a</li>
    </ul>

    <h2>4. Capturing Groups</h2>
    <p>Parentheses are used to create capturing groups:</p>
    <pre>{`if /(a)(b)(c)/ =~ 'abc'
  puts $1  # 'a'
  puts $2  # 'b'
  puts $3  # 'c'
end`}</pre>

    <h2>5. String Substitution</h2>
    <p>You can use the {`sub`} and {`gsub`} methods for string substitution:</p>
    <pre>{`str = 'hello world'
str.sub(/world/, 'Ruby')  # 'hello Ruby'
str.gsub(/l/, 'L')        # 'heLLo worLd'`}</pre>

    <h2>6. Regex Options</h2>
    <p>Regular expressions can be modified with options:</p>
    <ul>
        <li>{`i`} - Ignore case</li>
        <li>{`m`} - Multiline mode</li>
        <li>{`x`} - Extended mode (ignore whitespace and comments)</li>
    </ul>
    <pre>{`/pattern/i    # Case-insensitive
/pattern/m    # Multiline mode
/pattern/x    # Extended mode`}</pre>

    <h2>7. Example: Email Validation</h2>
    <p>Here's an example of a regex for validating an email address:</p>
    <pre>{`email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

if email_regex =~ 'example@example.com'
  puts 'Valid email'
else
  puts 'Invalid email'
end`}</pre>

    <h2>8. Using Regex with Enumerables</h2>
    <p>You can use regex with enumerable methods like {`grep`} to filter collections:</p>
    <pre>{`words = %w[cat bat rat hat mat]
matching_words = words.grep(/at/)
puts matching_words  # ['cat', 'bat', 'rat', 'hat', 'mat']`}</pre>
          </div>
      </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="17">
        <Accordion.Header><b>18. Emails: </b> Sending email attachments in Ruby can be achieved using the 'mail' gem and 'net/smtp'</Accordion.Header>
        <Accordion.Body>
          <div>
          <h1>Sending Email with Attachments in Ruby</h1>

    <p>This example demonstrates how to send an email with attachments using Ruby and the mail gem.</p>
    <b>1. Install the {`'mail'`} gem (if not already installed):</b>
<p>gem install mail</p>
    <h2>Ruby Script</h2>
    <pre>{`
require 'mail'

# Set up SMTP settings
options = { 
  address:              'smtp.yourserver.com',
  port:                 587,
  user_name:            'your_username',
  password:             'your_password',
  authentication:       'plain',
  enable_starttls_auto: true 
}

# Create a new Mail object
mail = Mail.new do
  from     'sender@example.com'
  to       'recipient@example.com'
  subject  'Email with Attachments'

  html_part do
    content_type 'text/html; charset=UTF-8'
    body "&lt;h1&gt;Hello from Ruby!&lt;/h1&gt;&lt;p&gt;This email contains attachments.&lt;/p&gt;"
  end

  # Attachments
  add_file '/path/to/file1.pdf'
  add_file '/path/to/file2.jpg'
end

# Deliver the email
mail.delivery_method(:smtp, options)
mail.deliver
    `}</pre>

    <h2>Explanation</h2>
    <ul>
        <li><strong>SMTP Configuration:</strong> Replace {`'smtp.yourserver.com'`}, {`'your_username'`}, {`'your_password'`}, and other SMTP settings with your actual SMTP server details.</li>
        <li><strong>Mail Object:</strong> Use {`Mail.new`} to create a new email. Specify the {`from`}, {`to`}, and {`subject`} fields.</li>
        <li><strong>HTML Content:</strong> Use {`html_part`} to specify the HTML content of the email. Ensure to set the {`content_type`} appropriately ({`text/html; charset=UTF-8`}).</li>
        <li><strong>Attachments:</strong> Use {`add_file`} to attach files to the email. Provide the full path to each file you want to attach.</li>
        <li><strong>Delivery:</strong> Configure the delivery method using SMTP ({`mail.delivery_method(:smtp, options)`}) and then call {`mail.deliver`} to send the email.</li>
    </ul>

    <p>Adjust the SMTP settings, email addresses, and file paths according to your specific use case.</p>
          

   <h1>Sending Email using {`net/smtp`} in Ruby</h1>
    <p>This example demonstrates how to send an email using {`net/smtp`} in Ruby without using additional gems.</p>

    <h2>Ruby Script</h2>
    <pre>{`
require 'net/smtp'

# SMTP server settings
smtp_server = 'smtp.yourserver.com'
smtp_port = 587
smtp_domain = 'yourdomain.com'
smtp_username = 'your_username'
smtp_password = 'your_password'

# Email details
from_address = 'sender@example.com'
to_address = 'recipient@example.com'
subject = 'Email using net/smtp'
body = "Hello,<br><br>This is a test email sent using net/smtp in Ruby."

# Construct the email message
message = "From: #{from_address}\r\n"
message += "To: #{to_address}\r\n"
message += "Subject: #{subject}\r\n"
message += "Content-Type: text/html\r\n"
message += "\r\n"
message += "#{body}"

# Send email using SMTP
Net::SMTP.start(smtp_server, smtp_port, smtp_domain, smtp_username, smtp_password, :login) do |smtp|
  smtp.send_message(message, from_address, to_address)
end

puts "Email sent successfully!"
`}
</pre>

    <h2>Explanation</h2>
    <ul>
        <li><strong>SMTP Server Settings:</strong> Replace {`smtp_server`}, {`smtp_port`}, {`smtp_domain`}, {`smtp_username`}, and {`smtp_password`} with your SMTP server details.</li>
        <li><strong>Email Details:</strong> Set {`from_address`}, {`to_address`}, {`subject`}, and {`body`} according to your email content. Use {`Content-Type: text/html`} for HTML emails.</li>
        <li><strong>Construct Message:</strong> Format the email message using HTML for the body. Ensure proper formatting with HTML tags for structure and styling.</li>
        <li><strong>Send Email:</strong> Use {`Net::SMTP.start`} to connect to the SMTP server and send the email using {`smtp.send_message`}.</li>
    </ul>


          
          </div>

        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </>);
}

export default Ruby;
