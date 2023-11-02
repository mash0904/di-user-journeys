//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

// Routes for auth pages

// Run this code when a form is submitted to 'get-securit-code-answer'
router.post('/get-security-code-answer', function (req, res) {

    // Make a variable and give it the value from 'choose-security-codes'
    var choosecodes = req.session.data['choose-security-codes']
  
    // Check whether the variable matches a condition
    if (choosecodes == "Authenticator app for smartphone, tablet or computer"){
      // Send user to set up auth app
      res.redirect('/page-index/authentication/create-account/auth-app')
    } else {
      // Send user to enter phone number
      res.redirect('/page-index/authentication/create-account/enter-phone-number')
    }
  
  })
  

// Routes for APP CRI Pages

// Run this code when a form is submitted to '/computer-or-tablet/answer'
router.post('/computer-or-tablet/answer', function (req, res) {

    // Make a variable and give it the value from 'choose-security-codes'
    var computerortablet = req.session.data['computer-or-tablet']
  
    // Check whether the variable matches a condition
    if (computerortablet == "No, I am on another device"){
      // Send user to set up auth app
      res.redirect('/page-index/app-cri/on-a-smartphone')
    } else {
      // Send user to enter phone number
      res.redirect('/page-index/app-cri/have-a-smartphone')
    }
  
  })

  // Run this code when a form is submitted to '/have-a-smartphone/answer'
router.post('/have-a-smartphone/answer', function (req, res) {

    // Make a variable and give it the value from 'smartphone-choice'
    var smartphonechoice = req.session.data['smartphone-choice']
  
    // Check whether the variable matches a condition
    if (smartphonechoice == "I don't have either of these"){
      // Send user to security questions
      res.redirect('/page-index/app-cri/ineligible')
    } else {
      // Send user to check valid passport
      res.redirect('/page-index/app-cri/valid-passport')
    }
  
  })

  // Run this code when a form is submitted to '/on-a-smartphone/answer'
router.post('/on-a-smartphone/answer', function (req, res) {

    // Make a variable and give it the value from 'smartphone-choice'
    var onsmartphone = req.session.data['smartphone']
  
    // Check whether the variable matches a condition
    if (onsmartphone == "I am not on either of these phones"){
      // Send user to security questions
      res.redirect('/page-index/app-cri/ineligible')
    } else {
      // Send user to check valid passport
      res.redirect('/page-index/app-cri/valid-passport')
    }
  
  })



  // Run this code when a form is submitted to '/valid-passport/answer'
router.post('/valid-passport/answer', function (req, res) {

    // Make a variable and give it the value from 'valid-passport'
    var validpassport = req.session.data['valid-passport']
  
    // Check whether the variable matches a condition
    if (validpassport == "Yes"){
      // Send user to check passport is biometric
      res.redirect('/page-index/app-cri/biometric-passport')
    } else {
      // Send user to driving licence
      res.redirect('/page-index/app-cri/driving-licence')
    }
  
  })

  // Run this code when a form is submitted to '/driving-licence/answer'
router.post('/driving-licence/answer', function (req, res) {

    // Make a variable and give it the value from 'valid-passport'
    var drivinglicence = req.session.data['driving-licence']
  
    // Check whether the variable matches a condition
    if (drivinglicence == "Yes"){
      // Send user to driving licence
      res.redirect('/page-index/app-cri/use-app-driving-licence')
    } else {
      // Send user to security questions
      res.redirect('/page-index/app-cri/ineligible')
    }
  
  })

  // Run this code when a form is submitted to '/biometric-passport/answer'
router.post('/page-index/app-cri/biometric-passport/answer', function (req, res) {

    // Make a variable and give it the value from 'biometric-passport'
    var biometric = req.session.data['biometric-passport'];

    // Check whether the variable matches a condition
    if (biometric == "Yes"){
      // Send user to check iphone model
      res.redirect('/page-index/app-cri/iphone-model')
    } else {
      // Send user to check driving licence
      res.redirect('/page-index/app-cri/driving-licence')
    }
  
})


// Run this code when a form is submitted to '/iphone-model/answer'
router.post('/iphone-model/answer', function (req, res) {

    // Make a variable and give it the value from 'iphone-model'
    var iphone = req.session.data['iphone-model'];

    // Check whether the variable matches a condition
    if (iphone == "iPhone 7 or newer"){
      // Send user to use app
      res.redirect('/page-index/app-cri/use-app-passport')
    } else {
      // Send user to check driving licence
      res.redirect('/page-index/app-cri/driving-licence')
    }
  
})



