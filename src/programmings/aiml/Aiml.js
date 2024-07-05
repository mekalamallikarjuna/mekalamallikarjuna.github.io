// Aiml.js
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Aiml = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:AI/ML");
    return (<>
    <h3> AI/ML:</h3>
    <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
    <h1>AI/ML Concepts</h1>
        
        <h2>1. Artificial Intelligence (AI)</h2>
        <p><strong>Definition:</strong> AI is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction.</p>
        <h3>Types:</h3>
        <ul>
            <li><strong>Narrow AI:</strong> AI systems that are designed to perform a narrow task (e.g., facial recognition, internet searches).</li>
            <li><strong>General AI:</strong> AI systems that possess the ability to perform any intellectual task that a human being can do.</li>
            <li><strong>Superintelligent AI:</strong> AI that surpasses human intelligence and capability.</li>
        </ul>
        
        <h2>2. Machine Learning (ML)</h2>
        <p><strong>Definition:</strong> ML is a subset of AI that involves the use of algorithms and statistical models to enable computers to improve their performance on a task through experience (data).</p>
        <h3>Types:</h3>
        <ul>
            <li><strong>Supervised Learning:</strong> The model is trained on a labeled dataset, which means that each training example is paired with an output label. Common algorithms include Linear Regression, Logistic Regression, and Support Vector Machines.</li>
            <li><strong>Unsupervised Learning:</strong> The model is used on data that has no labels. The system tries to learn the patterns and the structure from the data. Common algorithms include Clustering (K-means, Hierarchical), and Association (Apriori, Eclat).</li>
            <li><strong>Reinforcement Learning:</strong> The model learns to make decisions by taking actions in an environment to maximize cumulative reward. Examples include Q-Learning and Deep Q Networks (DQN).</li>
        </ul>
        
        <h2>3. Deep Learning (DL)</h2>
        <p><strong>Definition:</strong> DL is a subset of ML that uses neural networks with many layers (deep neural networks) to analyze various factors of data. DL algorithms are inspired by the structure and function of the brain called artificial neural networks.</p>
        <h3>Common Architectures:</h3>
        <ul>
            <li><strong>Convolutional Neural Networks (CNNs):</strong> Primarily used for image data.</li>
            <li><strong>Recurrent Neural Networks (RNNs):</strong> Used for sequential data, such as time series or natural language.</li>
            <li><strong>Generative Adversarial Networks (GANs):</strong> Used for generating new, synthetic data.</li>
        </ul>
        
        <h2>4. Key Concepts and Terms</h2>
        <ul>
            <li><strong>Feature:</strong> An individual measurable property or characteristic of a phenomenon being observed.</li>
            <li><strong>Label:</strong> The output variable that the model is predicting.</li>
            <li><strong>Training Set:</strong> The subset of the dataset used to train the model.</li>
            <li><strong>Validation Set:</strong> A subset of the dataset used to provide an unbiased evaluation of a model fit during training.</li>
            <li><strong>Test Set:</strong> A subset of the dataset used to provide an unbiased evaluation of a final model fit.</li>
            <li><strong>Overfitting:</strong> When a model learns the training data too well, including its noise and outliers, which negatively impacts its performance on new data.</li>
            <li><strong>Underfitting:</strong> When a model is too simple to capture the underlying pattern of the data.</li>
            <li><strong>Hyperparameters:</strong> Parameters whose values are used to control the learning process. Examples include learning rate, number of epochs, and batch size.</li>
            <li><strong>Cross-validation:</strong> A technique for assessing how a model will generalize to an independent dataset. The dataset is split into k subsets, and the model is trained k times, each time using a different subset as the test set and the remaining subsets as the training set.</li>
        </ul>
        
        <h2>5. Common Algorithms</h2>
        <ul>
            <li><strong>Linear Regression:</strong> Used for predicting a continuous dependent variable from an independent variable.</li>
            <li><strong>Logistic Regression:</strong> Used for binary classification problems.</li>
            <li><strong>Decision Trees:</strong> A model that splits the data into subsets based on the value of input features.</li>
            <li><strong>Random Forest:</strong> An ensemble method that uses multiple decision trees to improve performance.</li>
            <li><strong>Support Vector Machines (SVM):</strong> Used for classification tasks by finding the hyperplane that best separates the classes.</li>
            <li><strong>K-Nearest Neighbors (KNN):</strong> A non-parametric method used for classification and regression.</li>
            <li><strong>K-Means Clustering:</strong> Used for partitioning data into k distinct clusters.</li>
        </ul>
        
        <h2>6. Neural Networks</h2>
        <ul>
            <li><strong>Neuron:</strong> The basic unit of a neural network, analogous to a biological neuron.</li>
            <li><strong>Layer:</strong> A collection of neurons operating together within a neural network.</li>
            <li><strong>Activation Function:</strong> A function applied to a neuron's output to introduce non-linearity, allowing the network to learn complex patterns.</li>
            <li><strong>Backpropagation:</strong> The process of training a neural network by adjusting weights to minimize the error.</li>
        </ul>
    </div>
    <Accordion eventKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b></b></Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>);
}

export default Aiml;
