import { Profile } from "./library/utilities.js";

const socialMediaAccounts = {
    "github" : "https://github.com/jeffureta",
    "twitter" : "https://twitter.com/jepoyureta",
    "table" : "https://www.kaggle.com/jeffureta",
    "linkedin" : "https://www.linkedin.com/in/jeffureta/"
}

const myProfile = Profile.structure(
    "Rina Ureta", "Flight Attendant", 
    socialMediaAccounts, "./images/IMG_3509.jpg"
    )
$(".wrapper").append(myProfile)