class ResourceProcessorStation {
    constructor (name, monthlyProcesssing) {
        this.name = name
        this.monthlyProcesssing = monthlyProcesssing
    }
    static calculateProcessInHours(monthlyProcesssing, hours) {
        return monthlyProcesssing / 720 * hours
    }
}

/*let totalprocessing  = ResourceProcessorStation.calculateProcessInHours(500,100)

console.log(totalprocessing)*/

let processor = new ResourceProcessorStation("Gaya",2000)

let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcesssing,10)
console.log(totalProcessed)