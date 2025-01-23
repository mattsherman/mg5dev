---
title: "Handling gzip Responses with .NET's HttpClient" 
date: 2025-01-23T00:00:00-0500
excerpt: Learn how to handle gzip responses automatically with .NET's HttpClient.
---

Recently, I was working on a project that required me to make HTTP requests to a service that returned gzip-compressed responses for some endpoints. I was using .NET's [`HttpClient`](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?view=net-9.0) class to make the requests, and was surprised that gzip responses were not automatically decompressed. I had to add a few lines of code to enable automatic handling of the decompression.

```csharp
using System.Net;

var httpClientHandler = new HttpClientHandler
{
    AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate
};

var httpClient = new HttpClient(httpClientHandler);
```