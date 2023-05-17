import { Profile } from "./library/utilities.js";

const socialMediaAccounts = {
    "instagram" : "https://www.instagram.com/rina_ureta",
    "twitter" : "https://twitter.com/rina_ureta",
    "facebook" : "https://www.facebook.com/mrs.rinaureta",
    "tiktok" : "https://www.tiktok.com/@rjgcureta"
};

const myWebsite = {
    text:"www.rinaureta.com",
    href:"https://www.rinaureta.com"
};

const myProfile = Profile.structure(
    "Rina Ureta", 
    "wife", 
    myWebsite,
    socialMediaAccounts, 
    "./images/IMG_3509.jpg"
    );
$(".wrapper").append(myProfile);