// Run this code when a form is submitted to '/working-camera/answer'
router.post('/working-camera/answer', function (req, res) {

    // Make a variable and give it the value from 'working-camera'
    var camera = req.session.data['working-camera'];

    // Check whether the variable matches a condition
    if (camera == "Yes"){
      // Send user to next eligibility question
      res.redirect('/page-index/app-cri/flashing-colours')
    } else {
      // Send user to security questions
      res.redirect('/page-index/app-cri/ineligible')
    }
  
})


// Run this code when a form is submitted to '/flashing-colours/answer'
router.post('/flashing-colours/answer', function (req, res) {

    // Make a variable and give it the value from 'flashing-colours'
    var colours = req.session.data['flashing-colours'];

    // Check whether the variable matches a condition
    if (colours == "Yes"){
      // Send user to next eligibility question
      res.redirect('/page-index/app-cri/download-app')
    } else {
      // Send user to security questions
      res.redirect('/page-index/app-cri/ineligible')
    }
  
})



//round 1 research

// Run this code when a form is submitted to '/problem-creating-account-answer'
router.post('/problem-creating-account-answer', function (req, res) {

  // Make a variable and give it the value from 'choose-security-codes'
  var problemcreatingaccount = req.session.data['problem-creating-account']

  // Check whether the variable matches a condition
  if (problemcreatingaccount == "The security code did not work"){
    // Send user to security code did not work
    res.redirect('/user-research/round1/Task-1/send-email/security-code-does-not-work')
  } else {
    // Send user to enter security code not received
    res.redirect('/user-research/round1/Task-1/send-email/security-code-not-received')
  }

})

// Run this code when a form is submitted to '/report-problem-or-give-feedback-answer'
router.post('/report-problem-or-give-feedback-answer', function (req, res) {

  // Make a variable and give it the value from 'contact about'
  var contactabout = req.session.data['contact-about']

  // Check whether the variable matches a condition
  if (contactabout == "A suggestion or feedback about using your GOV.UK One Login"){
    // Send user to give feedback
    res.redirect('/user-research/round1/Task-1/send-email/feedback')
  } else {
    // Send user to problem creating account
    res.redirect('/user-research/round1/Task-1/send-email/problem-creating-account')
  }

})





//round 2 research

// Run this code when a form is submitted to '/problem-creating-account-answer'
router.post('/round2/Task-1/send-email/problem-creating-account-answer', function (req, res) {

  // Make a variable and give it the value from 'choose-security-codes'
  var problemcreatingaccount = req.session.data['problem-creating-account']

  // Check whether the variable matches a condition
  if (problemcreatingaccount == "The security code did not work"){
    // Send user to security code did not work
    res.redirect('/user-research/round2/Task-1/send-email/security-code-does-not-work')
  } else {
    // Send user to enter security code not received
    res.redirect('/user-research/round2/Task-1/send-email/security-code-not-received')
  }

})

// Run this code when a form is submitted to '/report-problem-or-give-feedback-answer'
router.post('/round2/Task-1/send-email/report-problem-or-give-feedback-answer', function (req, res) {

  // Make a variable and give it the value from 'contact about'
  var contactabout = req.session.data['contact-about']

  // Check whether the variable matches a condition
  if (contactabout == "A suggestion or feedback about using your GOV.UK One Login"){
    // Send user to give feedback
    res.redirect('/user-research/round2/Task-1/send-email/feedback')
  } else {
    // Send user to problem signing in
    res.redirect('/user-research/round2/Task-1/send-email/problem-signing-in')
  }

})








//MVP journey concept

// Run this code when a form is submitted to '/problem-creating-account-answer'
router.post('/exploratory-concepts/v1/send-email/problem-creating-account-answer', function (req, res) {

  // Make a variable and give it the value from 'choose-security-codes'
  var problemcreatingaccount = req.session.data['problem-creating-account']

  // Check whether the variable matches a condition
  if (problemcreatingaccount == "The security code did not work"){
    // Send user to security code did not work
    res.redirect('/exploratory-concepts/v1/send-email/security-code-does-not-work')
  } else {
    // Send user to enter security code not received
    res.redirect('/exploratory-concepts/v1/send-email/security-code-not-received')
  }

})

// Run this code when a form is submitted to '/report-problem-or-give-feedback-answer'
router.post('/exploratory-concepts/v1/send-email/report-problem-or-give-feedback-answer', function (req, res) {

  // Make a variable and give it the value from 'contact about'
  var contactabout = req.session.data['contact-about']

  // Check whether the variable matches a condition
  if (contactabout == "A suggestion or feedback about using your GOV.UK One Login"){
    // Send user to give feedback
    res.redirect('/exploratory-concepts/v1/send-email/feedback')
  } else {
    // Send user to problem signing in
    res.redirect('/exploratory-concepts/v1/send-email/problem-signing-in')
  }

})

