import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button } from 'react-bootstrap';
import axios from 'axios';

function AxiosConcepts() {
  // Function to handle making a GET request
  const handleGetRequest = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        console.log('GET Response:', response.data);
      })
      .catch(error => {
        console.error('GET Error:', error);
      });
  };

  // Function to handle making a POST request
  const handlePostRequest = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .then(response => {
        console.log('POST Response:', response.data);
      })
      .catch(error => {
        console.error('POST Error:', error);
      });
  };

  // Function to handle making a PUT request
  const handlePutRequest = () => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .then(response => {
        console.log('PUT Response:', response.data);
      })
      .catch(error => {
        console.error('PUT Error:', error);
      });
  };

  // Function to handle making a DELETE request
  const handleDeleteRequest = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        console.log('DELETE Response:', response.data);
      })
      .catch(error => {
        console.error('DELETE Error:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Axios Methods</h1>
      <Accordion defaultActiveKey="0">

        {/* GET Request */}
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. GET Request</b></Accordion.Header>
          <Accordion.Body>
            <pre>{`
            // Function to handle making a GET request
            const handleGetRequest = () => {
                axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                    console.log('GET Response:', response.data);
                })
                .catch(error => {
                    console.error('GET Error:', error);
                });
            };
            `}</pre>
            <Button onClick={handleGetRequest}>Make GET Request</Button>
          </Accordion.Body>
        </Accordion.Item>

        {/* POST Request */}
        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. POST Request</b></Accordion.Header>
          <Accordion.Body>
            <pre>{`
            // Function to handle making a POST request
            const handlePostRequest = () => {
              axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: 'foo',
                body: 'bar',
                userId: 1
              })
                .then(response => {
                  console.log('POST Response:', response.data);
                })
                .catch(error => {
                  console.error('POST Error:', error);
                });
            };
            `}</pre>
            <Button onClick={handlePostRequest}>Make POST Request</Button>
          </Accordion.Body>
        </Accordion.Item>

        {/* PUT Request */}
        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. PUT Request</b></Accordion.Header>
          <Accordion.Body>
            <pre>{`
            // Function to handle making a PUT request
            const handlePutRequest = () => {
              axios.put('https://jsonplaceholder.typicode.com/posts/1', {
                title: 'foo',
                body: 'bar',
                userId: 1
              })
                .then(response => {
                  console.log('PUT Response:', response.data);
                })
                .catch(error => {
                  console.error('PUT Error:', error);
                });
            };
            `}</pre>
            <Button onClick={handlePutRequest}>Make PUT Request</Button>
          </Accordion.Body>
        </Accordion.Item>

        {/* DELETE Request */}
        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. DELETE Request</b></Accordion.Header>
          <Accordion.Body>
            <pre>{`
            // Function to handle making a DELETE request
            const handleDeleteRequest = () => {
              axios.delete('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                  console.log('DELETE Response:', response.data);
                })
                .catch(error => {
                  console.error('DELETE Error:', error);
                });
            };
            `}</pre>
            <Button onClick={handleDeleteRequest}>Make DELETE Request</Button>
          </Accordion.Body>
        </Accordion.Item>

        {/* Interceptors */}
        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Interceptors</b></Accordion.Header>
          <Accordion.Body>
            <p>Request and Response interceptors examples.</p>
            <pre>{`
            // Request interceptor example
            axios.interceptors.request.use(config => {
              // Modify request config
              return config;
            }, error => {
              return Promise.reject(error);
            });

            // Response interceptor example
            axios.interceptors.response.use(response => {
              // Modify response data
              return response;
            }, error => {
              return Promise.reject(error);
            });
            `}</pre>
          </Accordion.Body>
        </Accordion.Item>

        {/* Global Configuration */}
        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Global Configuration</b></Accordion.Header>
          <Accordion.Body>
            <p>Setting default headers and configuration.</p>
            <h4>Base URL and Headers:</h4>
            <pre>{`
            import axios from 'axios';

            // Set default configuration
            axios.defaults.baseURL = 'https://api.example.com';
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.defaults.headers.post['Content-Type'] = 'application/json';

            // Example GET request using global configuration
            axios.get('/data')
              .then(response => {
                console.log('GET Response with Global Config:', response.data);
              })
              .catch(error => {
                console.error('GET Error with Global Config:', error);
              });

            // Example POST request using global configuration
            axios.post('/data', { key: 'value' })
              .then(response => {
                console.log('POST Response with Global Config:', response.data);
              })
              .catch(error => {
                console.error('POST Error with Global Config:', error);
              });
            `}</pre>

            <h4>Setting Timeout and Other Defaults:</h4>
            <pre>{`
            import axios from 'axios';

            // Set default configuration
            axios.defaults.timeout = 10000; // 10 seconds timeout
            axios.defaults.responseType = 'json';

            // Example GET request using global configuration
            axios.get('/data')
              .then(response => {
                console.log('GET Response with Global Config:', response.data);
              })
              .catch(error => {
                console.error('GET Error with Global Config:', error);
              });
            `}</pre>

            <h4>Custom Axios Instance:</h4>
            <pre>{`
            import axios from 'axios';

            // Create a custom instance
            const customAxios = axios.create({
              baseURL: 'https://api.custom.com',
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('customToken'),
                'Content-Type': 'application/json'
              },
              timeout: 5000
            });

            // Example GET request using custom Axios instance
            customAxios.get('/custom-data')
              .then(response => {
                console.log('GET Response with Custom Axios:', response.data);
              })
              .catch(error => {
                console.error('GET Error with Custom Axios:', error);
              });
            `}</pre>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default AxiosConcepts;
