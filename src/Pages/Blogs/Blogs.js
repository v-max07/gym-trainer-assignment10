import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div>
                <h3>1. Difference between authorization and authentication?</h3>
                <p>
                    Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be.
                </p>
            </div>
            <div>
                <h3>2.  Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    I am using firebase for solve authentication problem.Firebase Authentication makes building secure sign-ins for any platform easy.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
                <span>
                    <ul><li><h5>Firebase Alternatives</h5></li></ul>
                    <ol>
                        <li> Parse </li>
                        <li>  Back4App </li>
                        <li> AWS Amplify </li>
                        <li>  Kuzzle </li>
                        <li> Couchbase </li>
                        <li> NativeScript </li>
                        <li>  RxDB </li>
                        <li> SashiDo </li>
                    </ol>
                </span>   
            </div>

            <div>
                <h3>3. What other services does firebase provide other than authentication?</h3>
                <h5 className='ps-3'>There are many services which Firebase provides, Most useful of them are:</h5>
                <ol>
                    <li>Cloud Firestore.</li>
                    <li>Cloud Functions.</li>
                    <li>Authentication.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics.</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging.</li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;