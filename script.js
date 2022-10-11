const statusRef = document.querySelector(".status");

function getStubscriptionStatus() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("FREE");
        }, 2000);
    })
}

function getVideo (subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getStubscriptionStatus();
    statusRef.innerHTML = status;
    console.log(await getVideo(status))
}

main();