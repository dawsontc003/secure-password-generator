# secure-password-generator

## Description:

This webpage was a project where random passwords can be generated at a given users discretion. Security is an essential part of applications these days and with evolving ability of Cyber attach tactics a small tool like this can be useful. Users can allow this webpage to generate them a secure random passord. This tool will allow a user to select between one or all character types of Upper case, Lower case, Numeric, or Special characters based on the mandatory requirements of the password criteria as well as exclude unwanted characters when the password requirements are not as strict. A user can generate a password with a character length range of 8 -128.

### Challenges:

Challenges here were specific to the order of execution of code in JS. There were items that required variables to be stored outside of the fucntion that would utilize them. There was also the challenge of making character requirements present only during certain conditions and maintaining the user specified outcome for the character length. This provided a learning curve with leveraging a for loop properly. Certain conditions need to be clear so the output of the for loop is intact with all variables with conditions. I see these actions being a staple in JS development.

# pseudo code

User needs to initiate request for secure password
Prompt user to select desired length of password between 8-128 characters

<!-- prompt("enter desired password length between 8 - 128 characters." + totalCost); -->

Prompt use to select qualifying characters for the password special characters/numeric/uppercase/lowercase

At least one character type from line 7 is required
Once prompts are selected then generate password with requested criteria
Then display the password with an alert
