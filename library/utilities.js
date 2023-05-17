export class Profile {
    constructor(name,title, links, url) {
        this.name = name;
        this.title = title;
        this.links = links;
        this.url = url;
    };
    static structure(name,title,links,url) { 
        const socialMediaLinks = Object.entries(links)
            .map(([key,value]) => `<li><a href="${value}" target="_blank"><i class="bi bi-${key}"></i></a></li>`)
            .join("");
        // console.log(socialMediaLinks);
        return $("<div>").addClass("profile")
        .css(
            {
                'background':`url(${url})`,
                "background-size": "cover"
            }
        )
        .html(
            `<div class="overlay">
                <div class="about d-flex flex-column">
                    <h4>${name}</h4> <span>${title}</span>
                </div>
                <ul class="social-icons">
                    ${socialMediaLinks}
                </ul>
             </div>
            `
        );
    }    
}