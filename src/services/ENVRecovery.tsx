let env = process.env;

async function serverPort() {
    return env.PORT;
}

export {
    serverPort,
}