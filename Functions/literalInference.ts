function handleRequest(url: string, method: "GET" | "POST") {
    console.log(url);
    console.log(method);
}
 
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method as "GET");