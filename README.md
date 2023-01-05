# Instantly secure your website with Security Headers and Edgio

A demo that shows how to secure your website against some common attacks like XSS, code injection, clickjacking, etc. with Edgio.

## Demo

https://rishi-raj-jain-security-headers-example-default.layer0-limelight.link/

## Try It Now

[![Deploy with Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https://github.com/rishi-raj-jain/security-headers-example)

## Getting Started

### Clone This Repo

Use `git clone https://github.com/rishi-raj-jain/security-headers-example.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
npm install
```

### Run the app locally on Edgio

Run the app with the command:

```bash
edgio dev
```

Load the site: http://127.0.0.1:3000

### Testing production build locally with Edgio

You can do a production build of your app and test it locally using:

```bash
edgio build && edgio run --production
```

Setting --production runs your app exactly as it will be uploaded to the Edgio cloud using serverless-offline.

## Deploying to Edgio

Deploying requires an account on Edgio. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Edgio by running the following in the root folder of your project:

```bash
edgio deploy
```

See [deploying](https://docs.edg.io/guides/deploying) for more information.
