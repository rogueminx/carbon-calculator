# Be a Better Human

#### Angular 4 project with Firebase and user authentication, 04/12/2018.

#### By Anna Marie Cooper, Kayla Ondracek, Russell Hofvendahl, Cameron Anderson

## Description

A platform for managing personal carbon emissions. Users may sign up with their google account and, once signed in, may set goals, track progress and view tips for reducing their carbon footprint.

#### Deployment
Website is available at https://carbon-calc-e7c4c.firebaseapp.com/

<kbd><img src="src/assets/img/screenshot.png" alt=""></kbd>

#### Behavior
1. Allows user to fill out carbon footprint survey, display results real-time.
2. Allows user(me) to create secure account with Google authentication.
3. Allow user to set goal and track progress, with data displayed in a stacked line chart.
4. Allow creation and deletion of surveys in Firebase.
5. Show tips to reduce carbon emissions.
6. Allow account deletion.

## Setup/Installation Requirements

* Open terminal
* Move to desired folder
* Type  _`$ git clone https://github.com/rogueminx/carbon-calculator`_
* Type _`$ cd carbon-calculator`_ to move to directory.
* You will need to have your OWN firebase key to use this as your own. Go to 'https://console.firebase.google.com/u/0/' and create an account if necessary.
* Click on the big '+' to add a project, and give that project a name.
* Once project is created, click the large </> button to "add Firebase to a web app" A popup will come up with the following information:

    _apiKey: "xxxxxxxxx",
    authDomain: "xxxxxxxxx",
    databaseURL: "xxxxxxx",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxxxx",
    messagingSenderId: "xxxxxxxxx"_

* Type  _`$ touch src/app/api-keys.ts`_ for storing your own API Key
* Open the .api-key file and type  _`export var masterFirebaseConfig = {}`_ then type your own API key info from Firebase within the curly brackets at the end. Save and close.
* Move back to terminal, set up appropriate nodes by typing: _`$ npm install`_
* Type _`$ ng build`_
* To view the website, type : _`$ ng start`_ and navigate to `http://localhost:4200/`

## Known Bugs

None

## Support and contact details

Please contact us through github with questions.

## Technologies Used

* HTML
* CSS
* Javascript
* Webpack
* Angular
* Typescript
* Firebase

### License

Copyright (c) 2018 Anna Marie Cooper, Kayla Ondracek, Russell Hofvendahl, Cameron Anderson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
