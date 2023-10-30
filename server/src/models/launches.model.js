const launches = new Map();

let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'Tram Khong Gian Herta',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2024'),
    target: 'Kepler-442 b',
    customer: ['Herta', 'Asta'],
    upcoming: true,
    success: true,
};
launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['Kafka', 'SilverWolf'],
        flightNumber: latestFlightNumber,
    }));
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    launches,
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}