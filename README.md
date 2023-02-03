![banner](handlin-baner.png)

# handlin

> Handlin allows to generate and handle NodeJS API responses. It embraces the model-router-controller-service API model.

## Prerequisites

This project requires NodeJS (version 18 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.13.2
v18.0.0
```

## Table of contents

- [handlin](#handlin)

  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [RCS](#rcs)
  - [Usage](#usage)

    - [Generating responses](#generating-responses)
    - [Handling responses](#handling-responses)

  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [Readme template credits](#readme-template-credits)

## Getting Started

## Installation

## RCS

The **handling** package relies on Router Controller Service API design pattern.

In this pattern, a **Router component** is responsible for mapping incoming requests to the appropriate Controller.

The **Controller component** then calls the appropriate Service component to execute the requested business logic, and finally returns the result to the Router component, which returns it to the client.

The **Service component** encapsulates the application's business logic and communicates with data storage or other external systems as necessary.

## Usage

### Generating responses

To generate response with handlin, you first need to import the generateResponse method:

```js
import { generateResponse } from "handlin";
```

It takes as a parameter an object with the following fields:

| Property    | Type   | Required | Description                                                                                                                          |
| ----------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| code        | number | Yes      | A http response code that should be sent                                                                                             |
| success     | bool   | No       | Boolean value indicating if the response resulted with a success                                                                     |
| status      | string | No       | By default it attaches statuses correcsponsing to status codes from [http-status](https://www.npmjs.com/package/http-status) library |
| message     | string | No       | By default it attaches messages correcsponsing to status codes from [http-status](https://www.npmjs.com/package/http-status) library |
| redirectUrl | string | No       | A url to a destination where the user will be redirected with the response                                                           |
| data        | object | No       | Data attached to the response                                                                                                        |

```ts
return generateResponse({ code: 200, data: sampleObject });
```

OR more detailed:

```ts
return generateResponse({
  code: 200,
  message: "Data retrieved succesfully!",
  success: true,
  data: sampleObject,
});
```

Full sample of the code from service:

```ts
import { generateResponse } from "handlin";

export const getSampleData = async () => {
  const sampleObject = {
    _id: "63dd72562dae3971744d65b1",
    isActive: false,
    balance: "$2,693.75",
    name: "Floyd Kerr",
    gender: "male",
    email: "floydkerr@satiance.com",
  };

  return generateResponse({
    code: 200,
    message: "Data retrieved succesfully!",
    success: true,
    data: sampleObject,
  });
};
```

### Handling responses

To handle response with handlin, you first need to import the handleResponse method:

```ts
import { handleResponse } from "handlin";
```

Then, use it by providing response from service and request, response from express as parameters:

```ts
const response = await SampleService.getSampleData();

return handleResponse(response, req, res);
```

Full sample of the code from controller:

```ts
import { Request, Response } from "express";
import { handleResponse, generateResponse } from "handlin";
import * as SampleService from "../services/sample.service";

export const getSampleData = async (req: Request, res: Response) => {
  try {
    //Retrieve response from the service
    const response = await SampleService.getSampleData();

    //Handle the response - return data to the user
    return handleResponse(response, req, res);
  } catch (e) {
    //In case of a potential error, catch it, generate error response and handle it immediately

    if (e instanceof Error) {
      return handleResponse(
        generateResponse({ code: 500, message: e.message }),
        req,
        res
      );
    }
  }
};
```

## Contributing

## Versioning

## Authors

- **bas0N** - _Initial work_ - [bas0N](https://github.com/bas0N)

## License

MIT License

## Readme template credits

[Andrea SonnY](https://gist.github.com/andreasonny83/7670f4b39fe237d52636df3dec49cf3a.js)
