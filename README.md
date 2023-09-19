# node-docker-applemusic-auth

A Docker container to generate an Apple Music developer token using Node.js.

## ⚠️ Security Warning ⚠️

**This container is accessible only via HTTP in its current form. As such, it should ONLY be deployed and used within a trustworthy and secure network. If you intend to use this outside of a secure intranet, it's essential to connect it to a front door/proxy either self-hosted or via a trusted cloud provider (like Azure). Note that while traffic to the front door would be encrypted, once it passes the front door and reaches the container, the traffic would no longer be encrypted. Please take necessary precautions when deploying and accessing this service.**

## Description

This project offers a streamlined way to generate an Apple Music developer token, which is necessary for accessing certain functionalities of the Apple Music API. The application is housed within a Docker container for ease of deployment and scalability.

## Getting Started

### Prerequisites

- Docker: Ensure Docker is installed on your machine. If not, download and install from [Docker's official website](https://www.docker.com/).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HenrikSchnettler/node-docker-applemusic-auth.git
```

2. Navigate to the project directory:

```bash
cd node-docker-applemusic-auth
```

3. Build the Docker container:

```bash
docker build -t node-docker-applemusic-auth .
```

## Usage

Run the Docker container:

```bash
docker run -p [YOUR_PREFERRED_PORT]:[CONTAINER_PORT] -e PRIVATE_KEY_BASE64=your_base64_key -e API_KEY=your_api_key node-docker-applemusic-auth
```

## Environment Variables

To run the token generator successfully, you must pass the following environment variables:

- `PRIVATE_KEY_BASE64`: This is the secret obtained from the Apple developer website. Make sure to convert it to Base64 before passing it to the container.

- `API_KEY`: A unique API key used for simple authentication. This is to ensure that only authorized users or systems are generating tokens.
