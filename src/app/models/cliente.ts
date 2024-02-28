export class Cliente{
    constructor(
        public id:string,
        public nombre:string,
        public rfc:string,
        public domicilio:string,
        public tipoCliente:number,
    ){}
}