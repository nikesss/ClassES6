class Computer {
    constructor(name, countCore, typeCpu, ram, manufacturer, cpuSpeed) {
        this.name = name;
        this.countCore = countCore;
        this.typeCpu = typeCpu;
        this.ram = ram;
        this.manufacturer = manufacturer;
        this.cpuSpeed = cpuSpeed;
    }
    get Name() { return this.name }
    set Name(name) { this.name = name; }
    get CountCore() { return this.countCore }
    set CountCore(countCore) { this.countCore = countCore; }
    get TypeCpu() { return this.typeCpu }
    set TypeCpu(typeCpu) { this.typeCpu = typeCpu; }
    get Ram() { return this.ram }
    set Ram(ram) { this.ram = ram; }
    get Manufacturer() { return this.manufacturer }
    set Manufacturer(manufacturer) { this.manufacturer = manufacturer; }
    get CpuSpeed() { return this.cpuSpeed }
    set CpuSpeed(cpuSpeed) { this.cpuSpeed = cpuSpeed; }




}
class Ultrabook extends Computer {
    constructor(name, countCore, typeCpu, cpuSpeed, ram, manufacturer, videoСard, color, materialCorpus) {
        super(name, countCore, typeCpu, ram, manufacturer, cpuSpeed);
        this.videoСard = videoСard;
        this.color = color;
        this.materialCorpus = materialCorpus;
    }
    get Name() { super.Name() }
    set Name(name) { super.Name(name) }
    get CountCore() { super.CountCore() }
    set CountCore(countCore) { super.CountCore(countCore) }
    get TypeCpu() { super.TypeCpu() }
    set TypeCpu(typeCpu) { super.NaTypeCpume(typeCpu) }
    get Ram() { super.Ram() }
    set Ram(ram) { super.Ram(ram) }
    get Manufacturer() { super.Manufacturer() }
    set Manufacturer(manufacturer) { super.Manufacturer(manufacturer) }
    get CpuSpeed() { super.CpuSpeed() }
    set CpuSpeed(cpuSpeed) { super.CpuSpeed(cpuSpeed) }
    get VideoСard() { return this.videoСard }
    set VideoСard(videoСard) { this.videoСard = videoСard; }
    get Color() { return this.color }
    set Color(color) { this.color = color; }
    get MaterialCorpus() { return this.materialCorpus }
    set MaterialCorpus(materialCorpus) { this.materialCorpus = materialCorpus; }


    editNode(form) {

        this.name = form.elements[1].value;
        this.countCore = form.elements[2].value;
        this.typeCpu = form.elements[3].value;
        this.ram = form.elements[4].value;
        this.manufacturer = form.elements[5].value;
        this.cpuSpeed = form.elements[6].value;
        this.videoСard = form.elements[7].value;
        this.color = form.elements[8].value;
        this.materialCorpus = form.elements[9].value;

    }
    DeleteNode() {

    }

}
class ComputingServer extends Computer {
    constructor(name, countCore, typeCpu, cpuSpeed, ram, manufacturer, videoСard, typeRam, nameChipset) {
        super(name, countCore, typeCpu, ram, manufacturer, cpuSpeed);
        this.videoСard = videoСard;
        this.typeRam = typeRam;
        this.nameChipset = nameChipset;
    }
    get VideoСard() { return this.videoСard }
    set VideoСard(videoСard) { this.videoСard = videoСard; }
    get TypeRam() { return this.typeRam }
    set TypeRam(typeRam) { this.typeRam = typeRam; }
    get NameChipset() { return this.nameChipset }
    set NameChipset(nameChipset) { this.nameChipset = nameChipset; }
    editNode(form) {

        this.name = form.elements[1].value;
        this.countCore = form.elements[2].value;
        this.typeCpu = form.elements[3].value;
        this.ram = form.elements[4].value;
        this.manufacturer = form.elements[5].value;
        this.cpuSpeed = form.elements[6].value;
        this.videoСard = form.elements[7].value;
        this.typeRam = form.elements[8].value;
        this.nameChipset = form.elements[9].value;

    }
}