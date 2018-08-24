
let generateHTML = (siteJson) => {
    return new Promise((resolve, reject) => {
        let myHTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />   
        <link rel="canonical" href="${siteJson['url']}" />              
         <title>${siteJson['title']}</title>      
         <meta name="author" content="${siteJson['author']}">
         <meta name="description" content="${siteJson['description']}">
         <meta name="keywords" content="${siteJson['keywords']}">
         <meta property="og:image" content="${siteJson['image']}"/>
         <meta property="og:url" content="${siteJson['url']}" />
         <meta property="og:title" content="${siteJson['title']}" />
         <meta property="og:description" content="${siteJson['description']}"/>
         <meta property="og:type" content="website"/>
        </head>
            <body>${siteJson['bodyText']}</body>
        </html>`
        resolve(myHTML)


    });// end promise

}// end generate HTML


module.exports ={
    generateHTML:generateHTML
}