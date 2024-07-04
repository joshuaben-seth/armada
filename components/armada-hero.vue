<template>
    <div class="relative h-screen overflow-hidden bg-black">
        <img src="~/assets/car.png" class="absolute top-0 left-0 w-screen h-full object-cover z-0" />
        <div class="absolute inset-0 bg-black bg-opacity-80 z-5"></div>
        <div class="absolute inset-0 flex flex-col items-center pt-32 lg:pt-64 z-10">
            <img class="h-40 w-40" src="~/assets/logo.svg" alt="Armada logo" />
            <h1 class="text-3xl lg:text-5xl mb-4 font-prospac text-center text-white">Drive your dreams</h1>
            <p class="text-white font-raleway tracking-semihuge lg:tracking-huge">ALL THINGS CARS</p>
            <armada-socials class="mt-10" />
        </div>
    </div>
</template>