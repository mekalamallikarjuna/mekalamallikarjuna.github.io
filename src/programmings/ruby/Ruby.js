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
    </Accordion>
    </>);
}

export default Ruby;
