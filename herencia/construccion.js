class Construccion{
    constructor(numPuertas,numVentanas,numPisos,
                idTerreno,calle,avenida,zona,ciudad,altura,largo,ancho){
                    this._numPuertas=numPuertas
                    this._numVentanas=numVentanas
                    this._numPisos=numPisos
                    this._idTerreno=idTerreno
                    this._calle=calle
                    this._avenida=avenida
                    this._zona=zona
                    this._ciudad=ciudad
                    this._altura=altura
                    this._largo=largo
                    this._ancho=ancho
                }
                getNumPuertas() {return this._numPuertas}
                getNumVentanas(){return this._numVentanas}
                getNumPisos()   {return this._numPisos}
                getIdTerreno()  {return this._idTerreno}
                getCalle()      {return this._calle}
                getAvenida()    {return this._avenida}
                getZona()       {return this._zona}
                getCiudad()     {return this._ciudad}
                getAltura()     {return this._altura}
                getLargo()      {return this._largo}
                getAncho()      {return this._ancho}

                setIdTerreno(newIdTerreno){this._idTerreno=newIdTerreno}
                setCalle    (newCalle)    {this._calle=newCalle}
                setAvenida  (newAvenida)  {this._avenida=newAvenida}
                setZona     (newZona)     {this._zona=newZona}
                setCiudad   (newCiudad)   {this._ciudad=newCiudad}

                area(){
                    return 'El área es de: '+this.getLargo()*this.getAncho() + ' metros cuadrados'
                }
                direccion(){
                    return `La direccion es: ${this.getIdTerreno()}, ${this.getCalle()} Calle y 
                    ${this.getAvenida()}, Zona ${this.getZona()}, Ciudad ${this.getCiudad()}`
                }
                modDireccion(nIdTerreno,nCalle,nAvenida,nZona,nCiudad){
                    this.setIdTerreno(nIdTerreno)
                    this.setCalle(nCalle)
                    this.setAvenida(nAvenida)
                    this.setZona(nZona)
                    this.setCiudad(nCiudad)

                    return `La nueva direccion es: ${this.getIdTerreno()}, ${this.getCalle()} Calle y 
                    ${this.getAvenida()}, Zona ${this.getZona()}, Ciudad ${this.getCiudad()}`
                }
}
class Casa extends Construccion{
    constructor(numPuertas,numVentanas,numPisos,
        idTerreno,calle,avenida,zona,ciudad,altura,largo,ancho){
            super(numPuertas,numVentanas,numPisos,
                idTerreno,calle,avenida,zona,ciudad,altura,largo,ancho)
        }
}
class Edificio extends Construccion{
    constructor(numPuertas,numVentanas,numPisos,
        idTerreno,calle,avenida,zona,ciudad,altura,largo,ancho){
            super(numPuertas,numVentanas,numPisos,
                idTerreno,calle,avenida,zona,ciudad,altura,largo,ancho)
        }
}
 let casa1 = new Casa(3,2,2,865,12,23,12,'Guatemala','12m',14,24)

 console.log(casa1.area())
 console.log(casa1.direccion())
 console.log(casa1.modDireccion(689,13,22,14,'Mixco'))