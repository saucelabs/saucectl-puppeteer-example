# saucectl puppeteer example

Example running saucectl with puppeteer.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/testrunner-toolkit/installation).

### Install `saucectl`

```shell
npm install -g saucectl
```

### Set Your Sauce Labs Credentials

#### Via Environment Variables

```shell
export SAUCE_USERNAME='your_username'
export SAUCE_ACCESS_KEY='your_access_key'
```

*or*

#### Via `saucectl configure`

```shell
saucectl configure
```

## Running The Examples

Simply check out this repo and run the appropriate command below :rocket:

### In Docker

```shell
saucectl run --test-env docker
```

![docker example](assets/docker_example.gif)

### In Sauce Cloud

Puppeteer is currently *not* available in the Sauce Cloud.

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this repository. 
