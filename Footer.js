import * as React from 'react';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Footer =()=>
{
    return<footer><div className='footer'>
      <center>
         <a
            href="https://www.linkedin.com/in/tharunika-balakrishnan-42525723a"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/tharunk1t"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            < GitHubIcon/>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <EmailIcon />
          </a>

        <h6>Contact Details : 0481- 256 7483</h6>
    </center>
        </div>
    </footer>
}
export default Footer;