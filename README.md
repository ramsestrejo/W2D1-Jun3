# W2D1-June 3, 2019


## HTTP & APIs
Today's lecture explored the interactions between web clients and web servers and what happens behind the scenes to make web applications magically work. 

Starting from what happens from the moment you enter a URL (Uniform Recource Locator) in the address bar in the browser, until the content is rendered by the browser on the client side.

We explored the inner workings of communication protocols (TCP/IP) that make the communication between 2 hosts (computers) possible. To that effect we defined key roles and responsibilities of the IP and TCP protocols and how they support the Application layer protocols (HTTP, DNS, FTP, ...) to carry out their function.

HTTP is the protocol of choice for transfering web content (content in HTML, CSS or Javascript formats, video, audio or data in JSON or XML format).

Clients submit (resource) requests to servers through the HTTP protocol. After these requests are processed, servers send back responses with a status code (200, 301, 404, 500) and payload data, if applicable.

APIs are web based data resources that are made available through entry points that provide access to remotely hosted application(s) that let users communicate to them via HTTP protocol.

## Code presented in class
For better understanding of these concepts we used the curl command to better understand how requests are sent to server and how responses are received on the client side. Then we wrote a simple program that consumes resources from a Weather data API. Given the name of a city, the program queries an API, receives the JSON data, parses it and displays the current temperature. Looking closer at the MetaWeather API, here an excerpt from its about page :
"MetaWeather is an automated weather data aggregator that takes the weather predictions from various forecasters and calculates the most likely outcome.
The thinking is that the combined knowledge of the forecasters will produce a better prediction." However, due to its own limitations, this API does not have a comprehensive support of cities instead here is a [list of regions, countries and cities](https://www.metaweather.com). You will find that Canada only has a handful of cities listed. This is an important characteristic to consider when [choosing an API that works for you](https://www.programmableweb.com/news/how-to-choose-api-works-you/2013/06/06).

Since the response from the server might take a few moments, we implemented the code using callbacks that process responses when they arrive. Since the API provides data in JSON format, the program parses data received in the response,
Ultimately, the fact that we are using Javascript makes it very easy to deal with JSON data.

Ramses Trejo
