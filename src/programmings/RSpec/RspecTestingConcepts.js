import React from 'react';
import { Accordion } from 'react-bootstrap';

const RspecTestingConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>RSpec Overview</b></Accordion.Header>
        <Accordion.Body>
          <p>
            RSpec is a popular Ruby testing framework used for Behavior-Driven Development (BDD). It provides a domain-specific language (DSL) for writing tests in a readable and expressive manner.
          </p>
          <p>
            Example: Writing a simple RSpec test for a Ruby class method.
          </p>
          <pre>
            {`# spec/models/user_spec.rb
RSpec.describe User, type: :model do
  describe "#full_name" do
    it "returns the full name" do
      user = User.new(first_name: "John", last_name: "Doe")
      expect(user.full_name).to eq("John Doe")
    end
  end
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Describe and Context Blocks</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Describe and context blocks in RSpec help organize tests into logical groups and provide context for each test scenario.
          </p>
          <p>
            Example: Using describe and context blocks to structure tests for different scenarios of a controller action.
          </p>
          <pre>
            {`# spec/controllers/posts_controller_spec.rb
RSpec.describe PostsController, type: :controller do
  describe "GET #index" do
    context "when user is logged in" do
      it "returns a success response" do
        sign_in create(:user)
        get :index
        expect(response).to be_successful
      end
    end
    
    context "when user is not logged in" do
      it "redirects to login page" do
        get :index
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Matchers</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Matchers in RSpec are used to assert conditions in tests. They allow you to specify expected outcomes and verify behaviors.
          </p>
          <p>
            Example: Using built-in matchers to validate the behavior of a method.
          </p>
          <pre>
            {`# spec/models/user_spec.rb
RSpec.describe User, type: :model do
  describe "#active?" do
    it "returns true for active users" do
      user = User.new(status: "active")
      expect(user.active?).to be_truthy
    end
    
    it "returns false for inactive users" do
      user = User.new(status: "inactive")
      expect(user.active?).to be_falsey
    end
  end
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Mocks and Stubs</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Mocks and stubs in RSpec are used to isolate code under test by simulating dependencies or controlling method responses.
          </p>
          <p>
            Example: Using a stub to simulate external service responses in a controller test.
          </p>
          <pre>
            {`# spec/controllers/orders_controller_spec.rb
RSpec.describe OrdersController, type: :controller do
  describe "POST #create" do
    it "creates a new order" do
      allow_any_instance_of(PaymentService).to receive(:process_payment).and_return(true)
      post :create, params: { order: { amount: 100 } }
      expect(Order.count).to eq(1)
      expect(response).to redirect_to(order_path(Order.first))
    end
  end
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Before and After Hooks</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Before and after hooks in RSpec allow you to run setup and teardown code before and after each test or test suite, helping to ensure test environment consistency.
          </p>
          <p>
            Example: Using before and after hooks to set up and clean up test data for model tests.
          </p>
          <pre>
            {`# spec/models/post_spec.rb
RSpec.describe Post, type: :model do
  before(:each) do
    @user = create(:user)
  end
  
  after(:each) do
    Post.delete_all
    User.delete_all
  end
  
  describe "#publish" do
    it "sets published_at date" do
      post = @user.posts.create(title: "Test Post", content: "Lorem ipsum")
      post.publish
      expect(post.published_at).to_not be_nil
    end
  end
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Shared Examples and Contexts</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Shared examples and contexts in RSpec allow you to define reusable test components that can be shared across different tests or test suites.
          </p>
          <p>
            Example: Defining a shared example for validating presence validation in multiple models.
          </p>
          <pre>
            {`# spec/support/shared_examples/validations.rb
RSpec.shared_examples "presence validation" do |attribute|
  it "validates presence of #{attribute}" do
    model = described_class.new
    model[attribute] = nil
    expect(model).not_to be_valid
    expect(model.errors[attribute]).to include("can't be blank")
  end
end

# spec/models/user_spec.rb
RSpec.describe User, type: :model do
  it_behaves_like "presence validation", :username
  it_behaves_like "presence validation", :email
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default RspecTestingConcepts;
