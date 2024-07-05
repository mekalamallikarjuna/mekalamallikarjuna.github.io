import React from 'react';
import { Accordion } from 'react-bootstrap';

const GitConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Initializing a Repository</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To initialize a Git repository in your project directory:
          </p>
          <pre>
            {`git init`}
          </pre>
          <p>First Setup:</p>
          <pre>
            {`$ git config --global user.name "John Doe"`}
          </pre>
          <pre>
            {`$ git config --global user.email johndoe@example.com`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Adding Files</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To add files to the staging area:
          </p>
          <pre>
            {`git add myfile.js`}
          </pre>
          <p>
            To add all files (except those listed in `.gitignore`):
          </p>
          <pre>
            {`git add .`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Committing Changes</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To commit staged changes to the repository:
          </p>
          <pre>
            {`git commit -m "Commit message"`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Checking Repository Status</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To check the status of files in the repository:
          </p>
          <pre>
            {`git status`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Viewing Commit History</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To view commit history:
          </p>
          <pre>
            {`git log`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Branching</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To create a new branch:
          </p>
          <pre>
            {`git branch new-branch`}
          </pre>
          <p>
            To switch to a branch:
          </p>
          <pre>
            {`git checkout new-branch`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b>Merging Branches</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To merge changes from one branch into another:
          </p>
          <pre>
            {`git checkout main
git merge new-branch`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header><b>Remote Repositories</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To add a remote repository:
          </p>
          <pre>
            {`git remote add origin <remote_repository_url>`}
          </pre>
          <p>
            To push changes to a remote repository:
          </p>
          <pre>
            {`git push -u origin main`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header><b>Cloning a Repository</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To clone a remote repository:
          </p>
          <pre>
            {`git clone <repository_url>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header><b>Undoing Changes</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To discard changes in the working directory:
          </p>
          <pre>
            {`git checkout -- myfile.js`}
          </pre>
          <p>
            To undo the last commit and keep changes:
          </p>
          <pre>
            {`git reset HEAD~1`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default GitConcepts;
