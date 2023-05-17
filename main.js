import { Profile } from "./library/utilities.js";

const socialMediaAccounts = {
    "instagram" : "https://www.instagram.com/rina_ureta",
    "twitter" : "https://twitter.com/rina_ureta",
    "facebook" : "https://www.facebook.com/mrs.rinaureta",
    "tiktok" : "https://www.tiktok.com/@rjgcureta"
}

const myProfile = Profile.structure(
    "Rina Ureta", "Flight Attendant", 
    socialMediaAccounts, "./images/IMG_3509.jpg"
    )
$(".wrapper").append(myProfile)